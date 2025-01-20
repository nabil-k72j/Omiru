import { auth } from '@clerk/nextjs/server'

export const checkRole = async () => {
  const { sessionClaims } = await auth()
  const role = sessionClaims?.metadata.role
  return role
}