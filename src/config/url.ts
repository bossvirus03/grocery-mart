export const ApiUrls = {
  apiBaseUrl: "http://localhost:4324",
  login: "/auth/login",
  logout: "/auth/logout",
  register: "/auth/register",
  getMe: "/user/me",

  refreshToken: "/auth/refresh",
  getBrowserGategories: "/product",
  getSuggestedProducts: "/product",
  getProductDetail: "/product/:id",
  addProductToCart: "/cart",
  getProductsFromCart: "/cart",
  updateProductFromCart: "/cart",
  getMenu: "/config/menu",
  searchProductName: "/product/search-product-name",
  searchProductDetails: "/product/search-product-details",
  apiGetSavedProducts: "/user/saved-products",
};
