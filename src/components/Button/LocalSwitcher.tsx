"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

function LocalSwitcher() {
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="w-[50px] h-[50px] bg-white dark:bg-dark rounded-[8px] overflow-hidden flex justify-center items-center">
      <p className="sr-only">change language</p>
      <select
        className="outline-none ring-0"
        disabled={isPending}
        defaultValue={localActive}
        onChange={onSelectChange}
        style={{ background: "inherit" }}
      >
        <option className="px-3" value="en">
          EN
        </option>
        <option className="px-3" value="vi">
          VI
        </option>
      </select>
    </label>
  );
}

export default LocalSwitcher;
