import UserPost from "@/app/users/[userId]/components/UserPost";
import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import getAllUsers from "@/lib/getAllUsers";

// dynamic Metadata
export async function generateMetadata({ params }) {
  const userId = params?.userId;
  const user = await getUser(userId);

  if (!user?.name)
    return {
      title: "User not found",
    };
  return {
    title: user.name,
    description: `User detail page for ${user.name}`,
  };
}

export default async function UserDetailPage({ params }) {
  const userId = params?.userId;
  const user = await getUser(userId);
  const userPost = getUserPost(userId);
  // const [user, userPost] = await Promise.all([
  //   getUser(userId),
  //   getUserPost(userId),
  // ]);
  if (!user?.name) return notFound();

  return (
    <div>
      <section>
        <h2>
          <Link href="/users">Back to list user</Link>
        </h2>
        <br />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </section>

      <br />

      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPost userPost={userPost} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getAllUsers();
  return users.map((user) => ({ userId: user.id }));
}
