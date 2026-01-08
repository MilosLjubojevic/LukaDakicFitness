"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoad"> {
  skeletonClassName?: string;
}

export function ImageWithSkeleton({
  className,
  skeletonClassName,
  alt,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {/* Skeleton placeholder */}
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded-inherit ${
            skeletonClassName || ""
          }`}
          style={{ borderRadius: "inherit" }}
        />
      )}

      {/* Actual image */}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
