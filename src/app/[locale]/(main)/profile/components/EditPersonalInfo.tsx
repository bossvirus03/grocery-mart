import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { FaArrowLeftLong } from "react-icons/fa6";

function EditPersonalInfo({
  setPage,
}: {
  setPage: (value: "main" | "credit" | "info") => void;
}) {
  return (
    <div className="bg-light-primary dark:bg-dark-primary w-full p-[30px] rounded-[20px]">
      <h1
        className="flex text-[22px] gap-[10px]"
        onClick={() => {
          setPage("main");
        }}
      >
        <FaArrowLeftLong />
        Personal info
      </h1>
      <form
        action=""
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[30px]"
      >
        <div>
          <label htmlFor="fullname">Full name</label>
          <Input
            name="fullname"
            className="mt-[20px]"
            placeholder="Imran Khan"
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <Input
            name="email"
            className="mt-[20px]"
            placeholder="admin@uihut.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <Input
            name="phone"
            className="mt-[20px]"
            placeholder="+84 01234 56789"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            className="mt-[20px]"
            placeholder="●●●●●●●●●●●"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end gap-[15px] mt-[30px]">
          <Button
            dashed
            className="border-none"
            onClick={() => {
              setPage("main");
            }}
          >
            Cancel
          </Button>
          <Button className="rounded-full w-[116px]">Save Edit</Button>
        </div>
      </form>
    </div>
  );
}

export default EditPersonalInfo;
