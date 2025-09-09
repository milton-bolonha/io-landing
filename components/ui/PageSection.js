import React from "react";

export default function PageSection({
  isBoxed = true,
  bgImage = "",
  bgColor = "bg-white dark:bg-black",
  numColumns = 1,
  gap = "gap-6",
  maxWidth = "max-w-7xl",
  hPadding = "px-6",
  vPadding = "py-12",
  title = "",
  subtitle = "",
  ctaBtnText = "",
  ctaBtnLink = "#",
  ctaContrastBtnText = "",
  ctaContrastBtnLink = "#",
  ctaContrastBtnPosition = "left",
  children,
}) {
  const columnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-4",
  }[Math.min(Math.max(numColumns, 1), 4)];

  const wrapperClasses = [
    bgColor,
    vPadding,
    bgImage ? "relative" : "",
    "w-full",
  ].join(" ");
  const containerClasses = [isBoxed ? maxWidth : "", hPadding, "mx-auto"].join(
    " "
  );

  return (
    <section
      className={wrapperClasses}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      aria-label={title || undefined}
    >
      {bgImage ? (
        <div
          className="absolute inset-0 bg-black/40 pointer-events-none"
          aria-hidden="true"
        />
      ) : null}

      <div className={containerClasses}>
        {(title || subtitle) && (
          <header className="mb-8 text-center">
            {title ? (
              <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 text-base opacity-80">{subtitle}</p>
            ) : null}
          </header>
        )}

        <div className={["relative grid", columnsClass, gap].join(" ")}>
          {children}
        </div>

        {(ctaBtnText || ctaContrastBtnText) && (
          <div
            className={
              "mt-10 flex flex-wrap items-center gap-3 " +
              (ctaContrastBtnPosition === "center"
                ? "justify-center"
                : ctaContrastBtnPosition === "right"
                ? "justify-end"
                : "justify-start")
            }
          >
            {ctaBtnText ? (
              <a
                href={ctaBtnLink}
                className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-5 py-2 text-sm font-medium text-[var(--color-primary-foreground)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={ctaBtnText}
              >
                {ctaBtnText}
              </a>
            ) : null}
            {ctaContrastBtnText ? (
              <a
                href={ctaContrastBtnLink}
                className="inline-flex items-center rounded-md border border-current px-5 py-2 text-sm font-medium transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={ctaContrastBtnText}
              >
                {ctaContrastBtnText}
              </a>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
