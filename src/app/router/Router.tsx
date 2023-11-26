import { Route, Routes } from "react-router-dom";
import { RoutesUrls } from "@/shared/lib/router";
import React from "react";
import { Layout } from "@/app/Layout";
import { HomePage } from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesUrls.root} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route
        path="*"
        element={React.createElement(() => (
          <div>404 not found</div>
        ))}
      />
    </Routes>
  );
};

export { Router };
