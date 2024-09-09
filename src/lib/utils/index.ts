/**
 * Xóa đi ký tự `/` đầu tiên của path
 */
export const normalizePath = (path: string) => {
  return path.startsWith("/") ? path.slice(1) : path;
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 *
 */
export const currencyConversion = (amount: number, locale: "vi" | "en") => {
  const exchangeRate: number = 23000; // Tỉ giá mặc định từ VND sang USD
  // Quy đổi tiền Việt sang tiền Đô nếu là locale "en"
  const convertedAmount = locale === "en" ? amount / exchangeRate : amount;
  const currency = locale === "vi" ? "VND" : "USD";

  return new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US", {
    style: "currency",
    currency: currency,
  }).format(convertedAmount);
};
