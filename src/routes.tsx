import { Routes as DomRoutes, Route } from "react-router-dom";
import Home from "@pages/home";
import Search from "@pages/search";

export default function Routes() {

  return (
    <DomRoutes>
      <Route
        path="search"
        element={<Search />}
      />
      <Route
        path="*"
        element={<Home />}
      />
    </DomRoutes>
  );
}
