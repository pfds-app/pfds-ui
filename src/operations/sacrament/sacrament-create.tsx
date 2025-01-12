import { TextInput, required, useTranslate } from "react-admin";

import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const SacramentCreate = () => {
  const translate = useTranslate();

  return (
    <BoxPaperTitled
      title={translate("resources.sacrament.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="sacrament">
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
