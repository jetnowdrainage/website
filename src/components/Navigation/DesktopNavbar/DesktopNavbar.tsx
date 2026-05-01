import Image from "next/image";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export function DesktopNavbar() {
  return (
    <header className="sticky top-0 z-[70] hidden border-b border-white/10 bg-[#03060a]/95 backdrop-blur lg:block">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Jet Now Drainage home" className="shrink-0">
          <Image
            src="/JetNow/JetNowLogoCroppedNoBG.png"
            alt="Jet Now Drainage"
            width={166}
            height={66}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
