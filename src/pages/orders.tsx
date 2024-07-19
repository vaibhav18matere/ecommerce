import MainLayout from "@/components/layouts/main-layout";
import React from "react";

const Orders = () => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-y-4 p-4 w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-full rounded-xl bg-white p-4 shadow-lg">
              <div>Order #{i + 1} : Order ID</div>
              <div>Order Status : Success</div>
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Orders;
