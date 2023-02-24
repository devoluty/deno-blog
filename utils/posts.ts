import { Post } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";
import { render } from "https://deno.land/x/gfm@0.2.0/mod.ts";

export async function loadPost(id: string): Promise<Post | null> {
  try {
    const raw = await Deno.readTextFile(`./content/posts/${id}.md`);
    const { attrs, body } = extract(raw);
    const params = attrs as Record<string, string>;

    const post: Post = {
      id,
      title: params.title,
      body: render(body),
      date: new Date(params.date),
      excerpt: params.excerpt,
      author: "Devoluty",
    };

    return post;
  } catch (e) {
    console.error(`Error loading post ${id}: ${e.message}`);
    return null;
  }
}

export async function listPosts(): Promise<Post[]> {
  const promises: Promise<Post | null>[] = [];
  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts = (await Promise.all(promises)).filter((p): p is Post =>
    p !== null
  );

  posts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return posts;
}
