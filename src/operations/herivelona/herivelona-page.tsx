import { Tab } from "@mui/material";
import { useTranslate } from "react-admin";

import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { UserCreate, UserList } from "../user";
import { UserRoleEnum } from "@/gen/jfds-api-client";
import { useTabManager } from "@/common/hooks";

const HERIVELONA_TABS = [
  "admin",
  "region-manager",
  "association-manager",
  "committee-manager",
  "simple-user"
];

export const HerivelonaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: HERIVELONA_TABS,
  });
  const translate = useTranslate();

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
        <TabPanel index={0} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <UserCreate role={UserRoleEnum.Admin} />
            <UserList role={UserRoleEnum.Admin} />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={1} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <UserCreate role={UserRoleEnum.RegionManager} />
            <UserList role={UserRoleEnum.RegionManager} />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={2} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <UserCreate role={UserRoleEnum.AssociationManager} />
            <UserList role={UserRoleEnum.AssociationManager} />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={3} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <UserCreate role={UserRoleEnum.CommitteeManager} />
            <UserList role={UserRoleEnum.CommitteeManager} />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={4} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <UserCreate role={UserRoleEnum.SimpleUser} />
            <UserList role={UserRoleEnum.SimpleUser} />
          </ListAndCreateLayout>
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
