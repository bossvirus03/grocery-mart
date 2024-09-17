import { useRouter } from "next/navigation";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
function SearchInput({
  value,
  locale,
  onChange,
  isFocused,
  setIsFocused,
}: {
  value?: string;
  locale: string;
  onChange?: (e: any) => void;
  isFocused: boolean;
  setIsFocused: any;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className="relative">
      <div className="relative flex items-center bg-white dark:bg-dark rounded-[8px] p-2">
        <input
          ref={inputRef}
          type="text"
          value={value || ""}
          onChange={onChange}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder="Search..."
          className={`outline-none border-none transition-all duration-300 ease-in-out ${
            !value == null || value || isFocused ? " w-[400px] p-2" : "w-0 p-0"
          } h-8 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden `}
          style={{
            transitionProperty: "width, padding",
            backgroundColor: "transparent",
          }}
          autoFocus={isFocused}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              router.push(`/${locale}/search?keyword=${value}`);
            }
          }}
        />
        {isFocused && (
          <button>
            <CiSearch
              size={26}
              className="text-lg cursor-pointer"
              onClick={() => {
                setIsFocused(false);
                router.push(`/${locale}/search?keyword=${value}`);
              }}
            />
          </button>
        )}
        {/* Search icon */}
        {!isFocused && (
          <button className="px-1">
            <CiSearch
              size={26}
              className="text-lg cursor-pointer"
              onClick={() => {
                setIsFocused(true);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
