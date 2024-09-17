import SearchProduct from "../components/SearchProduct/SearchProduct";

function page() {
  return (
    <div className="flex gap-8 min-h-[100vh] ">
      <div className=" w-full max-w-[340px] rounded-[20px] p-5 dark:bg-dark-primary bg-light-primary ">
        <p>filter</p>
        <div>
          <h3>Nơi bán</h3>
          <ul>
            <li>Hà Nội</li>
            <li>Hà Nội</li>
            <li>Hà Nội</li>
            <li>Hà Nội</li>
          </ul>
        </div>
      </div>
      <div className="w-full rounded-[20px] p-5 dark:bg-dark-primary bg-light-primary ">
        <SearchProduct />
      </div>
    </div>
  );
}

export default page;
