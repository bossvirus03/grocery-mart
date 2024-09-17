"use client";
import useDebounce from "@/lib/utils/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import Select from "../Input/Select";
import SearchInput from "./SearchInput";

function DeboundSelect({
  locale,
  fetchOptions,
}: {
  locale: "vi" | "en";
  fetchOptions: (value: string) => Promise<string[]>;
}) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [isFocused, setIsFocused] = useState(false);
  const fetchRef = useRef(0);

  useEffect(() => {
    if (debouncedSearchValue) {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setFetching(true);

      fetchOptions(debouncedSearchValue)
        .then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            return;
          }
          setOptions(newOptions);
          setFetching(false);
        })
        .catch(() => {
          setFetching(false);
        });
    } else {
      setOptions([]);
    }
  }, [debouncedSearchValue, fetchOptions]);

  return (
    <div className="relative">
      <SearchInput
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        locale={locale}
        value={searchValue}
        onChange={(e) => {
          setIsFocused(true);
          setSearchValue(e.target.value);
        }}
      />
      {searchValue && isFocused && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[4px] w-[95%] z-[99999]">
          <Select
            className="dark:bg-dark bg-light rounded-2xl p-5"
            options={options}
            isLoading={fetching}
            lableValue={searchValue}
          />
        </div>
      )}
    </div>
  );
}

export default DeboundSelect;
