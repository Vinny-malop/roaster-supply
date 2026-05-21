type LegalContentProps = {
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalContent({
  lastUpdated,
  children,
}: LegalContentProps) {
  return (
    <div className="legal-content">
      <span className="legal-updated">Last updated: {lastUpdated}</span>
      {children}
    </div>
  );
}
