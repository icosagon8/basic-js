const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const NATURAL_LOGARITHM_APPROXIMATION = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) === 'string' && sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) * HALF_LIFE_PERIOD / NATURAL_LOGARITHM_APPROXIMATION);
  }

  return false;
};