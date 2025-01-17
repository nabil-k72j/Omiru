"use server";

import { getUserByClerkId } from "@/data/user.data";
import { TUser, UserSchema } from "@/models/user.model";
import { db } from "@/prisma/client";

export async function createUserSync(data: TUser) {
  const validData = UserSchema.safeParse(data);

  if (!validData.success) {
    throw new Error("Invalid Data");
  }

  const user = validData.data;

  await db.user.create({
    data: {
      clerkId: user.clerkId,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      avatar: user.avatar,
    },
  });
}

export async function updateUserSync(data: TUser) {
  const validData = UserSchema.safeParse(data);

  if (!validData.success) {
    throw new Error("Invalid Data");
  }

  const user = validData.data;

  const userExists = await getUserByClerkId(user.clerkId);

  if (userExists) {
    await db.user.update({
      where: {
        clerkId: user.clerkId,
      },
      data: {
        clerkId: user.clerkId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        avatar: user.avatar,
      },
    });
  } else {
    await createUserSync(user);
  }
}
