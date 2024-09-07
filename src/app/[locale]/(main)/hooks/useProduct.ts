import { useMutation, useQuery } from "@tanstack/react-query";
import {
  apiAddProductToCart,
  apiGetProductByGategories,
  apiGetProductDetail,
  apiGetProductsFromCart,
} from "../services/api";

export const useProductByGategoriesQuery = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: apiGetProductByGategories,
  });
  return { data, isError, isPending, error };
};

export const useSuggestedProduct = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["suggestedProducts"],
    queryFn: apiGetProductByGategories,
  });
  return { data, isError, isPending, error };
};

export const useGetProductDetail = (id: string) => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => apiGetProductDetail(id),
  });
  return { data, isError, isPending, error };
};

export const useAddProductToCart = () => {
  const {
    mutate: addProductToCart,
    data,
    isError,
    isPending,
    error,
  } = useMutation({
    mutationFn: apiAddProductToCart,
  });
  return { addProductToCart, data, isError, isPending, error };
};

// export const useGetProductsFromCart = () => {
//   const { data, isError, isPending, error } = useQuery({
//     queryKey: ["cart"],
//     queryFn: apiGetProductsFromCart,
//   });
//   return { data, isError, isPending, error };
// };

export const useGetProductsFromCart = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["cart"],
    queryFn: apiGetProductsFromCart,
  });
  return { data, isError, isPending, error };
};
