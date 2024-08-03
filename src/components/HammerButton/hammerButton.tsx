import styles from "./hammerButton.module.scss"
import { NavLink } from "react-router-dom";

export default function HammerButton() {
  return (
    <NavLink to="/home">
      
      <button
        className={styles.hammerButton}
      >
      </button>

    </NavLink>
  );
}
