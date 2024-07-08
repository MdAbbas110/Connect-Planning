"use client";
import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";
import WordMark from "./WordMark";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavbarProps) => {
  return (
    <nav aria-label="main" className="p- 4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href={"/"}>
          <WordMark />
          <span className="sr-only">Connect planning home page</span>
        </Link>

        <ul className="flex items-center gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}> {item.label}</ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  className="inline-flex min-h-11 items-center"
                  field={item.link}
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
