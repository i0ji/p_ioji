import styles from "./styles.module.scss";

import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { toggleTheme } from "store/themeSlice";

export default function Toggle() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (
    <div className={clsx(styles.toggle, "border-2 border-red-500")}>
      <input
        type="checkbox"
        id="temp"
        //LATER
        //FIXME
        checked={themeMode === "dark"}
        onClick={() => {
          dispatch(toggleTheme());
          console.log(themeMode);
        }}
      />
      <label htmlFor="temp">
        {themeMode === "dark" ? `светлая` : `тёмная`} тема
      </label>
    </div>
  );
}
