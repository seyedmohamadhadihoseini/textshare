
import SaveText from "./server";
import style from "./style.module.css";

export default function Home() {
  return <div>
    <form className={style.mainform} action={SaveText}>
      <textarea name="text" >

      </textarea>
      <button type="submit">Generate Link</button>
    </form>
  </div>
}
