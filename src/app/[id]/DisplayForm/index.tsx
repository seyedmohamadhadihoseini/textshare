
"use client";

import { toast } from "react-toastify";
import style from "./style.module.css";
export default function DispalyFormText({ htmlString }: { htmlString: string }) {

    return <div className={style.main}>
        <div className={style["inner-text"]} id="display-text-output" dangerouslySetInnerHTML={{ __html: htmlString }}></div>
        <button onClick={() => {
            const text = document.getElementById("display-text-output")?.innerText;
            navigator.clipboard.writeText(text||"");
            toast.success("successfully copy operation done");
        }}>Copy</button>
    </div>
}