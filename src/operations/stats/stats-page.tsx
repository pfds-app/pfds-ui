import { Tab } from "@mui/material";
import { useTranslate } from "react-admin";

import { Tabs, TabPanel } from "@/common/components/tabs";
import { UserMemberStat } from "./user-member-stat";
import { useTabManager } from "@/common/hooks";
import { LedgerStatUI } from "./ledger-stat";

const STATS_TABS = ["members", "budgets"];
export const StatsPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: STATS_TABS,
  });
  const translate = useTranslate();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("resources.user-stat.name")} />
        <Tab label={translate("custom.common.budget")} />
      </Tabs>
      <TabPanel currentIndex={tabIndex} index={0}>
        <UserMemberStat />
      </TabPanel>
      <TabPanel currentIndex={tabIndex} index={1}>
        <LedgerStatUI />
      </TabPanel>
    </>
  );
};
