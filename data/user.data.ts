import { db } from "@/prisma/client";

export async function getUserById(id: string) {
    const user = await db.user.findUnique({
        where: {
            id
        }
    })

    return user
}


export async function getUserByClerkId(clerkId: string) {
    const user = await db.user.findUnique({
        where: {
            clerkId
        }
    })

    return user
}


export async function getUserByEmail(email: string) {
    const user = await db.user.findUnique({
        where: {
            email
        }
    })

    return user
}