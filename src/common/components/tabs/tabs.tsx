import { FC } from "react"
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material"

export type TabsProps = MuiTabsProps & {
  tabIndex: number;
  handleChange: (index: number) => void;
}

export const Tabs: FC<TabsProps> = ({ children, sx = {}, handleChange, tabIndex, ...muiTabsProps }) => {
  return (
    <MuiTabs
      value={tabIndex}
      onChange={(_e, newTabIndex) => handleChange(newTabIndex)}
      sx={{
        bgcolor: "#757474",
        "& .MuiTab-root": {
          color: "white",
          textTransform: "none",
          minWidth: '200px',
          border: "none !important",
          "&[aria-selected=true]": {
            bgcolor: "#4d4b4b !important",
            color: "white"
          }
        },
        "& .MuiTabs-indicator": {
          display: "none"
        },
        ...sx
      }}
      {...muiTabsProps}
    >
      {children}
    </MuiTabs>
  )
}
