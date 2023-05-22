import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import {
  BackendAdminDashBoard,
  DirectorDashBoard,
  FrontEndAdminDashBoard,
  GroupAdminDashBoard,
  MemberDashBoard,
  PartnerDashBoard,
} from "./index";

import { LoadingPage } from "../";

function DashBoard() {
  const user = useContext(AuthContext);
  const role = user.user.role;
  const DashContent = user ? chooseRole(role) : null;

  return DashContent;
}

export default DashBoard;

function chooseRole(role) {
  switch (role) {
    case "634170def5cb04c6b85f3fe2":
      return <BackendAdminDashBoard />;

    case "63417145f5cb04c6b85f3fec":
      return <DirectorDashBoard />;
    case "63417107f5cb04c6b85f3fe6":
      return <FrontEndAdminDashBoard />;
    case "634170ebf5cb04c6b85f3fe4":
      return <GroupAdminDashBoard />;
    case "634176bdcdbe630c91c56c59":
      return <MemberDashBoard />;
    case "63417151f5cb04c6b85f3fee":
      return <PartnerDashBoard />;
    default:
      return <LoadingPage />;
  }
}
