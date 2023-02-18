import { Post } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";
import { render } from "https://deno.land/x/gfm@0.2.0/mod.ts";

export async function loadPost(id: string): Promise<Post | null> {
  let raw: string;
  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);
  } catch {
    return null;
  }

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    body: render(body),
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}

export async function listPostsSquential(): Promise<Post[]> {
  const posts = [];
  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    const post = await loadPost(id);
    if (!post) continue;
    posts.push(post);
  }

  console.log(posts);
  return posts;
}
export async function listPosts(): Promise<Post[]> {
  const promises = [];
  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts = await Promise.all(promises) as Post[];

  posts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return posts;
}

await listPosts();