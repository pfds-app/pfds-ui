import { Avatar, Box, Typography } from "@mui/material";
import {
  DateField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
  useTranslate,
} from "react-admin";
import { useParams } from "react-router-dom";

import { TranslatedEnumTextField } from "@/common/components/list";
import { User } from "@/gen/jfds-api-client";
import { DownloadQrCodeButton, FlexBox, QrCodeBox } from "@/common/components";
import { createImageUrl } from "@/providers";

const Label = ({ label }: { label: string }) => {
  return (
    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
      {label}
    </Typography>
  );
};
export const UserShow = () => {
  const { id } = useParams();
  const translate = useTranslate();

  return (
    <Show
      sx={{ padding: 2, width: "100%" }}
      actions={false}
      resource="user"
      id={id}
    >
      <FlexBox>
        <SimpleShowLayout>
          <FunctionField
            label=" "
            render={(user: User) => (
              <FlexBox
                sx={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Avatar
                  src={createImageUrl(user.photo ?? "")}
                  sx={{ width: "170px", height: "170px" }}
                />
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
                    <QrCodeBox user={user} />
                  </Box>
                  <DownloadQrCodeButton user={user} />
                </FlexBox>
              </FlexBox>
            )}
          />
        </SimpleShowLayout>
        <SimpleShowLayout>
          <Typography sx={{ fontWeight: "bold", opacity: 0.85 }}>
            Informations
          </Typography>
          <TextField
            source="username"
            label={
              <Label label={translate("resources.user.fields.username")} />
            }
          />
          <TextField
            source="firstName"
            label={
              <Label label={translate("resources.user.fields.firstName")} />
            }
          />
          <TextField
            source="lastName"
            label={
              <Label label={translate("resources.user.fields.lastName")} />
            }
          />
          <DateField
            source="birthDate"
            label={
              <Label label={translate("resources.user.fields.birthDate")} />
            }
          />
          <TranslatedEnumTextField
            source="role"
            label={<Label label={translate("resources.user.fields.role")} />}
            enumLocalSuffix="custom.enum.user_role"
          />
          <TextField
            source="sacrament.name"
            label={<Label label={translate("resources.sacrament.name")} />}
          />
        </SimpleShowLayout>
      </FlexBox>
      <FlexBox sx={{ width: "100%" }}>
        <Box sx={{ flex: 1 }}>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField
                source="address"
                label={
                  <Label label={translate("resources.user.fields.address")} />
                }
              />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TranslatedEnumTextField
                source="gender"
                label={
                  <Label label={translate("resources.user.fields.gender")} />
                }
                enumLocalSuffix="custom.enum.user_gender"
              />
            </SimpleShowLayout>
          </FlexBox>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField
                label={
                  <Label label={translate("resources.responsability.name")} />
                }
                source="responsability.name"
              />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TextField
                label={<Label label={translate("resources.region.name")} />}
                source="region.name"
              />
            </SimpleShowLayout>
          </FlexBox>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField
                source="nic"
                label={<Label label={translate("resources.user.fields.nic")} />}
              />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TextField
                source="apv"
                label={<Label label={translate("resources.user.fields.apv")} />}
              />
            </SimpleShowLayout>
          </FlexBox>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField
                label={<Label label={translate("resources.committee.name")} />}
                source="committee.name"
              />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TextField
                label={
                  <Label label={translate("resources.association.name")} />
                }
                source="association.name"
              />
            </SimpleShowLayout>
          </FlexBox>
        </Box>
      </FlexBox>
    </Show>
  );
};
