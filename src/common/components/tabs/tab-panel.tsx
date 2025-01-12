import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export type TabPanelProps = BoxProps & {
  index: number;
  currentIndex: number;
};

export const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, currentIndex, index, ...boxProps } = props;

  return (
    <Box role="tabpanel" hidden={currentIndex !== index} {...boxProps}>
      {currentIndex === index && children}
    </Box>
  );
};
