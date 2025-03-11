import { BoxPaperTitled, PassPropsIfRole } from "@/common/components";
import { updateTranform } from "@/common/utils/transform";
import { User, UserRoleEnum } from "@/gen/jfds-api-client";
import {
  userProvider,
  UpdateUserPayload,
  UserSaveOrUpdateActionType,
} from "@/providers";
import { FC } from "react";
import { Box } from "@mui/material";
import {
  required,
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  useTranslate,
  SelectInputProps,
} from "react-admin";
import { formatUserName } from "@/common/utils/format-user-name";
import { Create } from "@/common/components/create";
import { ShowIfRole } from "@/security/components";
import { useWhoami } from "@/security/hooks";

export const UpdateUserRole: FC<{ role: UserRoleEnum }> = ({ role }) => {
  const translate = useTranslate();
  const whoami = useWhoami();

  const transform = async (
    fromForm: Pick<User, "id" | "region" | "association" | "committee">
  ): Promise<UpdateUserPayload> => {
    const data = await userProvider.getOne!({ id: fromForm.id! });
    const {
      responsability,
      association,
      region,
      committee,
      sacrament,
      ...createUser
    } = data;

    if (!createUser) {
      throw new Error("User not found");
    }

    return updateTranform({
      ...createUser,
      role,
      responsabilityId: responsability?.id,
      sacramentId: sacrament?.id,
      regionId:
        role === UserRoleEnum.RegionManager
          ? fromForm?.region?.id
          : region?.id!,
      committeeId:
        role === UserRoleEnum.CommitteeManager
          ? fromForm?.committee?.id
          : committee?.id,
      associationId:
        role === UserRoleEnum.AssociationManager
          ? fromForm?.association?.id
          : association?.id,
    });
  };

  return (
    <BoxPaperTitled
      title={translate(`custom.enum.user_role.${role}`)}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create
        resource="user"
        transform={transform}
        mutationOptions={{
          meta: {
            actionType: UserSaveOrUpdateActionType.UPDATE_ROLE,
          },
        }}
      >
        <Box sx={{ width: "100%", maxHeight: "300px", overflow: "auto" }}>
          <ReferenceInput page={1} perPage={10} source="id" reference="user">
            <AutocompleteInput
              label={translate("resources.user.name")}
              validate={required()}
              suggestionLimit={10}
              optionText={(user: User) => formatUserName(user)}
            />
          </ReferenceInput>
          <ShowIfRole role={role} roles={[UserRoleEnum.RegionManager]}>
            <ReferenceInput reference="region" source="region.id">
              <PassPropsIfRole<SelectInputProps>
                readOnly
                defaultValue={whoami.region?.id}
                roles={[
                  UserRoleEnum.RegionManager,
                  UserRoleEnum.AssociationManager,
                  UserRoleEnum.CommitteeManager,
                  UserRoleEnum.SimpleUser,
                ]}
                render={(props) => (
                  <SelectInput
                    {...props}
                    fullWidth
                    validate={required()}
                    optionText="name"
                    label={translate("resources.region.name")}
                  />
                )}
              />
            </ReferenceInput>
          </ShowIfRole>
          <ShowIfRole role={role} roles={[UserRoleEnum.AssociationManager]}>
            <ReferenceInput reference="association" source="association.id">
              <PassPropsIfRole<SelectInputProps>
                readOnly
                defaultValue={whoami.association?.id}
                roles={[
                  UserRoleEnum.AssociationManager,
                  UserRoleEnum.CommitteeManager,
                  UserRoleEnum.SimpleUser,
                ]}
                render={(props) => (
                  <SelectInput
                    {...props}
                    fullWidth
                    label={translate("resources.association.name")}
                    optionText="name"
                  />
                )}
              />
            </ReferenceInput>
          </ShowIfRole>
          <ShowIfRole role={role} roles={[UserRoleEnum.CommitteeManager]}>
            <ReferenceInput reference="committee" source="committee.id">
              <SelectInput
                fullWidth
                validate={required()}
                label={translate("resources.committee.name")}
                optionText="name"
              />
            </ReferenceInput>
          </ShowIfRole>
        </Box>
      </Create>
    </BoxPaperTitled>
  );
};
