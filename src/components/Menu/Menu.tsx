import { ReactNode, useEffect, useRef } from "react";

export interface MenuItems {
  icon?: ReactNode;
  key: string;
  label: ReactNode;
  children?: MenuItems[];
}

function Menu({
  useGrid = false,
  items,
  className,
}: {
  className?: string;
  useGrid?: boolean;
  items: MenuItems[];
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        const menuWidth = menuRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        if (menuWidth > windowWidth) {
          menuRef.current.style.width = `${(window.innerWidth * 90) / 100}px`;
          menuRef.current.style.left = `40px`;
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderMenuItems = (menuItems: MenuItems[], level: number = 0) => {
    if (menuItems.length === 0) return null;
    return (
      <div
        ref={menuRef}
        className={[
          " bg-light-secondary dark:bg-dark-secondary p-5",
          useGrid
            ? level == 0
              ? `grid grid-cols-1 md:grid-cols-4 gap-4 pl-${
                  level * 4
                } w-[1420px]` + " rounded-[20px] gap-[77px]"
              : "rounded-md mt-5"
            : "min-w-[270px] rounded-[20px]",
          className,
        ].join(" ")}
      >
        {menuItems.map(({ icon, label, children, key }) => (
          <div key={key}>
            <div
              className={[
                "px-3 py-2 rounded-md items-center gap-2 cursor-pointer ",
                level == 0 ? "" : "",
                useGrid
                  ? level == 0
                    ? ""
                    : "text-[14px] font-light hover:dark:bg-dark-primary"
                  : "hover:bg-light-primary hover:dark:bg-dark-primary",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={useGrid ? "" : "flex items-center gap-2"}>
                {icon && <span className="text-xl">{icon}</span>}
                <span className="font-medium">{label}</span>
              </div>

              {children && renderMenuItems(children, level + 1)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderMenuItems(items)}</div>;
}

export default Menu;
