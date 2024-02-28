import styles from "../../styles/styles.module.css";

export default function BlogLayout({ children }: any) {
  return (
    <>
      <div className={styles.container}>
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
}
