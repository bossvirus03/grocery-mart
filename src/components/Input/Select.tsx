import { Link } from "@/i18n/routing";
import { ReactNode } from "react";

function Select({
  options,
  className,
  isLoading,
  lableValue,
}: {
  isLoading: boolean;
  options: any[];
  className?: string;
  lableValue: string | ReactNode;
}) {
  return (
    <div className={[className, ""].join(" ")}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {options.length ? (
            options.map((option, index) => (
              <Link
                href={`/search?keyword=${option}`}
                key={index}
                className="min-h-9 dark:hover:bg-dark-secondary hover:bg-light-secondary rounded-lg mb-2 px-2 block"
              >
                {option}
              </Link>
            ))
          ) : (
            <>Tìm kiếm &quot;{lableValue}&quot;</>
          )}
        </>
      )}
    </div>
  );
}

export default Select;
