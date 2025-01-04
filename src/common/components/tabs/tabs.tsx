import { FC, PropsWithChildren } from "react"
import { Tabs as MuiTabs } from "@mui/material"

export type TabsProps = PropsWithChildren<{
  tabIndex: number;
  handleChange: (index: number) => void;
}>

export const Tabs: FC<TabsProps> = ({ children, handleChange, tabIndex }) => {
  return (
    <MuiTabs
      value={tabIndex}
      onChange={(_e, newTabIndex) => handleChange(newTabIndex)}
    >
      {children}
    </MuiTabs>
  )
}
