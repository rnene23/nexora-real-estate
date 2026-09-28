"use client";
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const size = [480, 768, 1080, 1800].find((x) => x >= width) || 1800;
  return src.replace(/\.jpg$/, `-${size}.webp`);
}
