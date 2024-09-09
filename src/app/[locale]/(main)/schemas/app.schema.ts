export interface MenuResponse {
  code: number;
  data: MenuResponseData;
}

export interface MenuResponseData {
  data: TypeMenu[];
}
export interface TypeMenu {
  name: string;
  id: string;
  category: TypeCategory[];
}

export interface TypeCategory {
  id: string;
  name: string;
  icon: string;
  items: TypeCategoryItem[];
}

export interface TypeCategoryItem {
  id: string;
  name: string;
}
