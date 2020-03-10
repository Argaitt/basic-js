function carbonDatin(sampleActivity) {
    if (typeof(sampleActivity) != "string" ) {
        return false;
      } else {
        sampleActivity = parseFloat(sampleActivity);
        let k = 0.693/HALF_LIFE_PERIOD;
        return Math.round(Math.log(MODERN_ACTIVITY/sampleActivity)/k)
      }
};

countCats([
    ['##', 'dd', '00'],
    ['^^', '..', 'ss'],
    ['AA', 'dd', 'Oo'],
  ]);