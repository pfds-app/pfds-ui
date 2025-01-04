import { Tab } from "@mui/material";
import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { SacramentList, SacramentCreate } from "../sacrament";
import { RegionCreate, RegionList } from "../region";
import { AssociationCreate, AssociationList } from "../association";
import { CommitteeCreate, CommitteeList } from "../committee";
import { useTabManager } from "@/common/hooks";
import { EventCreate, EventList } from "../event";

const CREATION_TABS = [
  "sacraments",
  "regions",
  "associations",
  "committees",
  "events",
];

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
        <Tab label="Vaomieran'asa" />
        <Tab label="Evènment spécial" />
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
        <TabPanel index={3} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <CommitteeCreate />
            <CommitteeList />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={4} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <EventCreate />
            <EventList />
          </ListAndCreateLayout>
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
