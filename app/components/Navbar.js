import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <div className="flex ">
        <h2 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 mx-5">
          <Link href="/">Home</Link>
        </h2>
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 mx-5">
          <Link href="/search">WikiRocket!</Link>
        </h1>
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 mx-5">
          <Link href="/blog">Blog!</Link>
        </h1>
      </div>
      <Search />
    </nav>
  );
}
