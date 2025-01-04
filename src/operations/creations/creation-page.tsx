import { Tab } from "@mui/material";
import { Tabs, TabPanel } from "@/common/components/tabs"
import { SacramentList } from "../sacraments";
import { useTabManager } from "@/common/hooks"

const CREATION_TABS = [
  "sacraments",
  "regions"
]
export const CreationPage = () => {
  const { tabIndex, handleTabChange } = useTabManager({ values: CREATION_TABS });

  return (
    <>
      <Tabs tabIndex={tabIndex} handleChange={handleTabChange}>
        <Tab label="Sakramenta" />
        <Tab label="Regions" />
      </Tabs>
      <TabPanel index={0} currentIndex={tabIndex}>
        <SacramentList />
      </TabPanel>
    </>
  )
}
