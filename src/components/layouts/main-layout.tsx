import Header from "../ui/header";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center bg-gray-50">
      <Header />
      <div className="mt-28 w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
