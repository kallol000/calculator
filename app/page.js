import Image from "next/image";
// import styles from "./page.module.css";
import Cell from "./ui/components/cell";
import styles from "./ui/css/Hero.module.css"
import calculator from "../public/calculator.jpg"

export default function Home() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.header}>How Does a Calculator Work?</div>
      <div className={styles.content}>
        <div>
          Ever wondered how a simple clculator actually works? In this turtorial, we'll dive into the world of stack data structure and how this data structure is used in the workings of a calculator.
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
