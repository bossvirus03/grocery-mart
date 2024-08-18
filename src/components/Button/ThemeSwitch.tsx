"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (resolvedTheme === "dark") {
    return (
      <div
        onClick={() => setTheme("light")}
        className="size-[50px] flex justify-center items-center bg-[#fff] dark:bg-bg-dark rounded-full"
      >
        <FiSun size={24} />
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div
        onClick={() => setTheme("dark")}
        className="size-[50px] flex justify-center items-center bg-[#fff] dark:bg-bg-dark rounded-full"
      >
        <FaRegMoon size={24} />
      </div>
    );
  }
  return <div></div>;
}

export default ThemeSwitch;
