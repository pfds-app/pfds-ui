import { Box, LinearProgress, SxProps } from "@mui/material";
import {
  Datagrid,
  List as RaList,
  ListProps as RaListProps,
  DatagridProps,
  useListContext,
} from "react-admin";
import { FC, ReactNode } from "react";

import { Pagination } from "./pagination";
import { ListEmpty } from "./list-empty";
import { usePalette } from "@/common/hooks";

export type ListProps = Partial<Omit<RaListProps, "empty">> & {
  datagridProps?: DatagridProps;
};

const DATAGRID_WRAPPER_SX: SxProps = {
  "p": 2,
  "borderRadius": "8px",
  "& .RaDatagrid-headerRow": {
    "bgcolor": `white !important`,
    "& *": {
      position: "static !important",
    },
  },
  "& *": {
    boxShadow: "none !important",
  },
  "maxHeight": "300px !important",
  "overflowY": "scroll",
  "& .RaDatagrid-headerCell": {
    position: "static",
    borderRadius: "0px !important",
    transform: "translateY(0) !important",
    color: "#6e6b6b",
    bgcolor: `transparent !important`,
    fontWeight: "bold",
    py: 1,
  },
  "& th, & td": {
    border: "1px solid #d4d2d2 !important",
  },
};

const alternateDatagridRowSx: DatagridProps["rowSx"] = (_record, index) => {
  return {
    "bgcolor": index % 2 === 0 ? "#f3f3f3" : "white",
    "&:hover": {
      bgcolor: index % 2 === 0 ? "#f3f3f3 !important" : "white !important",
    },
  };
};

export const List: FC<ListProps & { listChildren?: ReactNode }> = ({
  children,
  datagridProps,
  listChildren,
  sx = {},
  ...raListProps
}) => {
  const { bgcolor } = usePalette();

  return (
    <RaList
      actions={false}
      empty={false}
      sx={{
        "& .RaList-actions": {
          p: 1,
          my: 1,
          borderRadius: "8px",
        },
        "& *": {
          boxShadow: "none !important",
        },
        ...sx,
      }}
      pagination={<Pagination />}
      {...raListProps}
    >
      {listChildren}
      <ListLoader />
      <Box sx={{ bgcolor, ...DATAGRID_WRAPPER_SX }}>
        <Datagrid
          rowClick={false}
          bulkActionButtons={false}
          empty={<ListEmpty />}
          rowSx={alternateDatagridRowSx}
          {...datagridProps}
        >
          {children}
        </Datagrid>
      </Box>
    </RaList>
  );
};

const ListLoader = () => {
  const { isLoading } = useListContext();
  return isLoading ? <LinearProgress color="primary" /> : null;
};
