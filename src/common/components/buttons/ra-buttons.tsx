import { FC } from "react";
import {
  EditButtonProps,
  EditButton as RaEditButton,
  DeleteButton as RaDeleteButton,
  DeleteButtonProps,
} from "react-admin";

export const EditButton: FC<EditButtonProps> = (props) => {
  return <RaEditButton sx={{ px: 0 }} label="" {...props} />;
};

export const DeleteButton: FC<DeleteButtonProps> = (props) => {
  return <RaDeleteButton sx={{ px: 0 }} redirect={false} label="" {...props} />;
};
