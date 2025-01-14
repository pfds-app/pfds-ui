import { Tab } from "@mui/material";
import { useTranslate } from "react-admin";

import { Tabs, TabPanel } from "@/common/components/tabs";
import { UserGenderStats } from "./user-gender-stats";
import { useTabManager } from "@/common/hooks";

const STATS_TABS = ["genders"];
export const StatsPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: STATS_TABS,
  });
  const translate = useTranslate();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("resources.user-gender-stats.name")} />
      </Tabs>
      <TabPanel currentIndex={tabIndex} index={0}>
        <UserGenderStats />
      </TabPanel>
    </>
  );
};
