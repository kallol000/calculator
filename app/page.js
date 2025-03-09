import Image from "next/image";
import styles from "./page.module.css";
import Cell from "./ui/components/cell";

export default function Home() {
  return (
    <div>
      <Cell 
        color = "black"
      />
      
      <Cell 
        color = "orange"
      />
    </div>
  );
}
