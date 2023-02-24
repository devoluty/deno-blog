import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.2.0/mod.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../../components/Header.tsx";

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
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Header />
      <div class="md:m-32 sm:m-12 m-6 p-1 rounded-lg bg-yellow-50 font-sans markdown-body">
        <div dangerouslySetInnerHTML={{ __html: render(post.body) }}></div>
        <footer>
          <time class="text-sm my-2 text-gray-700">
            {Intl.DateTimeFormat("es").format(post.date)}
          </time>
          <div class="text-sm font-sans">
            <span>Author: {post.author}</span>
          </div>
        </footer>
      </div>
    </>
  );
}
