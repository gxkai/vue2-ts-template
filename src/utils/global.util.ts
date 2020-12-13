/**
 * @description 延迟函数
 * @param arg
 */
export function delay(arg: number) {
  return new Promise(resolve => {
    const s = setTimeout(() => {
      clearTimeout(s);
      resolve();
    }, arg);
  });
}

/**
 *  @description 随机数
 */
export function generateRandomId() {
  const a: Function = Math.random;
  const b: Function = parseInt;
  return Number(
    Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a())
  );
}

/**
 * @description 超出省略
 * @param args 目标字符
 * @param len 目标长度
 */
export function truncate(args: string, len: number) {
  let str = "";
  let a = 0;
  for (let i = 0; i < args.length; i++) {
    if (args.charCodeAt(i) > 128) {
      a += 2;
    } else {
      a += 1;
    }
    if (a === len - 1 && args.charCodeAt(i + 1) > 128) {
      str = str + args[i];
      str = str + "...";
      break;
    } else if (a === len && args[i + 1] !== undefined) {
      str = str + "...";
      break;
    } else {
      str = str + args[i];
    }
  }
  return str;
}
