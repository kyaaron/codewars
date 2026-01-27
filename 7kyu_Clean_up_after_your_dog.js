function crap(garden, bags, cap){
  const flattenedGarden = garden.flat();
  const bagSpace = bags * cap;
  let crapNumber = 0;
  
  if (flattenedGarden.includes("D")) { return "Dog!!"; }
  
  flattenedGarden.forEach((spot) => {
    if (spot === "@") { crapNumber++; }
  })
  
  if (bagSpace >= crapNumber) { return "Clean"; }
  return "Cr@p";
}
