export interface ProductListResponse {
  code: number;
  data: ProductList;
}

export interface SavedProductsResponse {
  code: number;
  data: ProductList;
}

export interface ProductListFromCartResponse {
  code: number;
  data: ProductListFromCart;
}

export interface ProductDetailResponse {
  code: number;
  data: productDetail;
}

export interface ProductList {
  data: Product[];
  total: number;
}
export interface ProductListFromCart {
  data: ProductFromCart[];
  total: number;
}

export interface ProductFromCart {
  images: string[];
  name: string;
  description: string;
  price: number;
  id: string;
  star: number;
  agent: Agent;
  quantity: number;
}

export interface Product {
  images: string[];
  name: string;
  description: string;
  price: number;
  id: string;
  star: number;
  agent: Agent;
}

export interface Agent {
  id: string;
  name: string;
  image: string;
}

export interface productDetail {
  images: string[];
  name: string;
  description: string;
  price: number;
  id: string;
  star: number;
  agent: Agent;
  remainingQuantity: number;
}

export interface searchProductNameResponse {
  code: number;
  data: searchProductName;
}

export interface searchProductName {
  data: string[];
  total: number;
}
