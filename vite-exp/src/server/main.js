import express from "express";
import ViteExpress from "vite-express";

const app = express();
ViteExpress.config({ mode: process.env.NODE_ENV || "development" });

app.get("/message", (_, res) => res.send("this is test of vite express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
