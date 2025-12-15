import { currentUser } from "@clerk/nextjs/server";
import Header from "./Header";

export default async function HeaderWrapper() {
  const user = await currentUser();
  console.log("Current User:", user);

  return <Header user={user} />;
}
