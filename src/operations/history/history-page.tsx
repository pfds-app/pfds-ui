import {
  BoxPaperTitled,
  FlexBox,
  WithLayoutPadding,
} from "@/common/components";
import { Avatar } from "@mui/material";
import { DateField, FunctionField, TextField, useTranslate } from "react-admin";
import { List } from "@/common/components/list";
import { User, UserRoleEnum } from "@/gen/jfds-api-client";
import { createImageUrl } from "@/providers";

export const HistoryPage = () => {
  const translate = useTranslate();
  return (
    <WithLayoutPadding sx={{ pt: 5 }}>
      <FlexBox sx={{ width: "100%", alignItems: "stretch", gap: 2, mb: 2 }}>
        <BoxPaperTitled title={translate("custom.enum.user_role.ADMIN")}>
          <List resource="deleted-role" filter={{ role: UserRoleEnum.Admin }}>
            <FunctionField
              label=" "
              render={(user: User) => (
                <Avatar
                  src={createImageUrl(user.photo ?? "")}
                  sx={{ width: "35px", height: "35px" }}
                />
              )}
            />
            <TextField
              sortable={false}
              label={translate("resources.user.fields.lastName")}
              source="user.lastName"
            />
            <TextField
              sortable={false}
              label={translate("resources.user.fields.firstName")}
              source="user.firstName"
            />
            <DateField
              sortable={false}
              label={"Date de suppression"}
              source="createdAt"
            />
          </List>
        </BoxPaperTitled>
        <BoxPaperTitled
          title={translate("custom.enum.user_role.REGION_MANAGER")}
        >
          <List
            resource="deleted-role"
            filter={{ role: UserRoleEnum.RegionManager }}
          >
            k
            <FunctionField
              label=" "
              render={(user: User) => (
                <Avatar
                  src={createImageUrl(user.photo ?? "")}
                  sx={{ width: "35px", height: "35px" }}
                />
              )}
            />
            <TextField
              sortable={false}
              label={translate("resources.user.fields.lastName")}
              source="user.lastName"
            />
            <TextField
              sortable={false}
              label={translate("resources.user.fields.firstName")}
              source="user.firstName"
            />
            <DateField
              sortable={false}
              label={"Date de suppression"}
              source="createdAt"
            />
          </List>
        </BoxPaperTitled>
      </FlexBox>
      <FlexBox sx={{ width: "100%", alignItems: "stretch", gap: 2, mb: 2 }}>
        <BoxPaperTitled
          title={translate("custom.enum.user_role.ASSOCIATION_MANAGER")}
        >
          <List
            resource="deleted-role"
            filter={{ role: UserRoleEnum.AssociationManager }}
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
            <TextField
              sortable={false}
              label={translate("resources.user.fields.lastName")}
              source="user.lastName"
            />
            <TextField
              sortable={false}
              label={translate("resources.user.fields.firstName")}
              source="user.firstName"
            />
            <DateField
              sortable={false}
              label={"Date de suppression"}
              source="createdAt"
            />
          </List>
        </BoxPaperTitled>
        <BoxPaperTitled
          title={translate("custom.enum.user_role.COMMITTEE_MANAGER")}
        >
          <List
            resource="deleted-role"
            filter={{ role: UserRoleEnum.CommitteeManager }}
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
            <TextField
              sortable={false}
              label={translate("resources.user.fields.lastName")}
              source="user.lastName"
            />
            <TextField
              sortable={false}
              label={translate("resources.user.fields.firstName")}
              source="user.firstName"
            />
            <DateField
              sortable={false}
              label={"Date de suppression"}
              source="createdAt"
            />
          </List>
        </BoxPaperTitled>
      </FlexBox>
    </WithLayoutPadding>
  );
};
