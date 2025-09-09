import React from "react";
import { getAllPageSlugs } from "@/lib/pages";

export default function PagesContainer() {
  const slugs = getAllPageSlugs();
  return (
    <ul className="list-disc pl-6">
      {slugs.map((s) => (
        <li key={s}>
          <a href={`/pages/${s}`} className="underline">
            {s}
          </a>
        </li>
      ))}
    </ul>
  );
}
