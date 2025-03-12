import styles from "../css/component.module.css"
export default function Cell({color, classname}){
    return(
        <div className={`${styles.cell} ${styles[classname]}`} style={{backgroundColor: color}}>

        </div>
    )
}