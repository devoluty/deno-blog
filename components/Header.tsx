export default function Header() {
  return (
    <header class="bg-white shadow-lg">
      <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center py-4">
          <div>
            <a href="#" class="text-xl font-bold text-gray-800">Deno Blog</a>
          </div>
          <div class="flex">
            <a href="/" class="py-2 px-3 text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a
              href="/about"
              class="py-2 px-3 text-gray-600 hover:text-gray-800"
            >
              About
            </a>
            <a
              href="/blog"
              class="py-2 px-3 text-gray-600 hover:text-gray-800"
            >
              Blogs
            </a>
            <a
              href="https://github.com/devoluty/deno-blog"
              class="py-2 px-3 text-gray-600 hover:text-gray-800"
            >
              Github
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
