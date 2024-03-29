export function generateUUIDWithMask(mask: string) {
  let time = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    time += performance.now();
  }
  return mask.replace(/[xy]/g, function (c) {
    let random = (time + Math.random() * 16) % 16 | 0;
    time = Math.floor(time / 16);
    return (c === 'x' ? random : (random & 0x3 | 0x8)).toString(16);
  });
}
