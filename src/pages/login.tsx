import Html from "@kitajs/html";
import { Layout } from "./layout";

export function Login(errorMessage?: string) {
  return (
    <Layout>
      <h1>Login</h1>
      {errorMessage}
      <form action="/login" method="post">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}
