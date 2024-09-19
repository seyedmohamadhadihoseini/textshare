import prisma from "@/service/prisma";

export default async function DispalyText({ params }: { params: { id: string } }) {
    const id = params.id;
    const text = await prisma.text.findUnique({
        where: {
            id
        }
    });
    if (!text) {
        return <div>you are not any text here</div>
    }

    return <div>
        {text.text}
    </div>
}