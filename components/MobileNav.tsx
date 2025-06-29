"use client";

import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const MobileNav: FC<MobileNavProps> = ({ user }) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="hamburger-menu"
          />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="hidden">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>
              this is a sidebar for mobile user
            </SheetDescription>
          </SheetHeader>
          <Link
            href={"/"}
            className="cursor-pointer gap-1 px-4 items-center flex"
          >
            <Image src={"/icons/logo.svg"} width={34} height={34} alt="logo" />
            <h1 className="text-26 font-ibm font-bold text-black-1">
              Konsultin
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-6 pt-16 text-white px-3">
              {sidebarLinks.map((item) => {
                const isActive = pathName.startsWith(item.route);
                return (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.route}
                      className={cn("w-full mobilenav-sheet_close", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      <Image
                        src={item.imgURL}
                        width={20}
                        height={20}
                        alt={item.label}
                        className={cn({
                          "brightness-[3] invert-0": isActive,
                        })}
                      />
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
