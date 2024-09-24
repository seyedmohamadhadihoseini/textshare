
import dynamic from "next/dynamic"
const TextShareForm = dynamic(() => import("./MainForm"), { ssr: false });
export default function Home() {

  return <TextShareForm />
}