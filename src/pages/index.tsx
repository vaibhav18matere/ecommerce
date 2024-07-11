import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>E Commerce App</title>
        <meta name="description" content="simple e-commerce web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between">
        <div>
          <Link href={"/admin"}>Admin Dashboard</Link>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">Signup</Button>
          <Button variant="outline">Login</Button>
        </div>
      </header>
      <div>products list will go here</div>
    </>
  );
}
