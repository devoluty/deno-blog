import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadPost should return null if post does not exist", async () => {
  const post = await loadPost("non-existent");

  assertEquals(post, null);
});

Deno.test("loadPost should return a post object if post does exist", async () => {
  const post = await loadPost("hello-world");

  assertEquals(post?.id, "hello-world");
});
