"use client";
import Input from "@/components/Input/Input";
import { Link } from "@/i18n/routing";
import { FaArrowLeftLong } from "react-icons/fa6";

function AddCredit({
  setPage,
}: {
  setPage: (value: "main" | "credit" | "info") => void;
}) {
  return (
    <div className="dark:bg-dark-primary bg-light-primary w-full rounded-[20px] p-[30px] flex flex-col gap-[30px]">
      <h1 className="text-[24px] font-bold">
        <Link href={""}>
          <FaArrowLeftLong /> Add credit or debit card
        </Link>
        <div>
          <form action="">
            <Input placeholder="Imran" />
          </form>
        </div>
      </h1>
    </div>
  );
}

export default AddCredit;
