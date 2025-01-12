import { TextInput, required, useTranslate } from "react-admin";

import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const RegionCreate = () => {
  const translate = useTranslate();

  return (
    <BoxPaperTitled
      title={translate("resources.region.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="region">
        <TextInput validate={required()} source="code" />
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
