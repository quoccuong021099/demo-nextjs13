export default async function getUserPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) undefined;
  return res.json();
}
