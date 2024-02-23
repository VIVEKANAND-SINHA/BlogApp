import BlogCard from "@/components/Card";
import Image from "next/image";

import NonSSRWrapper from "@/components/NoSrr";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <NonSSRWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <BlogList />
      </main>
    </NonSSRWrapper>
  );
}
