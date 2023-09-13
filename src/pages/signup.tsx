import Html from "@kitajs/html";
import { Layout } from "./layout";

export function SignUp(errorMessage?: string) {
  return (
    <Layout>
      <h1>Sign Up</h1>
      {errorMessage}
      <form action="/signup" method="post">
        <div class="grid">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">SignUp</button>
        </div>
      </form>
    </Layout>
  );
}
