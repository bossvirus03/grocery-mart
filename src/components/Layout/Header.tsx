import LocalSwitcher from "../Button/LocalSwitcher";

function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Grocery Mart</h1>
      <nav className="flex ">
        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-sm font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          Sign In
        </button>
        <button className="px-4 py-2 text-sm font-medium bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md">
          Sign Up
        </button>
        <LocalSwitcher />
      </div>
    </div>
  );
}

export default Header;
