import styles from "./layout.module.css";

export interface LayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function Layout({ left, right }: LayoutProps) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>{left}</aside>
      <main className={styles.content}>{right}</main>
    </div>
  );
}
