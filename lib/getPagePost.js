export default async function getPagePost(page) {
  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
  );
  if (!res.ok) throw new Error("fail to fetch dataa");
  return res.json();
}
