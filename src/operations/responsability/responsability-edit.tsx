import { TextInput, required } from "react-admin";
import { FC } from "react";

import { Responsability } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";

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
