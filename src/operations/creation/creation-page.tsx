import { Tab } from "@mui/material";

import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { SacramentList, SacramentCreate } from "../sacrament";
import { RegionCreate, RegionList } from "../region";
import { AssociationCreate, AssociationList } from "../association";
import { CommitteeCreate, CommitteeList } from "../committee";
import { EventCreate, EventList } from "../event";
import { ResponsabilityCreate, ResponsabilityList } from "../responsability";
import { useTabManager } from "@/common/hooks";
import { useTranslate } from "react-admin";

const CREATION_TABS = [
  "sacraments",
  "regions",
  "associations",
  "committees",
  "events",
  "responsabilities",
];

export const CreationPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: CREATION_TABS,
  });
  const translate = useTranslate();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("resources.sacrament.name")} />
        <Tab label={translate("resources.region.name")} />
        <Tab label={translate("resources.association.name")} />
        <Tab label={translate("resources.committee.name")} />
        <Tab label={translate("resources.event.name")} />
        <Tab label={translate("resources.responsability.name")} />
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
        <TabPanel index={5} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <ResponsabilityCreate />
            <ResponsabilityList />
          </ListAndCreateLayout>
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
