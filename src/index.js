import { fastify } from "fastify";
// import the support for static html
import fastifyStatic from "fastify-static";
// we doing below becuase we don't have domain yet
import path from "path";
import { fileURLToPath } from "url";
// ESM soecific feature
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify();

async function startApp() {
  try {
    // get the html
    app.register(fastifyStatic, {
      root: path.join(__dirname, "../public"),
    });
    // testing the return but not goint to use👇🏻
    // app.get("/", {}, (request, reply) => {
    //   reply.send({
    //     data: "hello Worldz",
    //   });
    // });
    // listen to the port
    await app.listen(3002);
  } catch (e) {
    console.error(e);
  }
}

startApp();
