"use client";
import { ReactNode, useState } from "react";

export interface TabItems {
  icon?: ReactNode;
  key: string;
  label: ReactNode;
  children?: ReactNode;
}

function Tabs({ items }: { items: TabItems[] }) {
  const [selectedTab, setSelectedTab] = useState(items[0].key);
  return (
    <div className="dark:text-gray-dark text-gray-light text-[20px]">
      <ul className="flex gap-5">
        {items.map(({ icon, label, key }, index) => (
          <li
            className={[
              "cursor-pointer",
              selectedTab == key && "dark:text-white text-black-primary",
            ].join(" ")}
            key={index}
            onClick={() => {
              setSelectedTab(key);
            }}
          >
            {icon}
            {label}
          </li>
        ))}
      </ul>
      {items.map(
        ({ key, children }, index) =>
          key === selectedTab && (
            <div
              key={index}
              className="mt-[30px] text-[16px] rounded-[16px] "
            >
              {children}
            </div>
          )
      )}
    </div>
  );
}

export default Tabs;
