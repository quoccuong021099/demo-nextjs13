"use client";
import getPagePost from "@/lib/getPagePost";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useSWR, { SWRConfig } from "swr";

export const metadata = {
  title: "List user",
  description: "Generated by List user",
};

export default function PagePostPage({ searchParams }) {
  const router = useRouter();

  const [page, setPage] = useState(searchParams?.page || 1);
  const { data: posts, isLoading } = useSWR(page, () => getPagePost(page));

  const content = (
    <section>
      <h2 className="text-white">
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <ul>
        {posts?.data?.map((post) => (
          <li key={post.id} className="text-white">
            <Link href={`/pagePost/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );

  const handleChangePage = async (page) => {
    setPage(page);
    router.push(`/pagePost?page=${page}`);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div>
        {content} <br />{" "}
        <div>
          <button onClick={() => handleChangePage(1)}>1</button>
          <button onClick={() => handleChangePage(2)}>2</button>
          <button onClick={() => handleChangePage(3)}>3</button>
        </div>
      </div>
    </SWRConfig>
  );
}
