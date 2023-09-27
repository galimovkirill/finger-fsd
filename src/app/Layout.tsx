import { AppHeader } from "@/widgets";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="layout">
      <AppHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
