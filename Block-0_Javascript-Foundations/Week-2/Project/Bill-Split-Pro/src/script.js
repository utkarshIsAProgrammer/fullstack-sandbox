// Bill Split Pro

// Day 1 Write pure functions:
// addTax ,addTip, splitEvenly.Keep all money as integers (paise) to avoid float errors.

export function addTax(subTotalPaise, taxPercent) {
  return Math.round(subTotalPaise + subTotalPaise * (taxPercent / 100));
}

export function addTip(totalPaise, tipPercent) {
  return Math.round(totalPaise + (totalPaise * tipPercent) / 100);
}

export function splitEvenly(totalPaise, numDiners) {
  return numDiners <= 0 ? 'Invalid number of diners' : Math.floor(totalPaise / numDiners);
}
