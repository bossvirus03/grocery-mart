import { useQuery } from "@tanstack/react-query";
import { apiGetMenu } from "../services/api";

export const useMenuQuery = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["menus"],
    queryFn: apiGetMenu,
  });
  return { data, isError, isPending, error };
};
