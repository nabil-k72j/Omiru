import z from "zod"


export const UserSchema = z.object({
    clerkId: z.string(),
    userName: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    avatar: z.string().optional(),
    email: z.string().email(),
})

export type TUser = z.infer<typeof UserSchema>