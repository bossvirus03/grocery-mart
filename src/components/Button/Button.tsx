import { ReactNode } from "react";

function Button({
  disable = false,
  primary = true,
  dashed = false,
  type = "button",
  className = "",
  children,
  width,
  height,
  onClick,
}: {
  disable?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  primary?: boolean;
  dashed?: boolean;
  className?: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClick?: (value?: any) => void;
}) {
  return (
    <button
      disabled={disable}
      type={type}
      className={[
        `h-[52px] text-black-primary rounded-[10px] px-3 text-[18px]`,
        `${primary && !dashed ? "bg-yellow-primary" : ""}`,
        `${dashed ? "border border-gray-dark dark:text-gray-dark" : ""}`,
        className,
        `${width ? `w-[${width}px]` : ""}`,
        `${height ? `h-[${height}px]` : ""}`,
        disable && "opacity-70 cursor-not-allowed",
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
