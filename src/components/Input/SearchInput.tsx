import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative flex items-center bg-white dark:bg-dark rounded-[8px] p-2">
      <input
        ref={inputRef}
        type="text"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search..."
        className={`outline-none border-none transition-all duration-300 ease-in-out ${
          isFocused ? " w-[420px] p-2" : "w-0 p-0"
        } h-8 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden `}
        style={{
          transitionProperty: "width, padding",
          backgroundColor: "transparent",
        }}
        autoFocus={isFocused} // Ensure input is focused when visible
      />
      {isFocused && (
        <button>
          <CiSearch
            size={26}
            className="text-lg cursor-pointer"
            onClick={() => {
              // submit search
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
  );
}

export default SearchInput;
