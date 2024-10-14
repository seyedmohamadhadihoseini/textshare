"use server";

import prisma from "@/service/prisma";

export default async function SaveText(prevState: { id: number, success: boolean, message: string }, formData: FormData) {
    const text = formData.get("text") as string;
    const id = formData.get("id") as string;
    console.log(id)
    const id_count = await prisma.text.count({
        where: {
            id
        }
    });
    if (id_count > 0) {
        return {
            id: prevState.id + Math.random() + 1,
            success: false,
            message: "this id already exists"
        }
    }

    const textCreated = await prisma.text.create({
        data: {
            id, text
        }
    })
    console.log(textCreated)
    return {
        id:prevState.id + Math.random() + 1,
        success: true,
        message: "successfully genereted"
    }
}