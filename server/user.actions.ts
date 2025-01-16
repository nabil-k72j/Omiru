"use server"

import { TUser, UserSchema } from "@/models/user.model";
import { db } from "@/prisma/client";


export async function createUser(data: TUser) {
    const validData = UserSchema.safeParse(data)

    if(!validData.success) {
        throw new Error("Invalid Data")
    }

    const user = validData.data

    await db.user.create({
        data: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            lastSingIn: user.lastSignIn,
            avatar: user.avatar
        }
    })
}