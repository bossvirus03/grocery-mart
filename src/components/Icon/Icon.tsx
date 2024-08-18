import Image from "next/image";

function Icon({
  svg,
  className,
  size = 24,
}: {
  svg: any;
  className?: string;
  size?: number;
}) {
  return (
    <Image
      className={className}
      width={size}
      height={size}
      src={svg}
      alt="icon"
    />
  );
}

export default Icon;
