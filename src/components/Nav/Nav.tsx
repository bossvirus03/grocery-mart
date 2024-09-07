import { Link } from "@/i18n/routing";

function Nav({
  items,
}: {
  items: {
    icon?: any;
    label: string;
  }[];
}) {
  return (
    <nav className="flex ">
      <ul className="flex gap-5">
        {items.map(({ icon, label }, index) => (
          <li key={index}>
            {icon}
            {label}
          </li>
        ))}
        <li>
          <Link
            href="#"
            className="text-sm font-medium flex justify-center items-center gap-1"
          >
            Description
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-sm font-medium flex justify-center items-center gap-1"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-sm font-medium flex justify-center items-center gap-1"
          >
            Review (1100)
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-sm font-medium flex justify-center items-center gap-1"
          >
            Similar
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
