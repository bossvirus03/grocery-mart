import { setAuthData } from "@/lib/token";
import { useAppStore } from "@/store/app.store";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { LoginApi } from "../services/api";

export type LoginCredentials = {
  email: string;
  password: string;
};

const useLogin = () => {
  const router = useRouter();
  const appState = useAppStore();
  const {
    isPending,
    mutate: loginUser,
    data,
    error,
  } = useMutation({
    mutationFn: LoginApi,
    onSuccess: (data: any) => {
      setAuthData(data.data.access_token);
      router.push("/");
      const userData = jwtDecode(data.data);
      appState.setUserData(userData);
    },
  });
  return {
    data,
    isPending,
    loginUser,
    error,
  };
};

export default useLogin;
