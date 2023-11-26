import { RoutesUrls } from "@/shared/lib/router";
import { FC } from "react";
import { Link } from "react-router-dom";

const AppHeader: FC = () => {
  return (
    <header style={{ display: "flex", gap: "16px" }}>
      <Link to={RoutesUrls.root}>Home</Link>
    </header>
  );
};

export { AppHeader };
