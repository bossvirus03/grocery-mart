"use client";
import LockIcon from "@/assets/images/icon/Lock.svg";
import MessageIcon from "@/assets/images/icon/Message.svg";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import CheckBox from "@/components/Input/CheckBox";
import Input from "@/components/Input/Input";
import { Link } from "@/i18n/routing";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import useLogin, { LoginCredentials } from "../hooks/useLogin";

function LoginForm() {
  const { loginUser, isPending, data, error } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [credential, setCredential] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const useInputCredentialChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCredential((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await loginUser({ ...credential });
    },
    [credential, loginUser]
  );

  useEffect(() => {
    if (error) {
      if (error.message === "PASSWORD_MISMATCH") {
        setErrorMessage("Mật khẩu không hợp lệ vui lòng thử lại!");
      } else if (error.message === "EMAIL_NOT_EXIST") {
        setErrorMessage("Email không tồn tại!");
      }
    }
  }, [error]);
  return (
    <form action="" className="mt-[30px] w-full">
      <Input
        onChange={useInputCredentialChange}
        value={credential.email}
        className="mt-[30px]"
        name="email"
        placeholder="Email"
        type="text"
        icon={<Icon svg={MessageIcon} />}
      />
      <Input
        onChange={useInputCredentialChange}
        value={credential.password}
        className="mt-[30px]"
        name="password"
        placeholder="Password"
        type="password"
        icon={<Icon svg={LockIcon} />}
      />
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2">
          <CheckBox />
          <p className="text-[15px] font-[500] text-gray-light dark:text-gray-dark">
            Set as default card
          </p>
        </div>
        <div>
          <Link className="text-[#0071DC] text-[15px] font-[500]" href={"#"}>
            Recovery Password
          </Link>
        </div>
      </div>
      <Button
        disable={!credential.email || !credential.email || isPending}
        onClick={handleSubmit}
        className="w-full mt-[50px]"
      >
        {isPending ? "Loading.." : "Login"}
      </Button>
      <p className="text-red-500">{errorMessage}</p>
    </form>
  );
}

export default LoginForm;
