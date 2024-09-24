import { ApiUrls } from "@/config/url";
import api from "@/lib/https/axios";
import { GetMeProfileResponse, MenuResponse } from "../schemas/app.schema";
import {
  ProductDetailResponse,
  ProductListFromCartResponse,
  ProductListResponse,
  SavedProductsResponse,
  searchProductNameResponse,
} from "../schemas/product.schema";

export const LogoutApi = async (access_token: string | null) => {
  const data: any = await api.get(ApiUrls.logout, {
    params: { access_token: access_token },
  });
  return data?.data;
};

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
  const result = await api.get<ProductListFromCartResponse>(
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

export const apiGetMenu = async () => {
  const result = await api.get<MenuResponse>(
    ApiUrls.getMenu,
    {},
    {
      baseUrl: "",
    }
  );
  return result.data;
};

export const apiSeachProductName = async (query: string) => {
  const result = await api.get<searchProductNameResponse>(
    ApiUrls.searchProductName,
    {
      params: { q: encodeURIComponent(query) },
    },
    { baseUrl: "" }
  );
  return result.data;
};

export const apiSeachProductDetails = async (query: string) => {
  const result = await api.get<ProductListResponse>(
    ApiUrls.searchProductDetails,
    {
      params: { q: encodeURIComponent(query) },
    },
    { baseUrl: "" }
  );
  return result.data;
};

export const apiUpdateCartItemQuantity = async (
  productId: string,
  quantity: string
) => {
  const result = await api.patch<any>(
    ApiUrls.updateProductFromCart.concat(`/${productId}`),
    {
      quantity,
    },
    {},
    { baseUrl: "" }
  );
  return result.data;
};

export const apiGetSavedProducts = async () => {
  const result = await api.get<SavedProductsResponse>(
    ApiUrls.apiGetSavedProducts,
    {},
    { baseUrl: "" }
  );
  return result.data;
};

export const apiGetMe = async () => {
  const data = await api.get<GetMeProfileResponse>(
    ApiUrls.getMe,
    {},
    { baseUrl: "" }
  );
  return data?.data;
};
