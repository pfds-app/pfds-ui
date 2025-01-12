import { TextInput, required, useTranslate } from "react-admin";

import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const ResponsabilityCreate = () => {
  const translate = useTranslate();

  return (
    <BoxPaperTitled
      title={translate("resources.responsability.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="responsability">
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
