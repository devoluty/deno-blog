import { Handlers, PageProps } from "$fresh/server.ts";
import Button from "../../islands/Button.tsx";
import { loadPost } from "../../utils/posts.ts";

// this executes before the next function
export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params; // file name
    const post = await loadPost(id);
    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};
  return (
    <article class="m-4 p-5 rounded-lg bg-yellow-200 font-sans">
      <Button />
      <h1 class="text-3xl font-bold my-1">{post.title}</h1>
      <p class="text-xl my-4">{post.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
      <time class="text-sm my-2 text-gray-700">
        {Intl.DateTimeFormat("es").format(post.date)}
      </time>
    </article>
  );
}
