export function delay(arg: number) {
  return new Promise(resolve => {
    const s = setTimeout(() => {
      clearTimeout(s);
      resolve();
    }, arg);
  });
}

/**
 *
 */
export function generateRandomId() {
  const a: any = Math.random;
  const b: any = parseInt;
  return Number(
    Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a())
  );
}
