import { BaseModel } from "@/api/models/base.model";

export interface Color {
  currencyCode?: string;
  imgUrlS2?: string;
  imgUrlS4?: string;
  itemNoGlobal?: string;
  itemNoLocal?: string;
  itemType?: string;
  name?: string;
  paCode?: string;
  priceInclTax?: number;
  size?: string;
  validDesignText?: string;
}

// 搜索产品类型
export enum SearchType {
  SEARCH = 1,
  PACODE = 2,
  FILTER = 3
}
export interface ProductModel extends BaseModel {
  // 主键ID
  id?: number;
  // 主图片
  imgUrl?: string;
  // 缩略图
  thumbnail?: string;
  // 其他图片
  imgUrlList?: string[];
  // 产品名称
  name?: string;
  typeName?: string;
  dsType?: "sync" | "selfUpload";
  showItemNo?: string;
  randomId?: number;
  // 产品编号
  code?: string;
  itemNo?: string;
  itemGlobalNo?: string;
  genericCode?: string;
  // 产品类型
  type?: string;
  // 产品描述
  description?: string;
  // 产品颜色
  color?: string;
  // 产品规格信息
  specifications?: string;
  // 产品价格
  price?: number;
  // 价格单位
  unit?: string;
  // 产品数量
  count?: number;
  // 一级目录ID
  hfbCode?: string;
  // 二级目录ID
  paCode?: string;
  // 推荐描述
  recommend?: string[];
  choosed?: boolean;
  waitPick?: boolean;
  mirror?: boolean;
  flipHorizontal?: boolean;
  hasSel?: boolean;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  topViewWidth?: string | number;
  topViewLength?: string | number;
  topViewUrl?: string;
  topViewRotate?: number;
  topViewStartX?: number;
  topViewStartY?: number;
  zIndex?: number;
  // 购物车Id
  cartId?: number;
  // 方案ID
  planId?: number;
  //
  hasSelTopView?: boolean;
  active?: boolean;
  oldLeft?: number;
  oldTop?: number;
  // 去白图片
  removeWhiteImage?: string;
  removeWhiteImageHeight?: number;
  removeWhiteImageWidth?: number;
  // 家具id
  Identifier?: string;
  // 产品颜色数组
  productColourList?: Color[];
  // 已被分组
  grouped?: boolean;
  pid?: number;
  // 元素类型
  elementType?: "group" | undefined;
  deg?: number | undefined;
  isAutoPlacement?: boolean;
  originId?: string | undefined;
  // 页数
  page?: number | undefined;
  // 是否当前页
  isCurrentPage?: boolean | undefined;
  // 分页占位
  isPagePlaceholder?: boolean | undefined;
}
