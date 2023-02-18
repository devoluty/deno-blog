import { Handlers, PageProps } from "$fresh/server.ts";
import Button from "../../islands/Button.tsx";
import { loadPost } from "../../utils/posts.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.2.0/mod.ts";
import { Head } from "$fresh/runtime.ts";

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
      <div class="m-4 p-5 rounded-lg bg-yellow-50 font-sans markdown-body">
        <Button />
        <div dangerouslySetInnerHTML={{ __html: render(post.body) }}></div>
        <time class="text-sm my-2 text-gray-700">
          {Intl.DateTimeFormat("es").format(post.date)}
        </time>
      </div>
    </>
  );
}
