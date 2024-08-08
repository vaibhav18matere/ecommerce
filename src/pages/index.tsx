import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { MOCKDATA } from "@/lib/mockdata";
import MainLayout from "@/components/layouts/main-layout";
import { AuthContext } from "@/context/auth-context";
import { api } from "@/utils/api";

export default function Home() {
  const { user } = useContext(AuthContext);
  console.log("checking user", user);

  // console.log("!!!...console from frontend....!");

  const callDemoApi = api.post.hello.useQuery({ text: "hello vaibhav!" });
  const callAnotherDemoApi = api.post.something.useQuery();

  console.log(callAnotherDemoApi);

  return (
    <>
      <Head>
        <title>E Commerce App</title>
        <meta name="description" content="simple e-commerce web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="my-8 flex flex-row flex-wrap justify-center gap-8">
          {MOCKDATA.map((product) => (
            <Link
              key={product.id}
              href={`/${product.slug}`}
              className="flex max-w-96 flex-col items-start gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-lg hover:cursor-pointer hover:border-black"
            >
              <div>
                <img
                  className="h-full w-96 overflow-hidden"
                  src={product.imageURL}
                  alt={product.name}
                />
              </div>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>Available Quantitys : {product.quantityAvailable}</div>
            </Link>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
