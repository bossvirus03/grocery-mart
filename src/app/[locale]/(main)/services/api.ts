import { ApiUrls } from "@/config/url";
import api from "@/lib/https/axios";
import {
  ProductDetailResponse,
  ProductListResponse,
} from "../schemas/product.schema";

export const apiGetProductByGategories = async () => {
  const result = await api.get<ProductListResponse>(
    ApiUrls.getSuggestedProducts,
    {},
    { baseUrl: "" }
  );
  return result.data;
};

export const apiGetSuggestedProducts = async () => {
  const result = await api.get<ProductListResponse>(
    ApiUrls.getBrowserGategories,
    {},
    { baseUrl: "" }
  );
  return result.data;
};

export const apiGetProductsFromCart = async () => {
  const result = await api.get<ProductListResponse>(
    ApiUrls.getProductsFromCart,
    {},
    { baseUrl: "" }
  );
  return result.data;
};

export const apiGetProductDetail = async (id: string) => {
  const result = await api.get<ProductDetailResponse>(
    `${ApiUrls.getProductDetail.replace(":id", id)}`,
    {},
    { baseUrl: "" }
  );
  return result.data;
};

export const apiAddProductToCart = async (id: string) => {
  const result = await api.post(
    `${ApiUrls.addProductToCart}`,
    { productId: id },
    {},
    { baseUrl: "" }
  );
  return result.data;
};
