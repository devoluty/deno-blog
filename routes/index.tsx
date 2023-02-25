import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <body class="bg-gray-100">
        <section
          class="h-screen bg-center bg-cover flex items-center"
          style="background-image: url('https://picsum.photos/1920/1080');"
        >
          <div class="container mx-auto px-4">
            <h1 class="text-6xl font-bold text-white uppercase leading-tight text-center">
              Simple Python
            </h1>
          </div>
        </section>
      </body>
    </>
  );
}
