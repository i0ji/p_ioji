import styles from "./HomePage.module.scss"
import { NavLink } from "react-router-dom"

export default function HomePage() {
    return (
        <section className={styles.section}>
            <h1>BLAHBLAHBLAGH HELLO!</h1>
            <NavLink to={"/"}>
            BACK
            </NavLink>
        </section>
    )
}
