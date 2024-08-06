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
                    <li>
                        <NavLink to="/examples">
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examples">
                            Cat
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.homepage_info}>
                <h1>HELLO!</h1>
                <p>My name is Ioann, I`m frontend developer/devops engineer</p>
            </div>

            <NavLink to={"/"}>
                BACK
            </NavLink>
        </section>
    )
}
