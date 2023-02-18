import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../utils/posts.ts";
import { Post } from "../types.d.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data ?? {};

  return (
    <div class="p-4">
      <h1 class="text-gray-900 text-3xl">Deno Blog</h1>
      <div class="py-5">
        {posts.map(({ id, title, date }: Post) => (
          <article key={id}>
            <h2 class="font-bold text-lg hover:text-blue-900">
              <a href={`/blog/${id}`}>{title}</a>
            </h2>
            <span class="text-gray-600 text-sm">
              {Intl.DateTimeFormat("es").format(date)}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
