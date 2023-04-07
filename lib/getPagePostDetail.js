export default async function getPagePostDetail(id) {
  const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`);
  if (!res.ok) throw new Error("fail to fetch dataa");
  return res.json();
}
