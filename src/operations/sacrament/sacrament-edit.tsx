import { TextInput, required } from "react-admin";
import { FC } from "react";

import { Sacrament } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";

export const SacramentEdit: FC<{ sacrament: Sacrament }> = ({ sacrament }) => {
  return (
    <Edit id={sacrament.id} resource="sacrament" transform={updateTranform}>
      <TextInput validate={required()} source="name" />
    </Edit>
  );
};
