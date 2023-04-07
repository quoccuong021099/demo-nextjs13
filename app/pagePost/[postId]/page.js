import getAllUsers from "@/lib/getAllUsers";
import getPagePostDetail from "@/lib/getPagePostDetail";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostDetailPage({ params }) {
  const postId = params?.postId;
  const post = await getPagePostDetail(postId);

  if (!post?.id) return notFound();

  return (
    <div>
      <section className="text-white">
        <h2>
          <Link href="/users">Back to list user</Link>
        </h2>
        <br />
        <p>{post.title}</p>
        <p>{post.author}</p>
        <p>{post.description}</p>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getAllUsers();
  return users.map((user) => ({ userId: user.id }));
}
