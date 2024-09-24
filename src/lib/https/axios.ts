import envConfiguration from "@/config/envConfiguration";
import { ApiUrls } from "@/config/url";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { LoginResType } from "../schemas/schema-validation";
import { normalizePath } from "../utils";
type CustomOptions = Omit<RequestInit, "method"> & {
  baseUrl?: string | undefined;
};

const baseURL = envConfiguration.NEXT_PUBLIC_API_BACKEND_URL;

const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});

const isServer = typeof window === "undefined";

axiosInstance.interceptors.request.use(
  (config) => {
    if (!isServer) {
      const token = localStorage.getItem(
        envConfiguration.NEXT_PUBLIC_TOKEN_KEY
      );
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      originalRequest.url != ApiUrls.login &&
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const res = await api.post<LoginResType>(
          ApiUrls.refreshToken,
          {},
          { withCredentials: true }
        );
        const { access_token } = res.data.data;
        if (!isServer) {
          localStorage.setItem(
            envConfiguration.NEXT_PUBLIC_TOKEN_KEY,
            access_token
          );
        }

        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        if (!isServer) {
          localStorage.removeItem(envConfiguration.NEXT_PUBLIC_TOKEN_KEY);
          window.location.href = "/en/signin";
        }
        console.error("Token refresh failed:", err);
      }
    }
    return Promise.reject(error.response?.data);
  }
);

const getFullUrl = (url: string, options?: CustomOptions): string => {
  // Nếu không truyền baseUrl (hoặc baseUrl = undefined) thì lấy từ envConfiguration.NEXT_PUBLIC_URL
  // Nếu truyền baseUrl thì lấy giá trị truyền vào, truyền vào '' thì đồng nghĩa với việc chúng ta gọi API đến Next.js Server
  const baseUrl =
    options?.baseUrl === undefined
      ? `${envConfiguration.NEXT_PUBLIC_URL}/api`
      : baseURL;
  const fullUrl = `${baseUrl}/${normalizePath(url)}`;
  return fullUrl;
};

const AxiosGet = <T>(
  url: string,
  config?: AxiosRequestConfig,
  options?: CustomOptions
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get(getFullUrl(url, options), config);
};

const AxiosPost = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  options?: CustomOptions
): Promise<AxiosResponse<T>> => {
  return axiosInstance.post(getFullUrl(url, options), data, config);
};

const AxiosPut = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  options?: CustomOptions
): Promise<AxiosResponse<T>> => {
  return axiosInstance.put(getFullUrl(url, options), data, config);
};

const AxiosPatch = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  options?: CustomOptions
): Promise<AxiosResponse<T>> => {
  return axiosInstance.patch(getFullUrl(url, options), data, config);
};

const AxiosDelete = <T>(
  url: string,
  config?: AxiosRequestConfig,
  options?: CustomOptions
): Promise<AxiosResponse<T>> => {
  return axiosInstance.delete(getFullUrl(url, options), config);
};

const api = {
  get: AxiosGet,
  post: AxiosPost,
  put: AxiosPut,
  patch: AxiosPatch,
  delete: AxiosDelete,
};

export default api;
