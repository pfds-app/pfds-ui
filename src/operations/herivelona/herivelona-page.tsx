import { Tab } from "@mui/material";

import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { SimpleUserList, SimpleUserCreate } from "../simple-user";
import { useTabManager } from "@/common/hooks";
import { useTranslate } from "react-admin";

const HERIVELONA_TABS = ["simple-user"];

export const HerivelonaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: HERIVELONA_TABS,
  });
  const translate = useTranslate();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("custom.enum.user_role.SIMPLE_USER")} />
      </Tabs>
      <WithLayoutPadding sx={{ mt: 3 }}>
        <TabPanel index={0} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <SimpleUserCreate />
            <SimpleUserList />
          </ListAndCreateLayout>
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
