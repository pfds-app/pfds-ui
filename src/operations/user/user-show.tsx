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
          <TextField source="username" />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <DateField source="birthDate" />
          <TranslatedEnumTextField
            source="role"
            enumLocalSuffix="custom.enum.user_role"
          />
        </SimpleShowLayout>
      </FlexBox>
      <FlexBox sx={{ width: "100%" }}>
        <Box sx={{ flex: 1 }}>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField source="address" />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TranslatedEnumTextField
                source="gender"
                enumLocalSuffix="custom.enum.user_gender"
              />
            </SimpleShowLayout>
          </FlexBox>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField
                label={translate("resources.responsability.name")}
                source="responsability.name"
              />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TextField
                label={translate("resources.region.name")}
                source="region.name"
              />
            </SimpleShowLayout>
          </FlexBox>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField source="nic" />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TextField source="apv" />
            </SimpleShowLayout>
          </FlexBox>
          <FlexBox sx={{ width: "100%" }}>
            <SimpleShowLayout>
              <TextField
                label={translate("resources.committee.name")}
                source="committee.name"
              />
            </SimpleShowLayout>
            <SimpleShowLayout>
              <TextField
                label={translate("resources.association.name")}
                source="association.name"
              />
            </SimpleShowLayout>
          </FlexBox>
        </Box>
      </FlexBox>
    </Show>
  );
};
