import { required, TextInput } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Responsability } from "@/gen/jfds-api-client";
import { FC } from "react";

export const ResponsabilityEdit: FC<{ responsability: Responsability }> = ({
  responsability,
}) => {
  return (
    <Edit
      id={responsability.id}
      resource="responsability"
      transform={updateTranform}
    >
      <TextInput validate={required()} source="name" />
    </Edit>
  );
};
