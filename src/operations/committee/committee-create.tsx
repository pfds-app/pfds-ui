import { TextInput, required, useTranslate } from "react-admin";

import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const CommitteeCreate = () => {
  const translate = useTranslate();

  return (
    <BoxPaperTitled
      title={translate("resources.committee.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="committee">
        <TextInput validate={required()} source="code" />
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
