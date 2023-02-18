import { JSX } from "preact";
import { useState } from "preact/hooks";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  let [like, setlike] = useState(false);

  return (
    <button
      onClick={() => setlike(like = !like)}
      {...props}
      class="rounded-lg p-1 hover:bg-gray-900 bg-gray-800 text-white text-sm my-1"
    >
      {like ? "Dislike" : "Like"}
    </button>
  );
}
