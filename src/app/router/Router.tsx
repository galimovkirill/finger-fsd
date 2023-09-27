import { SignInPage, SignUpPage } from "@/pages/auth";
import { Navigate, Route, Routes } from "react-router-dom";
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

      <Route path={RoutesUrls.root} element={<Layout />}>
        <Route
          path={RoutesUrls.auth}
          element={<Navigate to={RoutesUrls.signIn} />}
        />
        <Route path={RoutesUrls.signIn} element={<SignInPage />} />
        <Route path={RoutesUrls.signUp} element={<SignUpPage />} />
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