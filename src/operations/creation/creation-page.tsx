import { Tab } from "@mui/material";
import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { SacramentList, SacramentCreate } from "../sacrament";
import { RegionCreate, RegionList } from "../region";
import { AssociationCreate, AssociationList } from "../association";
import { useTabManager } from "@/common/hooks";

const CREATION_TABS = ["sacraments", "regions", "associations"];

export const CreationPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: CREATION_TABS,
  });

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label="Sakramenta" />
        <Tab label="Faritra" />
        <Tab label="Fikambanana Masina" />
      </Tabs>
      <WithLayoutPadding sx={{ mt: 3 }}>
        <TabPanel index={0} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <SacramentCreate />
            <SacramentList />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={1} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <RegionCreate />
            <RegionList />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={2} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <AssociationCreate />
            <AssociationList />
          </ListAndCreateLayout>
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
