import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between mx-auto max-w-[1440px]
      px-6 lg:px-20 3xl:px-0 relative z-30 p-5"
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-base font-normal text-grey-50
              flex items-center justify-center cursor-pointer
              pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex lg:justify-center lg:items-center hidden">
        <Button size="lg" className="gap-x-2">
          <Image src="/user.svg" alt="userIcon" width={24} height={24} />
          Login
        </Button>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
