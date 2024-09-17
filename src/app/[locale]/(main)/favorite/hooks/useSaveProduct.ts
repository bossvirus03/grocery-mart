import { useQuery } from "@tanstack/react-query";
import { apiGetSavedProducts } from "../../services/api";

export const useGetSavedProducts = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["save-product"],
    queryFn: apiGetSavedProducts,
  });
  return { data, isError, isPending, error };
};
