import Image from "next/image";
import BlogList from "../components/BlogList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlogList />
    </main>
  );
}
