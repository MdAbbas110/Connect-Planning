"use client";
import Link from "next/link";
import { asLink, Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";

import WordMark from "./WordMark";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  return (
    <nav aria-label="main" className="p- 4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        {/* responsive  */}
        <div className="flex items-center justify-between">
          <Link href={"/"} className="z-50" onClick={() => setToggle(false)}>
            <WordMark />
            <span className="sr-only">Connect planning home page</span>
          </Link>

          <button
            onClick={() => setToggle(true)}
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={toggle}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end gap-4 bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            toggle ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            onClick={() => setToggle(false)}
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={toggle}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>

          <div className="grid justify-items-end gap-8">
            {settings.data.navigation.map((item) => {
              if (item.cta_button) {
                return (
                  <ButtonLink
                    className="text-xs"
                    onClick={() => setToggle(false)}
                    key={item.label}
                    field={item.link}
                    aria-current={
                      pathName.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                );
              }
              return (
                <PrismicNextLink
                  key={item.label}
                  className="block px-3 text-3xl first:mt-8"
                  field={item.link}
                  onClick={() => setToggle(false)}
                  aria-current={
                    pathName.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              );
            })}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathName.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  className="inline-flex min-h-11 items-center"
                  field={item.link}
                  aria-current={
                    pathName.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
