import { Tab } from "@mui/material";
import { useTranslate } from "react-admin";

import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { OperationList, OperationCreate } from "../operation";
import { TicketCreate, TicketList } from "../ticket";
import { PayedTicketPage } from "../payed-ticket";
import { TicketStatusList } from "../ticket-status";
import { DistributionPage } from "../disbution";
import { OperationResultPage } from "../operation-result";
import { useTabManager } from "@/common/hooks";

const FITADIAVAM_BOLA_TABS = [
  "opérations",
  "tickets",
  "marquages",
  "situation",
  "distribution",
  "result",
];

export const FitadiavamBolaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: FITADIAVAM_BOLA_TABS,
  });
  const translate = useTranslate();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label={translate("resources.operation.name")} />
        <Tab label={translate("resources.ticket.name")} />
        <Tab label="Marquage" />
        <Tab label="Situation" />
        <Tab label="Distribution" />
        <Tab label={translate("resources.operation-result.name")} />
      </Tabs>
      <WithLayoutPadding sx={{ mt: 3 }}>
        <TabPanel index={0} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <OperationCreate />
            <OperationList />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={1} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <TicketCreate />
            <TicketList />
          </ListAndCreateLayout>
        </TabPanel>
        <TabPanel index={2} currentIndex={tabIndex}>
          <PayedTicketPage />
        </TabPanel>
        <TabPanel index={3} currentIndex={tabIndex}>
          <TicketStatusList />
        </TabPanel>
        <TabPanel index={4} currentIndex={tabIndex}>
          <DistributionPage />
        </TabPanel>
        <TabPanel index={5} currentIndex={tabIndex}>
          <OperationResultPage />
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
