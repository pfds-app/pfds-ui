import { FunctionField, TextField, useTranslate } from "react-admin";
import { Avatar } from "@mui/material";
import { FC, useState } from "react";

import { User, UserRoleEnum } from "@/gen/jfds-api-client";
import { List, TranslatedEnumTextField } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { UserEdit } from "./user-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { createImageUrl } from "@/providers";

export const UserList: FC<{ role: UserRoleEnum }> = ({ role }) => {
  return (
    <DialogContextProvider popover={false}>
      <UserListContent role={role} />
    </DialogContextProvider>
  );
};

export const UserListContent: FC<{ role: UserRoleEnum }> = ({ role }) => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const translate = useTranslate();

  const doEdit = (user: User) => {
    toggleStatus();
    setUserToEdit(user);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate(`custom.enum.user_role.${role}`)}`}
      containerSx={{ pt: 0 }}
    >
      <List
        datagridProps={{ rowClick: "show" }}
        resource="user"
        filter={{ role }}
      >
        <FunctionField
          label=" "
          render={(user: User) => (
            <Avatar
              src={createImageUrl(user.photo ?? "")}
              sx={{ width: "35px", height: "35px" }}
            />
          )}
        />
        <TextField sortable={false} source="lastName" />
        <TextField sortable={false} source="firstName" />
        <TranslatedEnumTextField
          source="role"
          enumLocalSuffix="custom.enum.user_role"
        />
        <FunctionField
          label="Actions"
          render={(user: User) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(user)} />
                <DeleteButton resource="user" id={user.id} />
              </FlexBox>
            </>
          )}
        />
      </List>
      <DialogContent
        fullWidth
        maxWidth="sm"
        open={status}
        onClose={toggleStatus}
      >
        {userToEdit && <UserEdit user={userToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
