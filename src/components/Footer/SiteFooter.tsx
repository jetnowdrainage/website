import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/jetnowdrainage",
    iconSrc: "/icons/2023_Facebook_icon.svg",
    iconAlt: "Facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jetnowdrainage",
    iconSrc: "/icons/Instagram_logo_2022.svg",
    iconAlt: "Instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@jetnowdrainage",
    iconSrc: "/icons/Tiktok_icon.svg",
    iconAlt: "TikTok",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@jetnowdrainage",
    iconSrc: "/icons/YouTube_icon.svg",
    iconAlt: "YouTube",
  },
];

const siteLinks = [
  { label: "Services", href: "/services" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Legal", href: "/legal" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#03060a] text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <Link href="/" aria-label="Jet Now Drainage home" className="inline-block">
              <Image
                src="/JetNow/JetNowLogoCroppedNoBG.png"
                alt="Jet Now Drainage"
                width={145}
                height={58}
                className="h-auto w-auto"
              />
            </Link>

            <div className="space-y-2 text-sm leading-7 text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href="mailto:info@jetnowdrainage.co.uk" className="hover:text-brand-primary">
                  info@jetnowdrainage.co.uk
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a href="tel:07804450233" className="hover:text-brand-primary">
                  07804 450 233
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3 md:mb-2 md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Follow Us
            </p>
            <div className="flex items-center gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/95 transition hover:border-brand-primary hover:bg-white"
                >
                  <Image
                    src={social.iconSrc}
                    alt={social.iconAlt}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain"
                  />
                </Link>
              ))}
            </div>

            <div className="hidden flex-wrap gap-x-3 gap-y-2 text-sm text-slate-300 md:mt-5 md:flex md:flex-nowrap md:justify-end md:whitespace-nowrap">
              {siteLinks.map((link, index) => (
                <div key={link.label} className="flex items-center gap-3">
                  <Link href={link.href} className="transition hover:text-brand-primary">
                    {link.label}
                  </Link>
                  {index < siteLinks.length - 1 ? <span className="text-slate-500">|</span> : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b border-white/10 py-4 md:hidden">
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {siteLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jet Now Drainage. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.jackodev.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-accent hover:opacity-80"
            >
              JackoDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
