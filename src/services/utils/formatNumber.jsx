export function removeDecimals(value) {
  if(isNaN(value)) {
    return;
  }

  return +value.toFixed(2)
}
