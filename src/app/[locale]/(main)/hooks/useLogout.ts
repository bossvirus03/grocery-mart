import { removeToken } from "@/lib/token";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { LogoutApi } from "../services/api";

const useLogout = () => {
  const router = useRouter();
  const {
    isPending,
    mutate: logoutUser,
    data,
    error,
  } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      removeToken();
      router.push("/");
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
