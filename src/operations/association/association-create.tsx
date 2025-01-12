import { TextInput, required, useTranslate } from "react-admin";

import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const AssociationCreate = () => {
  const translate = useTranslate();

  return (
    <BoxPaperTitled
      title={translate("resources.association.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="association">
        <TextInput validate={required()} source="code" />
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
