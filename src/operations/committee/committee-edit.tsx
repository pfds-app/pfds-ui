import { TextInput, required } from "react-admin";
import { FC } from "react";

import { Committee } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";

export const CommitteeEdit: FC<{ committee: Committee }> = ({ committee }) => {
  return (
    <Edit id={committee.id} resource="committee" transform={updateTranform}>
      <TextInput validate={required()} source="code" />
      <TextInput validate={required()} source="name" />
    </Edit>
  );
};
