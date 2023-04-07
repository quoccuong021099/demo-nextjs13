import React from "react";

export default async function UserPost({ userPost }) {
  const data = await userPost;

  return (
    <section>
      <ul>
        {data?.map((post) => (
          <li
            key={post?.id}
            style={{
              borderBottom: "1px solid #fff",
              marginBottom: "30px",
              padding: "10px",
              maxWidth: "70%",
            }}
          >
            <h5>{post?.title}</h5>
            <p>{post?.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
