import { Tab } from "@mui/material";
import { useTranslate } from "react-admin";

import { Tabs } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { UserCreate, UserList } from "../user";
import { UserRoleEnum } from "@/gen/jfds-api-client";
import { useTabManager } from "@/common/hooks";

const HERIVELONA_TABS = [
  "simple-user",
  "admin",
  "region-manager",
  "association-manager",
  "committee-manager",
];

export const HerivelonaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: HERIVELONA_TABS,
  });
  const translate = useTranslate();
  const getRole = (): UserRoleEnum => {
    switch (tabIndex) {
      case 0:
        return UserRoleEnum.SimpleUser;
      case 1:
        return UserRoleEnum.Admin;
      case 2:
        return UserRoleEnum.RegionManager;
      case 3:
        return UserRoleEnum.AssociationManager;
      default:
        return UserRoleEnum.CommitteeManager;
    }
  };
  const role = getRole();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("custom.enum.user_role.SIMPLE_USER")} />
        <Tab label={translate("custom.enum.user_role.ADMIN")} />
        <Tab label={translate("custom.enum.user_role.REGION_MANAGER")} />
        <Tab label={translate("custom.enum.user_role.ASSOCIATION_MANAGER")} />
        <Tab label={translate("custom.enum.user_role.COMMITTEE_MANAGER")} />
      </Tabs>
      <WithLayoutPadding sx={{ mt: 3 }}>
        <ListAndCreateLayout>
          <UserCreate role={role} />
          <UserList role={role} />
        </ListAndCreateLayout>
      </WithLayoutPadding>
    </>
  );
};
