import { FC } from "react";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useDelete, useNotify, useTranslate } from "react-admin";
import {
  TooltipIconButton,
  TooltipIconButtonProps,
} from "../tooltip-icon-button";

export type EditButtonProps = Partial<TooltipIconButtonProps>;

export const EditButton: FC<EditButtonProps> = (props) => {
  const translate = useTranslate();

  return (
    <TooltipIconButton
      size="small"
      color="primary"
      title={translate("ha.words.edit")}
      {...props}
    >
      <EditIcon fontSize="small" />
    </TooltipIconButton>
  );
};

export type DeleteButtonProps = Partial<TooltipIconButtonProps> & {
  id: string;
  resource: string;
};

export const DeleteButton: FC<DeleteButtonProps> = ({
  id,
  resource,
  ...tooltipProps
}) => {
  const notify = useNotify();
  const translate = useTranslate();
  const [deleteRecord, { isLoading }] = useDelete(
    resource,
    {
      id,
    },
    {
      onSuccess: () => notify("Element Supprimer !"),
      onError: () => notify("Une rrreur s'est produite ", { type: "error" }),
    }
  );

  return (
    <TooltipIconButton
      onClick={() => deleteRecord()}
      size="small"
      color="error"
      title={translate("ha.words.delete")}
      disabled={isLoading}
      {...tooltipProps}
    >
      <DeleteIcon fontSize="small" />
    </TooltipIconButton>
  );
};
