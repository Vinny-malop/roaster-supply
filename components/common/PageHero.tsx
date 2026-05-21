type PageHeroProps = {
  kicker: string;
  title: string;
  sub: string;
};

export default function PageHero({ kicker, title, sub }: PageHeroProps) {
  return (
    <div className="page-hero">
      <span className="page-hero__kicker">{kicker}</span>
      <h1 className="page-hero__title">{title}</h1>
      <p className="page-hero__sub">{sub}</p>
    </div>
  );
}
