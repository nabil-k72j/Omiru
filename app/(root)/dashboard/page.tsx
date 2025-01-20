import { checkRole } from "@/lib/roles";

export default async function DashboardPage() {
  const userRole = await checkRole();
  return <section>role is: {userRole}</section>;
}
