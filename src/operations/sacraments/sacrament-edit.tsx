import { TextInput } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Sacrament } from "@/gen/jfds-api-client";
import { FC } from "react";

export const SacramentEdit: FC<{ sacrament: Sacrament }> = ({ sacrament }) => {
  return (
    <Edit id={sacrament.id} resource="sacraments" transform={updateTranform}>
      <TextInput source="name" label="Libellé" />
    </Edit>
  );
};
