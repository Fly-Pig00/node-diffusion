import Head from "next/head";
import { Editor } from "../components/Editor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Node Diffusion</title>
        <meta name="description" content="Organize latent space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <Editor />
      </main>
    </>
  );
}
