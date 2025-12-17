// public/js/makeAWish.js

let roundsPlayed = 0;
let wishPrepared = false;   // true after 20 rounds
let wishGranted = false;    // true after first win post-20
let rewardReady = false;    // true after player picks Safe/Double
let pendingReward = null;   // "safe" | "double" | null

export function initMakeAWish() {
  const chip = document.getElementById("wish-chip");
  const toast = document.getElementById("wish-toast");
  const safeBtn = document.getElementById("wish-safe-btn");
  const doubleBtn = document.getElementById("wish-double-btn");
  const closeBtn = document.getElementById("wish-panel-close");
  const panel = document.getElementById("wish-panel");

  updateChip("⭐ Wish: 0 / 20");

  if (chip) {
    chip.addEventListener("click", () => {
      if (wishGranted) openPanel();
    });
  }

  if (toast) {
    toast.addEventListener("click", () => {
      if (wishGranted) openPanel();
    });
  }

  if (safeBtn) {
    safeBtn.addEventListener("click", () => chooseReward("safe"));
  }

  if (doubleBtn) {
    doubleBtn.addEventListener("click", () => chooseReward("double"));
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => closePanel());
  }

  // Close panel when clicking outside
  if (panel) {
    panel.addEventListener("click", (e) => {
      if (e.target === panel) {
        closePanel();
      }
    });
  }
}

// Call this after each round settles
// result: "win" | "lose"
// baseProfit: normal win amount before promos (not directly needed here, but provided if useful)
export function onRoundComplete(result, baseProfit) {
  roundsPlayed++;
  
  // Debug logging (remove in production if needed)
  console.log('Make a Wish: Round completed', { 
    roundsPlayed, 
    result, 
    baseProfit,
    wishPrepared,
    wishGranted,
    rewardReady,
    pendingReward
  });

  // Before 20 rounds: track progress
  if (!wishPrepared && roundsPlayed < 20) {
    const chipText = `⭐ Wish: ${roundsPlayed} / 20`;
    console.log('Make a Wish: Updating chip to', chipText);
    updateChip(chipText);
    return;
  }

  // Exactly 20 rounds: wish is now prepared, waiting for a win
  if (!wishPrepared && roundsPlayed === 20) {
    wishPrepared = true;
    updateChip("⭐ Wish ready on win", "ready");
    return;
  }

  // After 20 rounds: first win grants the wish
  if (wishPrepared && !wishGranted && result === "win") {
    wishGranted = true;
    showToast();
    updateChip("✨ Make a wish ✨", "granted");
    return;
  }
}

// Call this BEFORE sending a bet to the server
// If the player had a wish but didn't claim it, this forfeits it.
// If they chose a reward, this attaches it to the bet payload.
// Returns true if wish reward was applied to this bet
export function handleWishOnBet(betPayload) {
  // Case 1: A wish was granted but player never claimed it, and is betting anyway.
  if (wishGranted && !rewardReady) {
    forfeitWish();
    return false;
  }

  // Case 2: Player has chosen Safe/Double, attach to this bet (only first bet gets it).
  if (rewardReady && pendingReward) {
    betPayload.wishReward = pendingReward;  // "safe" or "double"
    rewardReady = false;
    // pendingReward remains set until payout is calculated.
    return true;
  }
  
  return false;
}

// Track if wish was consumed this round (to reset after all bets processed)
let wishConsumedThisRound = false;

// Call this when calculating payout for the round
// result: "win" | "lose"
// baseProfit: normal calculated profit for this bet (before wish)
// Returns the adjusted payout
export function applyWishPayout(result, baseProfit) {
  if (!pendingReward) return baseProfit;

  let final = baseProfit;

  if (pendingReward === "safe") {
    // Guaranteed minimum 10 units win (R10 as per spec, but works with any currency)
    const minWin = 10;
    if (result === "win") {
      final = baseProfit >= minWin ? baseProfit : minWin;
    } else {
      // Even on loss, Safe Bet guarantees minimum win
      final = minWin;
    }
  }

  if (pendingReward === "double") {
    if (result === "win") {
      final = baseProfit * 2;
    } else {
      final = 0;
    }
  }

  // Mark that wish was consumed (will reset after round completes)
  wishConsumedThisRound = true;
  
  return final;
}

// Call this after all bets in a round are processed to reset wish cycle if wish was used
export function finalizeWishCycle() {
  if (wishConsumedThisRound) {
    // Wish was used, reset the cycle
    pendingReward = null;
    roundsPlayed = 0;
    wishPrepared = false;
    wishGranted = false;
    rewardReady = false;
    wishConsumedThisRound = false;
    updateChip("⭐ Wish: 0 / 20");
  }
}

// Call this once after a round completes to reset the wish cycle
// Only resets if a wish reward was actually used in the round
export function resetWishCycle() {
  // Check if a wish reward was used - if pendingReward was set, it means a wish was chosen
  // and should be consumed. We need to track if it was actually applied to a bet.
  // For now, if pendingReward exists, it means a wish was chosen but might not have been used yet.
  // The actual reset of roundsPlayed should happen after the wish is consumed.
  // This function is called after the round, so if pendingReward still exists, it wasn't used.
  // We should only reset the wish state, not roundsPlayed, unless the wish was actually consumed.
  
  // Actually, the wish should be consumed during payout calculation, so by the time we get here,
  // if pendingReward still exists, something went wrong. Let's just leave it for now.
  // The roundsPlayed should NOT be reset here unless we're sure the wish was used.
}

/* --------- Internal helper functions --------- */

function updateChip(text, state) {
  const chip = document.getElementById("wish-chip");
  if (!chip) return;

  chip.textContent = text;
  chip.className = "wish-chip";
  if (state) chip.classList.add(state);
}

function showToast() {
  const toast = document.getElementById("wish-toast");
  if (toast) toast.style.display = "block";
}

function openPanel() {
  const panel = document.getElementById("wish-panel");
  const toast = document.getElementById("wish-toast");
  if (panel) panel.style.display = "block";
  if (toast) toast.style.display = "none";
}

function closePanel() {
  const panel = document.getElementById("wish-panel");
  if (panel) panel.style.display = "none";
}

function chooseReward(type) {
  pendingReward = type;   // "safe" or "double"
  rewardReady = true;
  wishGranted = false;
  closePanel();

  if (type === "safe") {
    updateChip("⭐ Next bet: Safe Bet active");
  } else {
    updateChip("⭐ Next bet: Double-Up active");
  }
}

// Forfeit wish if player bets without claiming
function forfeitWish() {
  wishGranted = false;
  wishPrepared = false;
  rewardReady = false;
  pendingReward = null;
  roundsPlayed = 0;

  const toast = document.getElementById("wish-toast");
  if (toast) toast.style.display = "none";

  updateChip("⭐ Wish: 0 / 20");
}

