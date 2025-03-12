import styles from "../css/component.module.css"
export default function Bucket(props){
    return(
        
        <div className={styles.bucket}>
            {props.children}
        </div>

    )
}