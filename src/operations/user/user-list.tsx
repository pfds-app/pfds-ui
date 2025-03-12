import {
  FunctionField,
  ShowButton,
  TextField,
  useTranslate,
} from "react-admin";
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
import { createImageUrl, DeleteUserActionType } from "@/providers";
import { useRole } from "@/security/hooks";
import { ShowIfRole } from "@/security/components";

export const UserList: FC<{ role: UserRoleEnum }> = ({ role }) => {
  return (
    <DialogContextProvider popover={false}>
      <UserListContent role={role} />
    </DialogContextProvider>
  );
};

export const UserListContent: FC<{ role: UserRoleEnum }> = ({ role }) => {
  const connectedRole = useRole();
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
        resource="user"
        filter={{ role }}
        datagridProps={{ rowClick: "show" }}
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
          render={(user: User) => {
            if (connectedRole === UserRoleEnum.SimpleUser) {
              return <ShowButton />;
            }

            if (
              user.role === connectedRole &&
              connectedRole !== UserRoleEnum.Admin
            ) {
              return <ShowButton />;
            }

            if (
              user.role === UserRoleEnum.Admin &&
              connectedRole !== UserRoleEnum.Admin
            ) {
              return <ShowButton />;
            }

            return (
              <>
                <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                  <ShowIfRole
                    roles={[UserRoleEnum.Admin, UserRoleEnum.RegionManager]}
                  >
                    <EditButton
                      onClick={(event) => {
                        event.stopPropagation();
                        doEdit(user);
                      }}
                    />
                  </ShowIfRole>
                  <DeleteButton
                    meta={{
                      actionType: (() => {
                        if (role !== UserRoleEnum.SimpleUser) {
                          return DeleteUserActionType.ROLE;
                        }
                        switch (connectedRole) {
                          case UserRoleEnum.Admin:
                            return DeleteUserActionType.PERMANENT;
                          case UserRoleEnum.RegionManager:
                            return DeleteUserActionType.PERMANENT;
                          case UserRoleEnum.AssociationManager:
                            return DeleteUserActionType.FROM_ASSOCIATION;
                          case UserRoleEnum.CommitteeManager:
                            return DeleteUserActionType.FROM_COMMITEE;
                          default:
                            throw new Error("Invalid props");
                        }
                      })(),
                    }}
                    previousData={user}
                    resource="user"
                    id={user.id}
                  />
                </FlexBox>
              </>
            );
          }}
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
