import React from "react";
import { useRouter } from "next/router";
import { MOCKDATA } from "@/lib/mockdata";
import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const router = useRouter();
  console.log(router.query.slug);

  const currentProduct = MOCKDATA.find((p) => p.slug === router.query.slug);

  return (
    <>
      <MainLayout>
        <div>
          <img
            className="h-full w-96 overflow-hidden"
            src={currentProduct?.imageURL}
            alt={currentProduct?.name}
          />
        </div>
        <div>{currentProduct?.name}</div>
        <div>{currentProduct?.description}</div>
        <div>Available Quantitys : {currentProduct?.quantityAvailable}</div>
        <Button>Buy Now</Button>
      </MainLayout>
    </>
  );
};

export default ProductPage;
