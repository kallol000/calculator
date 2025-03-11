import Image from "next/image";
// import styles from "./page.module.css";
import Cell from "./ui/components/cell";
import styles from "./ui/css/Hero.module.css"
import calculator from "../public/calculator.jpg"
import { content } from "./lib/content";

export default function Home() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.header}>How Does a Calculator Actually Work?</div>
      <div className={styles.content}>
        <div>
          {content.hero}
        </div>
        <Image className={styles.image} src = {calculator} alt = "calculator image" width={400}/>
      </div>
    </section>
    <section className="Stack">

    </section>
    <section className="Calculator">

    </section>
    </>
  );
}
