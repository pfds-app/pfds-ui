import { Tab } from "@mui/material";
import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { OperationList, OperationCreate } from "../operation";
import { TicketCreate, TicketList } from "../ticket";
import { useTabManager } from "@/common/hooks";
import { useTranslate } from "react-admin";

const FITADIAVAM_BOLA_TABS = ["opérations", "tickets"];

export const FitadiavamBolaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: FITADIAVAM_BOLA_TABS,
  });
  const translate = useTranslate();

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label="Opération" />
        <Tab label={translate("resources.ticket.name")} />
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
      </WithLayoutPadding>
    </>
  );
};
