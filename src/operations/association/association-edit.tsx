import { required, TextInput } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Association } from "@/gen/jfds-api-client";
import { FC } from "react";

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
