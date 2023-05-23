import styles from "@/styles/Home.module.css";
import Header from "../common/Header";
import useBlockData from "@/hooks/useBlockData";

export default function Home() {
  const { blockData, hasNoData, isDecoding, isError: errorLoadingNfts } = useBlockData();

  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
}
