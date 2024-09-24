"use server"

export default async function StoreEditor(formData:FormData) {
    const raw = Object.fromEntries(formData);
    console.log(raw)
}