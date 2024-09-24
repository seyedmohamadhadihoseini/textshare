"use server";

import prisma from "@/service/prisma";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export default async function SaveText(formData: FormData) {
    const text = formData.get("text") as string;
    const id = randomUUID();

    await prisma.text.create({
        data: {
            id, text
        }
    })
    redirect(`/${id}`);
}