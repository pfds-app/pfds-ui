import { Box, Typography } from "@mui/material";
import {
  DateInput,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SelectInputProps,
  TextInput,
  required,
  useTranslate,
} from "react-admin";

import {
  Sacrament,
  UpdateUser,
  User,
  UserRoleEnum,
} from "@/gen/jfds-api-client";
import { Show } from "@/common/components/show";
import { Edit } from "@/common/components/edit";
import {
  QrCodeBox,
  FlexBox,
  WithLayoutPadding,
  DownloadQrCodeButton,
  PassPropsIfRole,
} from "@/common/components";
import { ProfilePictureShow } from "./components";
import { UserSaveOrUpdateActionType } from "@/providers";
import { usePalette } from "@/common/hooks";
import { useWhoami } from "@/security/hooks";
import { updateTranform } from "@/common/utils/transform";
import { USER_GENDER_CHOICES } from "./utils/gender-choices";
import { USER_ROLE_CHOICES } from "./utils/role-choices";

export const ProfileEditPage = () => {
  const { textSecondaryColor } = usePalette();
  const translate = useTranslate();
  const whoami = useWhoami();

  const transformUpdateUserInfos = ({
    photo,
    responsability,
    association,
    committee,
    region,
    sacrament,
    ...baseUser
  }: User & { sacrament: Sacrament }): UpdateUser & {
    sacramentId?: string;
  } => {
    return updateTranform({
      ...baseUser,
      responsabilityId: responsability?.id,
      associationId: association?.id,
      regionId: region?.id,
      committeeId: committee?.id,
      sacramentId: sacrament?.id,
    });
  };

  return (
    <WithLayoutPadding sx={{ p: 2 }}>
      <Box sx={{ width: "100%", px: 5, py: 2, bgcolor: "white" }}>
        <Edit
          id={whoami.id}
          resource="user"
          transform={transformUpdateUserInfos}
          simpleFormProps={{ toolbar: false }}
          mutationOptions={{
            meta: {
              actionType: UserSaveOrUpdateActionType.UPDATE_USER_INFOS,
            },
          }}
          sx={{
            "width": "100%",
            "& .RaEdit-card": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <FlexBox sx={{ gap: 2, width: "100%", alignItems: "start" }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  color: textSecondaryColor,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                {translate("custom.common.edit_profile")}
              </Typography>
              <Show
                sx={{ mb: 2, width: "100%", mx: "auto" }}
                resource="user"
                id={whoami?.id}
              >
                <FlexBox
                  sx={{
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 2,
                  }}
                >
                  <ProfilePictureShow />
                  <FlexBox
                    sx={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "end",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ width: "100%", maxWidth: "150px" }}>
                      <QrCodeBox user={whoami} />
                    </Box>
                    <DownloadQrCodeButton user={whoami} />
                  </FlexBox>
                </FlexBox>
              </Show>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth validate={required()} source="firstName" />
                <TextInput fullWidth validate={required()} source="lastName" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth validate={required()} source="username" />
                <TextInput fullWidth validate={required()} source="email" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth validate={required()} source="address" />
                <DateInput fullWidth validate={required()} source="birthDate" />
              </FlexBox>
            </Box>
            <Box sx={{ flex: 1 }}>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth source="nic" />
                <TextInput fullWidth source="apv" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <SelectInput
                  translateChoice
                  source="gender"
                  choices={USER_GENDER_CHOICES}
                  validate={required()}
                />
                <SelectInput
                  readOnly
                  fullWidth
                  source="role"
                  optionText="name"
                  validate={required()}
                  choices={USER_ROLE_CHOICES}
                />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <ReferenceInput reference="sacrament" source="sacrament.id">
                  <SelectInput
                    fullWidth
                    optionText="name"
                    label={translate("resources.sacrament.name", {
                      smart_count: 1,
                    })}
                  />
                </ReferenceInput>
                <ReferenceInput
                  reference="responsability"
                  source="responsability.id"
                >
                  <SelectInput
                    fullWidth
                    optionText="name"
                    label={translate("resources.responsability.name", {
                      smart_count: 1,
                    })}
                  />
                </ReferenceInput>
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <ReferenceInput reference="region" source="region.id">
                  <PassPropsIfRole<SelectInputProps>
                    readOnly
                    roles={[
                      UserRoleEnum.RegionManager,
                      UserRoleEnum.CommitteeManager,
                      UserRoleEnum.AssociationManager,
                      UserRoleEnum.SimpleUser,
                    ]}
                    render={(props) => (
                      <SelectInput
                        {...props}
                        fullWidth
                        optionText="name"
                        label={translate("resources.region.name", {
                          smart_count: 1,
                        })}
                      />
                    )}
                  />
                </ReferenceInput>
                <ReferenceInput reference="association" source="association.id">
                  <PassPropsIfRole<SelectInputProps>
                    readOnly
                    roles={[
                      UserRoleEnum.CommitteeManager,
                      UserRoleEnum.AssociationManager,
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
              </FlexBox>
              <ReferenceInput reference="committee" source="committee.id">
                <PassPropsIfRole<SelectInputProps>
                  readOnly
                  defaultValue={whoami.role}
                  roles={[
                    UserRoleEnum.CommitteeManager,
                    UserRoleEnum.AssociationManager,
                    UserRoleEnum.SimpleUser,
                  ]}
                  render={(props) => (
                    <SelectInput
                      {...props}
                      fullWidth
                      label={translate("resources.committee.name")}
                      optionText="name"
                    />
                  )}
                />
              </ReferenceInput>
              <SaveButton color="success" />
            </Box>
          </FlexBox>
        </Edit>
      </Box>
    </WithLayoutPadding>
  );
};
