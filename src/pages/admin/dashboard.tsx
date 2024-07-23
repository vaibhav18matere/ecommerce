"use-client";

import React, { useState } from "react";
import { MOCKDATA } from "@/lib/mockdata";
import ProductManageDialog from "@/components/product-manage-dialog";
import AdminLayout from "@/components/layouts/admin-layout";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const [isCreateProductDialogueOpen, setIsCreateProductDialogueOpen] =
    useState(false);
  const [selectedProductId, setSelectedProductId] = useState<
    number | undefined
  >(undefined);

  return (
    <>
      <AdminLayout>
        <ProductManageDialog
          productId={selectedProductId}
          isOpen={isCreateProductDialogueOpen}
          onClose={(open) => {
            if (!open) {
              setSelectedProductId(undefined);
            }
            setIsCreateProductDialogueOpen(open);
          }}
        />
        <div className="mt-28 p-10">
          <div className="my-6 flex w-full flex-row justify-end">
            <Button
              size={"lg"}
              onClick={() => {
                setIsCreateProductDialogueOpen(true);
              }}
            >
              Add New Product
            </Button>
          </div>
          {MOCKDATA.map((product) => (
            <button
              key={product.id}
              className="flex max-w-96 flex-col items-start gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-lg hover:cursor-pointer hover:border-black"
              onClick={() => {
                setSelectedProductId(product.id);
              }}
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
            </button>
          ))}
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
