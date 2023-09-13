import Html from "@kitajs/html";
import { Layout } from "./layout";

export function Index(userName: string) {
  return (
    <Layout>
      <h1>Hello, {userName}!</h1>
      <p>This is a protected route only authorized users can see.</p>
    </Layout>
  );
}
