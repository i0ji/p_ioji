import styles from "./styles.module.scss";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { toggleTheme } from "store/themeSlice";

export default function Toggle() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="temp"
        //LATER
        //FIXME
        checked={themeMode === "dark"}
        onChange={() => dispatch(toggleTheme())}
      />
      <label htmlFor="temp">
        {themeMode === "dark" ? `светлая` : `тёмная`} тема
      </label>
    </div>
  );
}
