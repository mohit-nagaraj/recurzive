"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-lg text-xl p-3 text-gray-900 transition-all mb-3 hover:bg-gray-300",
        {
          "bg-gray-800 text-white hover:bg-gray-800": pathname === href,
        }
      )}
    >
      {children}
    </Link>
  );
}
