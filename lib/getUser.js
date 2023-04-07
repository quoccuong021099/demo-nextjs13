export default async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) return undefined;
  return res.json();
}
