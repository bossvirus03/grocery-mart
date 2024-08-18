"use client";
import React, { useRef, useState } from "react";

interface InputTypeProp {
  className?: string;
  type?: "text" | "password";
  value?: string | number;
  placeholder?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: any;
}
const isReactComponent = (comp: any): boolean => {
  return typeof comp === "function" && comp.prototype.isReactComponent;
};

const Input = ({
  className = "",
  type = "text",
  value,
  placeholder = "",
  name = "",
  onChange,
  icon,
}: InputTypeProp) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div
      className={`bg-transparent flex justify-between items-center w-full h-[50px] border border-solid rounded-[10px] px-[16px] overflow-hidden border-[#D2D1D6] text-[18px] ${className}`}
    >
      <input
        className="outline-none border-none w-[calc(100%-32px)] h-full placeholder:text-[#D2D1D6] placeholder:text-[16px] font-[400] dark:text-[#fff]"
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        style={{ background: "transparent" }}
      />
      {type === "password" &&
        (!isFocused ? (
          icon
        ) : (
          <>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="flex items-center justify-center w-[24px] h-[24px] ml-[8px] outline-none border-none bg-transparent"
            >
              {icon}
            </button>
          </>
        ))}
      {type !== "password" && icon}
    </div>
  );
};

export default Input;
