/**
 * Multiplier Timing Module
 * 
 * Implements the exact TIME ↔ MULTIPLIER curve for crash game animations.
 * 
 * Rules:
 * - 1.00x -> 2.00x: exactly 3.0 seconds (linear) - SLOWER for better player reaction time
 * - 2.00x -> 3.00x: exactly 1.0 second (linear)
 * - After 3.00x: exponential growth
 * - Total time to 1750x: exactly 12 seconds
 * - Maximum visual multiplier: 10,000x
 */

// Timing constants
const T1 = 3.0;       // Duration for 1.00x -> 2.00x (seconds) - SLOWER for better player reaction time
const T2 = 1.0;       // Duration for 2.00x -> 3.00x (seconds)
const T12 = T1 + T2;  // 4.0s, time at which we hit 3.00x

const M1 = 1.0;
const M2 = 2.0;
const M3 = 3.0;

// Target: m(12s) = 1750x when starting at 3x at t=4.0s
const TARGET_MULT = 1750.0;
const TARGET_TIME = 12.0;

// Exponential growth rate K
const K = Math.log(TARGET_MULT / M3) / (TARGET_TIME - T12);

// Max visual multiplier
const MAX_MULT = 10000.0;

/**
 * Helper: core time-from-multiplier logic (without clamping caller's input)
 * @param {number} M - Multiplier value
 * @returns {number} Time in seconds
 */
function timeForMultiplierRaw(M) {
  if (M <= M1) return 0.0;

  if (M <= M2) {
    // Segment A: 1.0 -> 2.0 over T1
    return T1 * (M - M1) / (M2 - M1);
  }

  if (M <= M3) {
    // Segment B: 2.0 -> 3.0 over T2
    return T1 + T2 * (M - M2) / (M3 - M2);
  }

  // Segment C: exponential from 3.0 upwards
  return T12 + Math.log(M / M3) / K;
}

/**
 * Given a crash multiplier, calculate how long the flight duration should be.
 * @param {number} crashM - Crash multiplier from RNG/math engine
 * @returns {number} Flight duration in seconds until crash
 */
function timeFromMultiplier(crashM) {
  let M = crashM;

  // Clamp to max visual multiplier if math engine can exceed it
  if (M > MAX_MULT) M = MAX_MULT;

  return timeForMultiplierRaw(M);
}

/**
 * Given elapsed time since round start, calculate the current multiplier to display.
 * @param {number} tSeconds - Time in seconds since round start (float)
 * @returns {number} Current multiplier (float, clamped to MAX_MULT)
 */
function multiplierAtTime(tSeconds) {
  const t = Math.max(0, tSeconds); // avoid negatives

  // Segment A: 1.0x -> 2.0x
  if (t < T1) {
    return M1 + (M2 - M1) * (t / T1);
  }

  // Segment B: 2.0x -> 3.0x
  if (t < T12) {
    const dt = t - T1;
    return M2 + (M3 - M2) * (dt / T2);
  }

  // Segment C: exponential 3.0x upwards
  const dtExp = t - T12;
  let m = M3 * Math.exp(K * dtExp);

  // Visual clamp
  if (m > MAX_MULT) m = MAX_MULT;

  return m;
}

// Export for Node.js / CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    multiplierAtTime,
    timeFromMultiplier,
    MAX_MULT,
    T1,
    T2,
    T12,
    K
  };
}

// Also make available globally for browser use
if (typeof window !== 'undefined') {
  window.MultiplierTiming = {
    multiplierAtTime,
    timeFromMultiplier,
    MAX_MULT,
    T1,
    T2,
    T12,
    K
  };
}

