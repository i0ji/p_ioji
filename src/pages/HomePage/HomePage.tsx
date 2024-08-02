import styles from "./HomePage.module.scss"
import { NavLink } from "react-router-dom"


// ---------- MARKUP

export default function HomePage() {
    return (
        <section className={styles.homepage}>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        Examples
                    </li>
                    <li>
                        Contacts
                    </li>
                </ul>






            </nav>
            <h1>HELLO!</h1>
            <p>My name is IOANN, I`m frontend engeneer</p>
            <NavLink to={"/"}>
                BACK
            </NavLink>
        </section>
    )
}
