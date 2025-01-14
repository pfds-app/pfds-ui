import {
  DateInput,
  RadioButtonGroupInput,
  TextInput,
  required,
} from "react-admin";
import { Box } from "@mui/material";
import { FC } from "react";

import { Activity } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { ACTIVITY_ROLE_CHOICES } from "./utils/activity_role_choies";
import { updateTranform } from "@/common/utils/transform";

export const ActivityEdit: FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <Edit id={activity.id} resource="activity" transform={updateTranform}>
      <Box sx={{ width: "100%", maxHeight: "300px", overflow: "auto" }}>
        <TextInput validate={required()} source="name" />
        <TextInput validate={required()} source="place" />
        <DateInput validate={required()} source="beginDate" />
        <DateInput validate={required()} source="endDate" />
        <TextInput multiline validate={required()} source="description" />
        <RadioButtonGroupInput
          translateChoice
          source="roleType"
          choices={ACTIVITY_ROLE_CHOICES}
          validate={required()}
        />
      </Box>
    </Edit>
  );
};
