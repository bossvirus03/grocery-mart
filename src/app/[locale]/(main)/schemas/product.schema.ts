export interface ProductListResponse {
  code: number;
  data: Data;
}

export interface ProductDetailResponse {
  code: number;
  data: productDetail;
}

export interface Data {
  data: Product[];
  total: number;
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
