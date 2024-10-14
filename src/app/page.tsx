
import dynamic from "next/dynamic"
// import TextShareForm from "./MainForm"
const TextShareForm = dynamic(() => import("./MainForm"), { ssr: false });
export default function Home() {

  return <TextShareForm />
}