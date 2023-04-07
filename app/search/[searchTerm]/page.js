import getWikiResults from "@/lib/getWikiResults";
import React from "react";
import Item from "./components/Item";

export async function generateMetadata({ params: { searchTerm } }) {
  const wikiData = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `Not Found - ${displayTerm}`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params }) {
  const searchTerm = params?.searchTerm;
  const wikiData = await getWikiResults(searchTerm);
  const results = wikiData?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm.replaceAll(
          "%20",
          " "
        )} Not Found`}</h2>
      )}
    </main>
  );
}
