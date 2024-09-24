"use client";
import { useState } from "react";
import SaveText from "./MainForm/server";
import style from "./style.module.css";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(() => import("../component/CkEditor"), { ssr: false });
export default function TextShareForm() {
  const [data, setData] = useState("");
  return <div>
    <form className={style.mainform} action={SaveText}>
      <CustomEditor setData={setData} initialData="hi"/>
      <input hidden type="text" readOnly name="text" value={data} />
      <button type="submit">Generate Link</button>
    </form>
  </div>
}
