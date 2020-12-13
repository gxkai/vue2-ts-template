/**
 * @description 图形操作基础数据项
 */
export interface BaseModel {
  width?: number;
  height?: number;
  // 当前距离顶部距离
  top?: number;
  // 当前距离左侧距离
  left?: number;
  // 上一次距离顶部距离
  oldTop?: number;
  // 上一次距离左侧距离
  oldLeft?: number;
  zIndex?: number;
  mirror?: boolean;
  active?: boolean;
  imgUrl?: string;
  randomId?: number;
  // 旋转角
  deg?: number;
  // x轴偏移量
  x?: number;
  // y轴偏移量
  y?: number;
  vector?: {
    x: number;
    y: number;
  };
  // 已被分组
  grouped?: boolean;
  id?: number;
  pid?: number;
  // 元素类型
  elementType?: "group" | undefined;
}
