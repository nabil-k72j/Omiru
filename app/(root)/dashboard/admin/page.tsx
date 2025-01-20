import { checkRole } from "@/lib/roles";

export default async function AdminPage() {
  const userRole = await checkRole();

  return (
    <>
      <p>
        This is the protected admin dashboard restricted to users with the
        `admin` or `owner` roles.
      </p>
      <p>Current role is : {userRole}</p>
    </>
  );
}
