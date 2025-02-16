import Link from "next/link";

export default function Home() {
  return (
    <div className="space-x-4">
      <Link href="/noob">Noob</Link>
      <Link href="/rhf">React hook form</Link>
      <Link href="/base-form">Base form</Link>
    </div>
  );
}
