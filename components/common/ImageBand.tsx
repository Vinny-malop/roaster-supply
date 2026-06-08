type ImageBandProps = {
  src: string;
  alt: string;
  /**
   * "cover" = full-width landscape band (image fills + crops).
   * "portrait" = mobile: full-width natural; desktop: contained/centered,
   * never stretched (good for vertical phone photos).
   */
  variant?: "cover" | "portrait";
  /** CSS object-position for the cover variant, e.g. "center", "center 40%" */
  position?: string;
};

export default function ImageBand({
  src,
  alt,
  variant = "cover",
  position = "center",
}: ImageBandProps) {
  if (variant === "portrait") {
    return (
      <div className="image-portrait">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="image-portrait__img"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="image-band">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="image-band__img"
        style={{ objectPosition: position }}
        loading="lazy"
      />
    </div>
  );
}
