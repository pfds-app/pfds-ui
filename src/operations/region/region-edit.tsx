import { required, TextInput } from "react-admin";
import { FC } from "react";

import { Region } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";

export const RegionEdit: FC<{ region: Region }> = ({ region }) => {
  return (
    <Edit id={region.id} resource="region" transform={updateTranform}>
      <TextInput validate={required()} source="code" />
      <TextInput validate={required()} source="name" />
    </Edit>
  );
};
