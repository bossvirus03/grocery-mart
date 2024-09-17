"use client";
function Breadcrumb({ path }: { path: string[] }) {
  return (
    <div className="md:h-[64px] flex justify-start items-center gap-[20px] text-gray-dark dark:text-gray-light rounded-[10px] dark:bg-dark-primary bg-light-primary px-5 my-[30px] font-[500]">
      {path.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="mr-6"> &gt; </span>}
          {item}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
