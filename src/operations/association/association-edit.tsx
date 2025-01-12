import { TextInput, required } from "react-admin";
import { FC } from "react";

import { Association } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";

export const AssociationEdit: FC<{ association: Association }> = ({
  association,
}) => {
  return (
    <Edit id={association.id} resource="association" transform={updateTranform}>
      <TextInput validate={required()} source="code" />
      <TextInput validate={required()} source="name" />
    </Edit>
  );
};
