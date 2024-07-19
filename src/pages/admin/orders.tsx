import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AdminLayout from "@/components/layouts/admin-layout";

const OrderDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full rounded-xl border bg-white p-4 text-left shadow hover:border-black">
          <div>Order: </div>
          <div>Order Status: Success</div>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order</DialogTitle>
          <DialogDescription>Order Status: Success</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4">
          <div>
            <div>Item Purchased</div>
          </div>
          <div>
            <div>Payment Status</div>
            <div>Success</div>
          </div>
          <div>
            <div>Order Status</div>
            Processing
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AdminOrders = () => {
  return (
    <AdminLayout>
      <div className="mt-28 flex flex-col space-y-4 p-10">
        <p>Loading orders...</p>
        <OrderDialog />
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
