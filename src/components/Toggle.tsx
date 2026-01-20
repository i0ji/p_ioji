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
        checked={themeMode === "dark"}
        onClick={() => {
          dispatch(toggleTheme());
          console.log(themeMode);
        }}
      />
      <label className="text-fg" htmlFor="temp">
        {themeMode === "dark" ? `светлая` : `тёмная`} тема
      </label>
    </div>
  );
}
