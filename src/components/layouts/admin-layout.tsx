import Link from "next/link";
import Header from "../ui/header";
import { buttonVariants } from "../ui/button";

const AdminLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-xl flex-col items-center justify-center bg-gray-50">
      <Header />
      <div className="flex h-full w-full flex-row">
        <div className="fixed top-28 flex h-full w-[15%] flex-col gap-4 border-r border-gray-400 bg-slate-400 p-4">
          <Link
            className={buttonVariants({
              variant: "default",
            })}
            href={"/admin/dashboard"}
          >
            Home
          </Link>
          <Link
            className={buttonVariants({
              variant: "default",
            })}
            href={"/admin/orders"}
          >
            All Orders
          </Link>
        </div>
        <div className="ml-[20%] h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
