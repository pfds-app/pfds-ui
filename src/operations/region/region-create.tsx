import { required, TextInput } from "react-admin";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const RegionCreate = () => {
  return (
    <BoxPaperTitled title="Faritra" sx={{ minWidth: "350px", width: "350px" }}>
      <Create transform={createTranform} resource="region">
        <TextInput validate={required()} source="code" />
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
