import Image from "next/image";
// import styles from "./page.module.css";
import Cell from "./ui/components/cell";
import styles from "./ui/css/Hero.module.css"
import introtyles from "./ui/css/problem.module.css"
import Bucket from "./ui/components/bucket";

import calculator from "../public/calculator.jpg"
import { content } from "./lib/content";

export default function Home() {

  let cellinfo = []


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

    <section className={introtyles.problemdiv}>

    </section>
    <section className="Stack" style={{marginTop: "200px"}}>
      <Bucket>
          <Cell 
            color="#800000"
            classname = "cell-1"
          />
        <Cell 
          color="#800000"
          classname = "cell-2"
        />
        <Cell 
          color="#800000"
          classname = "cell-3"
        />
        
      </Bucket>
    </section>
    <section className="Calculator">

    </section>
    </>
  );
}
