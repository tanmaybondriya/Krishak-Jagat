import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { aboutLinks, contact, primaryNav, site, socialLinks, subscribeLinks } from "@/lib/site";
import logo from "../../public/brand/krishak-jagat-logo.png";

const linkClass = "inline-flex min-h-9 items-center text-[15px] text-white/75 transition-colors hover:text-harvest-200";

function FooterHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-sm font-semibold tracking-wide text-harvest-300">{children}</h2>;
}

export function Footer() {
  return (
    <footer className="on-dark mt-16 bg-leaf-950 text-white sm:mt-20">
      <div className="h-1 bg-gradient-to-r from-leaf-600 via-harvest-400 to-leaf-600" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-4">
          {/* The logo has a white background, so it sits on a light plate here. */}
          <Link href="/" className="inline-block rounded-xl bg-paper p-2.5" aria-label="कृषक जगत: होम">
            <Image src={logo} alt="" className="h-11 w-auto" sizes="140px" />
          </Link>
          <p className="mt-4 font-display text-lg text-white">{site.tagline}</p>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/70" lang="en">
            Krishak Jagat was founded in 1946 by Shri Manik Chandra Bondriya and his younger brother
            Shri Suresh Chandra Gangrade, freedom fighters who set out to serve India&apos;s farmers.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" lang="en" aria-label="सोशल मीडिया">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-dark inline-flex min-h-10 items-center rounded-full border px-3.5 text-sm transition-colors hover:bg-white/15"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-categories" className="lg:col-span-3">
          <FooterHeading id="footer-categories">श्रेणियाँ</FooterHeading>
          <ul className="mt-3 grid grid-cols-2 gap-x-4">
            {categories.map((c) => (
              <li key={c.slug}>
                <a href={c.href} className={linkClass}>
                  {c.shortName}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-site" className="lg:col-span-2">
          <FooterHeading id="footer-site">कृषक जगत</FooterHeading>
          <ul className="mt-3">
            {[...primaryNav, ...subscribeLinks.slice(0, 1)].map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <FooterHeading>संपर्क</FooterHeading>
          <address className="mt-3 space-y-3 text-[15px] leading-relaxed text-white/75 not-italic" lang="en">
            <p>
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p>
              Phone:{" "}
              <a href={contact.phoneHref} className="text-white hover:text-harvest-200">
                {contact.phone}
              </a>
              <br />
              <span lang="hi">किसान हेल्पलाइन</span>:{" "}
              <a href={contact.helplineHref} className="text-white hover:text-harvest-200">
                {contact.helpline}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${contact.email}`} className="text-white hover:text-harvest-200">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p lang="en">© Krishak Jagat (कृषक जगत). All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-4" lang="en">
            {aboutLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-9 items-center hover:text-harvest-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
