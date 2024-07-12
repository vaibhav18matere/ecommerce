import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MOCKDATA } from "@/lib/mockdata";

export default function Home() {
  return (
    <>
      <Head>
        <title>E Commerce App</title>
        <meta name="description" content="simple e-commerce web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center">
        <header className="flex items-center justify-between w-full bg-slate-200 p-10">
          <div>
            <Link href={"/admin"}>Admin Dashboard</Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Signup</Button>
            <Button variant="outline">Login</Button>
          </div>
        </header>
      </div>
      <div className="flex flex-row flex-wrap gap-8 justify-center my-8">
        {MOCKDATA.map((product) => (
          <div
            key={product.id}
            className="flex max-w-96 flex-col items-start gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-lg"
          >
            <div>
              <img className="overflow-hidden w-96 h-full" src={product.imageURL} alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>Available Quantity : {product.quantityAvailable}</div>
          </div>
        ))}
      </div>
    </>
  );
}
