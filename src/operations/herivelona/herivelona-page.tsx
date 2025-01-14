import { Tab } from "@mui/material";
import { useTranslate } from "react-admin";

import { Tabs } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { UserCreate, UserList } from "../user";
import { UserRoleEnum } from "@/gen/jfds-api-client";
import { useTabManager } from "@/common/hooks";

const HERIVELONA_TABS = [
  "admin",
  "region-manager",
  "association-manager",
  "committee-manager",
  "simple-user",
];

export const HerivelonaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: HERIVELONA_TABS,
  });
  const translate = useTranslate();
  const getRole = (): UserRoleEnum => {
    switch (tabIndex) {
      case 0:
        return UserRoleEnum.Admin;
      case 1:
        return UserRoleEnum.RegionManager;
      case 2:
        return UserRoleEnum.AssociationManager;
      case 3:
        return UserRoleEnum.CommitteeManager;
      default:
        return UserRoleEnum.SimpleUser;
    }
  };
  const role = getRole();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("custom.enum.user_role.ADMIN")} />
        <Tab label={translate("custom.enum.user_role.REGION_MANAGER")} />
        <Tab label={translate("custom.enum.user_role.ASSOCIATION_MANAGER")} />
        <Tab label={translate("custom.enum.user_role.COMMITTEE_MANAGER")} />
        <Tab label={translate("custom.enum.user_role.SIMPLE_USER")} />
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
