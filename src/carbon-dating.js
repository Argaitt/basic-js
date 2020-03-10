const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if (typeof(sampleActivity) != "string" ) {
   return false;
 } else {
   Number(sampleActivity);
   if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
     return false;
   }
   sampleActivity = parseFloat(sampleActivity);
   let k = 0.693/HALF_LIFE_PERIOD;
   let result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k)
   if (isNaN(result)) {
     return false;
   } else {
     return result
   }
 }
};
