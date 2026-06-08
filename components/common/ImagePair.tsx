type Pic = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center", "center 35%" */
  position?: string;
};

type ImagePairProps = {
  left: Pic;
  right: Pic;
};

export default function ImagePair({ left, right }: ImagePairProps) {
  return (
    <div className="image-pair">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={left.src}
        alt={left.alt}
        className="image-pair__img"
        style={{ objectPosition: left.position ?? "center" }}
        loading="lazy"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={right.src}
        alt={right.alt}
        className="image-pair__img"
        style={{ objectPosition: right.position ?? "center" }}
        loading="lazy"
      />
    </div>
  );
}
