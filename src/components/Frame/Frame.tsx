
import styles from "./Frame.module.scss";
import { IProps } from "declarations/types";

export default function Frame(children: IProps) {
    return (
        <section className={styles.commonFrame}>
            {children}
        </section>
    )
}
