import { TextInput } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Region } from "@/gen/jfds-api-client";
import { FC } from "react";

export const RegionEdit: FC<{ region: Region }> = ({ region }) => {
  return (
    <Edit id={region.id} resource="region" transform={updateTranform}>
      <TextInput source="code" />
      <TextInput source="name" />
    </Edit>
  );
};
