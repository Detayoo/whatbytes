import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Link href="/skill-test">Go to dashboard</Link>
    </div>
  );
}
