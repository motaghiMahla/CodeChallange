import React from "react";
import {menuItem} from "@/utils/globalTypes";
import {Typography} from "@/components";
import Link from "next/link";

const mockData: menuItem[] = [
  {title: "contactUs", href: "/"},
  {title: "srvices", href: "/"},
  {title: "jobs", href: "/"},
  {title: "aboutUs", href: "/"},
];

function Menu() {
  return (
    <ul className=" w-auto flex flex-row gap-1 md:gap-2 p-1 md:-2">
      {mockData.map((item: menuItem) => {
        return (
          <li className="w-auto inline-flex">
            {" "}
            <Link href={item.href}>
              <Typography variant="body3">{item.title}</Typography>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
