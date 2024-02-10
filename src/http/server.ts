import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "hellow get";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server on");
});
