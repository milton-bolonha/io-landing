import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const MENU = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Nossa Mentoria", href: "/mentoria" },
  { label: "Planos", href: "/planos" },
  { label: "Contato", href: "/contato" },
];

export default function Header({
  logoImage = "",
  logoText = "IO",
  logoFontStyle = "font-semibold",
  logoAlign = "left",
  showMainMenu = true,
  headerHeight = 60,
  isTransparent = false,
  stickyHeader = true,
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const themeIsDark = mounted && (resolvedTheme || theme) === "dark";

  return (
    <header
      className={
        "w-full z-30 " +
        (stickyHeader ? "sticky top-0" : "") +
        " " +
        (isTransparent ? "bg-transparent" : "bg-white dark:bg-black border-b")
      }
      style={{ height: headerHeight }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="Página inicial"
        >
          {logoImage ? (
            <img src={logoImage} alt={logoText} className="h-8 w-auto" />
          ) : (
            <span className={`${logoFontStyle} text-lg`}>{logoText}</span>
          )}
        </a>

        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Menu principal"
        >
          {showMainMenu &&
            MENU.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="opacity-90 hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="text-sm px-3 py-1 rounded border border-transparent hover:border-current"
          >
            Login
          </a>
          <a
            href="#loja"
            className="text-sm px-3 py-1 rounded border border-current"
          >
            Ir Pra Loja
          </a>
          <button
            aria-label="Alternar tema"
            onClick={() => setTheme(themeIsDark ? "light" : "dark")}
            className="p-2 rounded focus-visible:outline focus-visible:outline-2"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : themeIsDark ? (
              <FiSun aria-hidden />
            ) : (
              <FiMoon aria-hidden />
            )}
          </button>
          <button
            className="md:hidden p-2"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={
          (open ? "block" : "hidden") +
          " md:hidden border-t bg-white dark:bg-black"
        }
      >
        <nav
          className="px-4 py-3 flex flex-col gap-3"
          aria-label="Menu principal (mobile)"
        >
          {showMainMenu &&
            MENU.map((item) => (
              <a key={item.href} href={item.href} className="py-1">
                {item.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
}
