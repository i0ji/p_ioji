import s from "./page.module.scss";

import { TextTyping } from "components/index"

export default function Home() {
  return (
    <main className={s.main}>
      <TextTyping />
    </main>


  );
}
