/**
 * @description 分页
 */
export interface PageModel<T> {
  total: number;
  rows: T[];
  pages: number;
}
