import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h2>Main Navigation will come here</h2>

      <Outlet />

      <h2>Footer will come here</h2>
    </>
  );
}

export default MainLayout;