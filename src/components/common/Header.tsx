import styles from "@/styles/Header.module.css";
import { appTitle } from "@/utils/strings";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.headerText}>{appTitle}</h1>
      </Link>
    </header>
  );
}
