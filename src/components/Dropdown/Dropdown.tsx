import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Menu, { MenuItems } from "../Menu/Menu";

type Trigger = "hover" | "click";
type Placement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "bottomLeft"
  | "bottomRight"
  | "topRight"
  | "topLeft";

function Dropdown({
  children,
  className,
  menu,
  trigger,
  placement = "bottom",
  useGrid = false,
  show = false,
}: {
  children: React.ReactNode;
  className?: string;
  menu: MenuItems[];
  trigger: Trigger[];
  placement?: Placement;
  useGrid?: boolean;
  show?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { resolvedTheme } = useTheme();

  const handleClick = useCallback(() => {
    if (trigger.includes("click")) {
      setIsOpen((prev) => !prev);
    }
  }, [trigger]);

  const handleMouseEnter = useCallback(() => {
    if (trigger.includes("hover")) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setIsOpen(true);
    }
  }, [trigger]);

  const handleMouseLeave = useCallback(() => {
    if (trigger.includes("hover")) {
      timerRef.current = setTimeout(() => {
        if (
          !dropdownRef.current?.contains(document.activeElement) &&
          !triggerRef.current?.contains(document.activeElement)
        ) {
          setIsOpen(false);
        }
      }, 300);
    }
  }, [trigger]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        triggerRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen, show]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }

    if (
      (isOpen || show) &&
      menuRef.current &&
      dropdownRef.current &&
      triggerRef.current
    ) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();

      const distanceToRight = window.innerWidth - dropdownRect.right;

      if (dropdownRect.bottom > window.innerHeight) {
        dropdownRef.current.style.top = `${
          triggerRect.top - dropdownRect.height
        }px`;
        dropdownRef.current.style.bottom = "auto";
      }

      if (menuRect.top < 0 && Math.abs(menuRect.top) + window.innerHeight) {
        dropdownRef.current.style.top = `10px`;
        dropdownRef.current.style.bottom = "auto";
      }

      if (dropdownRect.right > window.innerWidth) {
        dropdownRef.current.style.left = `${distanceToRight - 10}px`;
        dropdownRef.current.style.right = "auto";
      }
      if (menuRect.left < 0 && Math.abs(menuRect.left) + window.innerWidth) {
        dropdownRef.current.style.left = `${
          Math.abs(menuRect.left) +
          (window.innerWidth - (menuRect.width + menuRect.right) / 2) / 2
        }px`;
        dropdownRef.current.style.right = "auto";
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.style.maxHeight = isOpen
        ? `${menuHeight}px`
        : "0px";
    }
  }, [menuHeight, isOpen, show]);

  const getPlacementStyle = () => {
    const styles: Record<Placement, string> = {
      top: "bottom-full left-1/2 transform -translate-x-1/2 translate-y-[-4px]",
      bottom: "top-full left-1/2 transform -translate-x-1/2 translate-y-[4px]",
      left: "top-1/2 right-full transform -translate-y-1/2 translate-x-[-4px]",
      right: "top-1/2 left-full transform -translate-y-1/2 translate-x-[4px]",
      topLeft: "bottom-full left-0 transform translate-y-[-4px]",
      topRight: "bottom-full right-0 transform translate-y-[-4px]",
      bottomLeft: "top-full left-0 transform translate-y-[4px]",
      bottomRight: "top-full right-0 transform translate-y-[4px]",
    };
    return styles[placement];
  };

  const getArrowStyle = () => {
    const arrowStyles: Record<Placement, string> = {
      top: "top-full left-1/2 transform -translate-x-1/2 -translate-y-[4px]",
      bottom:
        "bottom-full left-1/2 transform -translate-x-1/2 translate-y-[4px]",
      left: "top-1/2 right-full transform -translate-y-1/2 -translate-x-[4px]",
      right: "top-1/2 left-full transform -translate-y-1/2 translate-x-[4px]",
      topLeft: "bottom-full left-0 transform -translate-y-[4px]",
      topRight: "bottom-full right-0 transform -translate-y-[4px]",
      bottomLeft: "bottom-full left-0 transform translate-y-[4px]",
      bottomRight: "bottom-full right-0 transform translate-y-[4px]",
    };
    return arrowStyles[placement];
  };

  return (
    <div
      ref={triggerRef}
      className={["z-[9999]", "relative inline-block", className].join(" ")}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {(isOpen || show) && (
        <div
          ref={dropdownRef}
          className={[
            getPlacementStyle(),
            `absolute transition-all duration-300 ease-in-out`,
          ].join(" ")}
          style={{
            opacity: isOpen ? 1 : 0,
            transition: "max-height 0.3s ease, opacity 1s ease",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Arrow outside of the content wrapper */}
          {useGrid && (
            <div
              className={[
                "absolute w-0 h-0 border-transparent",
                getArrowStyle(),
                "border-t-[16px] dark:border-t-dark-secondary border-t-light-secondary",
              ].join(" ")}
              style={{
                borderWidth: "16px",
                borderColor:
                  resolvedTheme === "dark"
                    ? `transparent transparent #292E39 transparent`
                    : "transparent transparent #fafafd transparent",
              }}
            />
          )}
          {/* Overflow hidden content wrapper */}
          <div
            style={{
              maxHeight: isOpen ? `${menuHeight}px` : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div ref={menuRef}>
              <Menu useGrid={useGrid} items={menu} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
