import { required, TextInput } from "react-admin";
import { FC } from "react";

import { User } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";

export const SimpleUserEdit: FC<{ user: User }> = ({ user }) => {
  return (
    <Edit id={user.id} resource="user" transform={updateTranform}>
      <TextInput validate={required()} source="firstName" />
      <TextInput validate={required()} source="lastName" />
    </Edit>
  );
};
