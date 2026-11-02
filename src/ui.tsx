/// <reference types="vite/client" />

import React from "react";
import assets from "./assets.json";
export const assetPath = (path: string) =>
  path.startsWith("/") ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
export const a = (node: keyof typeof assets, name: string) =>
  assetPath((assets[node] as Record<string, string>)[name]);
export type GalleryItem = { image: string; title: string; description: string };
export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`button${light ? " button-light" : ""}`} href={href}>
      {children}
    </a>
  );
}
export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}
function Arrow({
  direction,
  node = "5:446",
}: {
  direction: "prev" | "next";
  node?: "5:446" | "5:553" | "51:406";
}) {
  const name =
    node === "51:406"
      ? direction === "prev"
        ? "imgAfter1"
        : "imgAfter2"
      : direction === "prev"
        ? "imgAfter"
        : "imgAfter1";
  return (
    <span
      className="arrow-icon"
      aria-hidden="true"
      style={{ maskImage: `url("${a(node, name)}")` }}
    />
  );
}
export function Controls({
  count,
  current,
  onChange,
  hero = false,
  node = "5:553",
}: {
  count: number;
  current: number;
  onChange: (n: number) => void;
  hero?: boolean;
  node?: "5:446" | "5:553" | "51:406";
}) {
  const arrows = (
    <div className="arrow-buttons">
      <button
        aria-label="Previous slide"
        onClick={() => onChange((current + count - 1) % count)}
      >
        <Arrow direction="prev" node={node} />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => onChange((current + 1) % count)}
      >
        <Arrow direction="next" node={node} />
      </button>
    </div>
  );
  const dots = (
    <div className="dots" aria-label="Choose slide">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          className={i === current ? "active" : ""}
          aria-label={`Go to slide ${i + 1}`}
          aria-pressed={i === current}
          onClick={() => onChange(i)}
        />
      ))}
    </div>
  );
  return (
    <div className={`controls${hero ? " hero-controls" : ""}`}>
      {hero ? (
        <>
          {arrows}
          {dots}
        </>
      ) : (
        <>
          {dots}
          {arrows}
        </>
      )}
    </div>
  );
}
