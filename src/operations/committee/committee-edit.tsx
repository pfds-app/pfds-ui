import { TextInput } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Committee } from "@/gen/jfds-api-client";
import { FC } from "react";

export const CommitteeEdit: FC<{ committee: Committee }> = ({ committee }) => {
  return (
    <Edit id={committee.id} resource="committee" transform={updateTranform}>
      <TextInput source="code" />
      <TextInput source="name" />
    </Edit>
  );
};
