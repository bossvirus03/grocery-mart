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
    <label className="border-2 rounded-sm">
      <p className="sr-only">change language</p>
      <select
        disabled={isPending}
        defaultValue={localActive}
        onChange={onSelectChange}
      >
        <option value="en">EN</option>
        <option value="vi">VI</option>
      </select>
    </label>
  );
}

export default LocalSwitcher;
