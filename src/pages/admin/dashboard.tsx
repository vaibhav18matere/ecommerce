import AdminLayout from "@/components/layouts/admin-layout";
import React from "react";
import { MOCKDATA } from "@/lib/mockdata";
import Link from "next/link";
import ProductManageDialog from "@/components/product-manage-dialog";

const AdminDashboard = () => {
  return (
    <>
      <AdminLayout>
        <div className="mt-28 p-10">
          <div className="my-6 flex w-full flex-row justify-end">
            <ProductManageDialog />
          </div>
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
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
