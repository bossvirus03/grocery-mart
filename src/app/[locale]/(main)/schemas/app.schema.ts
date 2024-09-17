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

export interface ProfileUser {
  data: {
    roles: string[];
    id: string;
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    avatarUrl: string;
    cart_items_count: number;
    saved_items_count: number;
  };
}

export interface GetMeProfileResponse {
  code: number;
  data: ProfileUser;
}
