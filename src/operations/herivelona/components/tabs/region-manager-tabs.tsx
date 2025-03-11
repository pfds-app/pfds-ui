import { Tab } from "@mui/material";
import { Tabs } from "@/common/components/tabs";
import { useTranslate } from "react-admin";
import { FC } from "react";

export const RegionManagerTabs: FC<{
  handleTabChange: (tabIndex: number) => void;
  tabIndex: number;
}> = ({ handleTabChange, tabIndex }) => {
  const translate = useTranslate();

  return (
    <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
      <Tab label={translate("custom.enum.user_role.SIMPLE_USER")} />
      <Tab label={translate("custom.enum.user_role.REGION_MANAGER")} />
      <Tab label={translate("custom.enum.user_role.ASSOCIATION_MANAGER")} />
      <Tab label={translate("custom.enum.user_role.COMMITTEE_MANAGER")} />
    </Tabs>
  );
};
