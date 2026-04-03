"use client";

import { motion } from "motion/react";

interface ImageGridItem {
  src: string;
  alt: string;
  caption?: string;
  span?: 1 | 2;
}

interface ImageGridProps {
  images: ImageGridItem[];
  columns?: 2 | 3 | 4;
  variant?: "dark" | "light";
}

export function ImageGrid({ images, columns = 3, variant = "light" }: ImageGridProps) {
  const colMap = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" };

  return (
    <div className={`grid grid-cols-1 ${colMap[columns]} gap-3`}>
      {images.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`relative rounded-xl overflow-hidden ${img.span === 2 ? "col-span-2" : ""}`}
        >
          <img src={img.src} alt={img.alt} className="w-full h-48 sm:h-56 object-cover" />
          {img.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
              <p className="text-white text-xs">{img.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
