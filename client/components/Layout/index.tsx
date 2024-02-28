import Header from "../header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
