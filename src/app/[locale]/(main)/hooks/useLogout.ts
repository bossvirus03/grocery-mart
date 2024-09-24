import { removeToken } from "@/lib/token";
import { useMutation } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { LogoutApi } from "../services/api";

const useLogout = (access_token: string | null) => {
  const router = useRouter();
  const locale = useLocale();

  const {
    isPending,
    mutate: logoutUser,
    data,
    error,
  } = useMutation({
    mutationFn: async () => {
      return await LogoutApi(access_token);
    },
    onSuccess: () => {
      removeToken();
      router.push(`/${locale}/signin`);
    },
  });
  return {
    data,
    isPending,
    logoutUser,
    error,
  };
};

export default useLogout;
