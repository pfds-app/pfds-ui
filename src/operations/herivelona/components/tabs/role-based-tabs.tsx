import { UserRoleEnum } from "@/gen/jfds-api-client";
import { FC } from "react";
import { AdminTabs } from "./admin-tabs";
import { RegionManagerTabs } from "./region-manager-tabs";
import { DefaultTabs } from "./default-tabs";

export const RoleBasedTabs: FC<{
  handleTabChange: (tabIndex: number) => void;
  tabIndex: number;
  role: UserRoleEnum;
}> = ({ role, handleTabChange, tabIndex }) => {
  switch (role) {
    case UserRoleEnum.Admin:
      return (
        <AdminTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      );
    case UserRoleEnum.RegionManager:
      return (
        <RegionManagerTabs
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
        />
      );
    default:
      return (
        <DefaultTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      );
  }
};
