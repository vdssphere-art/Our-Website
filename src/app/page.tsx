import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "A new website is coming soon.",
};

export default function Home() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__glow coming-soon__glow--one" />
      <div className="coming-soon__glow coming-soon__glow--two" />
      <div className="coming-soon__content">
        <p className="coming-soon__eyebrow">New experience loading</p>
        <h1 className="coming-soon__title">Coming Soon</h1>
      </div>
    </main>
  );
}
