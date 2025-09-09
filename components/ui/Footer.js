import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer({
  logomark = "",
  companyName = "Empresa",
  description = "",
  copyright = `© ${new Date().getFullYear()} Empresa. Todos os direitos reservados.`,
  socialLinks = {},
  menuColumns = [],
  showNewsletter = false,
}) {
  const icons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    github: FaGithub,
    youtube: FaYoutube,
    twitter: FaTwitter,
  };

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          {logomark ? (
            <img src={logomark} alt={companyName} className="h-10 w-auto" />
          ) : (
            <div className="text-lg font-semibold">{companyName}</div>
          )}
          {description ? (
            <p className="mt-3 text-sm opacity-80">{description}</p>
          ) : null}
          <div className="mt-4 flex gap-3">
            {Object.entries(socialLinks).map(([key, href]) => {
              const Icon = icons[key.toLowerCase()];
              if (!Icon || !href) return null;
              return (
                <a
                  key={key}
                  href={href}
                  aria-label={key}
                  className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {menuColumns.map((col, idx) => (
          <div key={idx}>
            {col.title ? (
              <div className="font-medium mb-3">{col.title}</div>
            ) : null}
            <ul className="space-y-2">
              {col.links?.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="opacity-90 hover:opacity-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {showNewsletter ? (
          <div className="md:col-span-1">
            <div className="font-medium mb-3">Newsletter</div>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Assinar newsletter"
            >
              <input
                type="email"
                required
                placeholder="Seu e-mail"
                className="flex-1 rounded border px-3 py-2 bg-transparent"
                aria-label="Seu e-mail"
              />
              <button
                className="rounded bg-black text-white dark:bg-white dark:text-black px-4"
                aria-label="Assinar"
              >
                Assinar
              </button>
            </form>
          </div>
        ) : null}
      </div>
      <div className="border-t py-4 text-center text-sm opacity-80">
        {copyright}
      </div>
    </footer>
  );
}
