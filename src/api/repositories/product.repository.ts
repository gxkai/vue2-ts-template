import { PageModel } from "@/api/models/page.model";
import { ProductModel } from "@/api/models/product.model";
import { HttpService } from "@/api/axios";

export interface FindProductListByPaParams {
  paCode?: number | string;
  keyWord?: string;
  pageNum?: number;
  pageSize?: number;
  itemNo?: string;
  extItemNos?: string;
  familyName?: string;
}
export class ProductRepository {
  static async findProductListByPa(
    params: FindProductListByPaParams
  ): Promise<PageModel<ProductModel>> {
    return await HttpService.get(
      `/fullhouse/{{languageU}}/{{languageL}}/product/findProductListByPa/${params.paCode}`,
      {
        params
      }
    );
  }
}
