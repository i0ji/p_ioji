import styles from "./HomePage.module.scss"
import { NavLink } from "react-router-dom"


// ---------- MARKUP

export default function HomePage() {
    return (
        <section className={styles.homepage}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/git">
                            Git
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examples">
                            Examples
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1>HELLO!</h1>
            <p>My name is Ioann, I`m frontend developer/devops engineer</p>
            <NavLink to={"/"}>
                BACK
            </NavLink>
        </section>
    )
}
