import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Confirm, useDelete, useNotify, useTranslate } from "react-admin";
import { FC } from "react";

import {
  TooltipIconButton,
  TooltipIconButtonProps,
} from "../tooltip-icon-button";
import { useToggle } from "@/common/hooks";

export type EditButtonProps = Partial<TooltipIconButtonProps>;

export const EditButton: FC<EditButtonProps> = (props) => {
  return (
    <TooltipIconButton
      size="small"
      color="primary"
      title={"ra.action.edit"}
      {...props}
    >
      <EditIcon fontSize="small" />
    </TooltipIconButton>
  );
};

export type DeleteButtonProps = Partial<TooltipIconButtonProps> & {
  id: string;
  resource: string;
  meta?: any;
  previousData?: any;
  title?: string;
};

export const DeleteButton: FC<DeleteButtonProps> = ({
  id,
  meta,
  title,
  previousData,
  resource,
  ...tooltipProps
}) => {
  const { value, toggleValue } = useToggle();
  const notify = useNotify();
  const translate = useTranslate();
  const [deleteRecord, { isLoading }] = useDelete(resource, {
    id,
  });
  return (
    <>
      <TooltipIconButton
        onClick={(event) => {
          event.stopPropagation();
          toggleValue();
        }}
        size="small"
        color="error"
        title={"ra.action.delete"}
        disabled={isLoading}
        {...tooltipProps}
      >
        <DeleteIcon fontSize="small" />
      </TooltipIconButton>
      <Confirm
        title={title ?? "custom.common.delete_item_title"}
        content=""
        isOpen={value}
        loading={isLoading}
        onConfirm={() =>
          deleteRecord(
            resource,
            { id, meta, previousData },
            {
              onSuccess: () =>
                notify(
                  translate("ra.notification.deleted", { smart_count: 1 })
                ),
              onError: () => notify("ra.page.error", { type: "error" }),
            }
          )
        }
        onClose={toggleValue}
      />
    </>
  );
};
