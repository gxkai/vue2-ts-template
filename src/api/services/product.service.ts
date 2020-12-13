import { PageModel } from "@/api/models/page.model";
import { ProductModel } from "@/api/models/product.model";
import { generateRandomId } from "@/utils/global.util";
import {
  FindProductListByPaParams,
  ProductRepository
} from "@/api/repositories/product.repository";

export class ProductService {
  static async findProductListByPa(
    params: FindProductListByPaParams
  ): Promise<PageModel<ProductModel>> {
    const returnData = await ProductRepository.findProductListByPa(params);
    return {
      ...returnData,
      rows: returnData.rows.map(p => {
        return {
          ...p,
          randomId: generateRandomId()
        };
      })
    };
  }
}
