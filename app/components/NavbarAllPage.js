import Link from "next/link";
import React from "react";

export default function NavbarAllPage() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h2 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">Home</Link>
      </h2>
      <h2 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/search">WikiRocket!</Link>
      </h2>
      <h2 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/blog">Blog</Link>
      </h2>
    </nav>
  );
}
