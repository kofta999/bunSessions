import Html from "@kitajs/html";

export const Layout = Html.compile((p: Html.PropsWithChildren) => (
  <>
    {"<!doctype html>"}
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/picocss/1.5.10/pico.min.css"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <nav>
            <form action="/logout" method="post">
              <button type="submit">Logout</button>
            </form>
        </nav>
        {p.children}
      </body>
    </html>
  </>
));
