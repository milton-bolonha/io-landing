import React from "react";

export default function FeatureBox({
  title,
  paragraph,
  items = [],
  itemBg = "red", // "red" | "green" | url
}) {
  const itemBgUrl = (() => {
    if (itemBg === "red") return "/images/item-bg-red.png";
    if (itemBg === "green") return "/images/item-bg-green.png";
    return itemBg || "/images/item-bg-red.png";
  })();

  return (
    <div
      className="rounded-4xl p-6 md:p-8 "
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)",
      }}
    >
      <h3 className="Inter text-2xl md:text-3xl font-normal mb-3">{title}</h3>
      {paragraph ? (
        typeof paragraph === "string" ? (
          <p
            className="Inter text-base opacity-90 mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: String(paragraph) }}
          />
        ) : (
          <p className="Inter text-base opacity-90 mb-6 leading-relaxed">
            {paragraph}
          </p>
        )
      ) : null}

      <ul className="space-y-3">
        {items.map((text, idx) => (
          <li
            key={idx}
            className="rounded-lg px-4 py-3 bg-no-repeat bg-left-top SpaceMono"
            style={{
              backgroundImage: `url(${itemBgUrl})`,
              backgroundSize: "cover",
              color: "#F4F0FF",
              fontSize: "16px",
              textIndent: "60px",
              lineHeight: "56px",
              padding: "0",
              fontWeight: "600",
            }}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
