export {}

// Create a type for the roles
export type Roles = 'owner' | 'admin' | 'user'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}