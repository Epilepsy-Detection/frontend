export function intToByte(x) {
  if (x > 128) {
    return x - 256;
  }
  return x;
}
