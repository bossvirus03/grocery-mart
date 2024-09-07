import { ReactNode } from "react";

export interface MenuItems {
  icon?: ReactNode;
  key: string;
  label: ReactNode;
  children?: MenuItems[];
}

function Menu({ items }: { items: MenuItems[] }) {
  return (
    <div className="flex ">
      <ul className="flex gap-5">
        {items.map(({ icon, label }, index) => (
          <li key={index}>
            {icon}
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
