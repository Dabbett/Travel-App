import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-zinc-400 shadow-emerald-300 shadow-md flexBetween max-container padding-container relative top-0 left-0 right-0 z-30 py-5 px-10 bg-inherit">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={50}
          className="rounded"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="bg-transparent regular-16 text-slate-500 drop-shadow-md flexCenter cursor-pointer transition-all hover:font-extrabold hover:-translate-y-1 hover:underline hover:shadow-slate-900 focus:-translate-y-3 active:-translate-y-3 active:underline active:text-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden"> 
        <Button
        type='button'
        title='Log In'
        icon='/user.png'
        variant='btn_light_green'/>
      </div>
      <Image
    src="menu.svg" alt="menu"
    width={32}
    height={32}
    className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  );
};

export default Navbar;
