import { required, TextInput } from "react-admin";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const SacramentCreate = () => {
  return (
    <BoxPaperTitled
      title="Sakramenta"
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="sacrament">
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
