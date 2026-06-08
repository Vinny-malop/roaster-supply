type ImageBandProps = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center", "center 40%" */
  position?: string;
};

export default function ImageBand({
  src,
  alt,
  position = "center",
}: ImageBandProps) {
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
