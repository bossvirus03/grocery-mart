"use client";
import LogoDark from "@/assets/images/Logo.png";
import LogoLight from "@/assets/images/LogoWhiteText.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (resolvedTheme === "dark") {
    return <Image src={LogoLight} alt="Logo" width={190} height={32} />;
  }
  if (resolvedTheme === "light") {
    return <Image src={LogoDark} alt="Logo" width={190} height={32} />;
  }
}

export default Logo;
