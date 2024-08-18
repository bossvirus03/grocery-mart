import { ReactNode } from "react";

function Button({
  primary = true,
  dashed = false,
  type = "button",
  className = "",
  children,
  width,
  height,
  onClick,
}: {
  type?: "button" | "reset" | "submit" | undefined;
  primary?: boolean;
  dashed?: boolean;
  className?: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      className={[
        `h-[52px] text-black-primary rounded-[10px] px-3 text-[18px]`,
        `${primary && !dashed ? "bg-[#FFB700]" : ""}`,
        `${dashed ? "border border-[#B9BABE] dark:text-gray-dark" : ""}`,
        className,
        `${width ? `w-[${width}px]` : ""}`,
        `${height ? `h-[${height}px]` : ""}`,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
