import { FC } from "react";
import { Box, SxProps } from "@mui/material";
import {
  Datagrid,
  List as RaList,
  ListProps as RaListProps,
  DatagridProps,
} from "react-admin";
import { Pagination } from "./pagination";
import { usePalette } from "@/common/hooks";

export type ListProps = Partial<RaListProps> & {
  datagridProps?: DatagridProps;
};

const DATAGRID_WRAPPER_SX: SxProps = {
  "p": 2,
  "borderRadius": "8px",
  "& *": {
    boxShadow: "none !important",
  },
  "maxHeight": "250px !important",
  "overflowY": "scroll",
};

export const List: FC<ListProps> = ({
  children,
  datagridProps,
  sx = {},
  ...raListProps
}) => {
  const { bgcolor, palette } = usePalette();

  return (
    <RaList
      sx={{
        "& .RaList-actions": {
          p: 1,
          my: 1,
          borderRadius: "8px",
        },
        "& *": {
          boxShadow: "none",
        },
        ...sx,
      }}
      pagination={<Pagination />}
      {...raListProps}
    >
      <Box
        sx={{
          bgcolor,
          ...DATAGRID_WRAPPER_SX,
          "& th": {
            color: `${palette.primary.main} !important`,
            bgcolor: `${bgcolor} !important`,
            fontWeight: "bold",
            transform: "translateY(-20%)",
          },
        }}
      >
        <Datagrid bulkActionButtons={false} {...datagridProps}>
          {children}
        </Datagrid>
      </Box>
    </RaList>
  );
};
