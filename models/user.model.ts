import z from "zod"


export const UserSchema = z.object({
    userName: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    avatar: z.string().optional(),
    email: z.string().email(),
    lastSignIn: z.number().optional().nullable(),
})

export type TUser = z.infer<typeof UserSchema>