import {
  DateInput,
  TextInput,
  RadioButtonGroupInput,
  useTranslate,
  required,
} from "react-admin";
import { Box } from "@mui/material";

import { Activity, UserRoleEnum } from "@/gen/jfds-api-client";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";
import { toISOString } from "@/common/utils/date";
import { useRole, useWhoami } from "@/security/hooks";
import { ACTIVITY_ROLE_CHOICES } from "./utils/activity_role_choies";

export const ActivityCreate = () => {
  const translate = useTranslate();
  const whoami = useWhoami();
  const role = useRole();

  const transform = (
    activity: Pick<
      Activity,
      "name" | "place" | "beginDate" | "endDate" | "description" | "roleType"
    >
  ): Activity => {
    return createTranform({
      ...activity,
      organisatorRole: whoami?.role,
      beginDate: toISOString(activity.beginDate),
      endDate: toISOString(activity.endDate ?? activity.beginDate),
    });
  };

  return (
    <BoxPaperTitled
      title={translate("resources.activity.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={transform} resource="activity">
        <Box sx={{ width: "100%", maxHeight: "300px", overflow: "auto" }}>
          <TextInput validate={required()} source="name" />
          <TextInput validate={required()} source="place" />
          <DateInput validate={required()} source="beginDate" />
          <DateInput validate={required()} source="endDate" />
          <TextInput multiline validate={required()} source="description" />
          <RadioButtonGroupInput
            translateChoice
            label=""
            source="roleType"
            choices={ACTIVITY_ROLE_CHOICES.filter((r) =>
              role === UserRoleEnum.Admin ? true : r.id !== "MANAGER"
            )}
            validate={required()}
          />
        </Box>
      </Create>
    </BoxPaperTitled>
  );
};
