"use client";

import { useState } from "react";
import { cn } from "../lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc = "/api/placeholder/400/400",
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={cn("object-cover", className)}
      onError={handleError}
    />
  );
}