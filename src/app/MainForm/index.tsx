"use client";
import { useEffect, useState } from "react";
import SaveText from "./server";
import style from "./style.module.css";
import CustomEditor from "@/component/CkEditor";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function TextShareForm() {
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [state, formAction] = useFormState(SaveText, { id: 0, message: "", success: false });
  const router = useRouter();
  useEffect(() => {

    if (state.id > 0) {

      if (state.success) {
        router.push(`/${id}`);
      } else {
        toast.warning("choose another id");
      }
    } else {
      setId(GenerateRandomId());
    }
  }, [state.id])
  return <div>
    <form className={style.mainform} action={formAction}>
      <CustomEditor setData={setData} initialData="" />
      <input hidden type="text" readOnly name="text" value={data} />
      <input className={style["id-input"]} type="text" name="id" onChange={(e) => setId(e.target.value)} value={id} />
      <button type="submit">Generate Link</button>
    </form>
  </div>
}
function GenerateRandomId(minLength = 20, maxLength = 50) {

  const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIPASDFGHJKLMNBVCXZ123456798-".split("");

  let result = "";
  length = Math.floor(Math.random() * (maxLength - minLength) + minLength)
  for (let i = 0; i < length; ++i) {

    const index = Math.floor(Math.random() * chars.length)
    result += chars[index];
  }
  return result;

}