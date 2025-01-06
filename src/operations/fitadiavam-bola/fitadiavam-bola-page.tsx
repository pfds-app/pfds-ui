import { Tab } from "@mui/material";
import { Tabs, TabPanel } from "@/common/components/tabs";
import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { OperationList, OperationCreate } from "../operation";
import { useTabManager } from "@/common/hooks";

const FITADIAVAM_BOLA_TABS = ["opérations"];

export const FitadiavamBolaPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    values: FITADIAVAM_BOLA_TABS,
  });

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label="Opération" />
      </Tabs>
      <WithLayoutPadding sx={{ mt: 3 }}>
        <TabPanel index={0} currentIndex={tabIndex}>
          <ListAndCreateLayout>
            <OperationCreate />
            <OperationList />
          </ListAndCreateLayout>
        </TabPanel>
      </WithLayoutPadding>
    </>
  );
};
