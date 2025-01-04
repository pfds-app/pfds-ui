import { required, TextInput } from "react-admin";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { addId } from "@/common/utils/transform";

export const SacramentCreate = () => {
  return (
    <BoxPaperTitled
      title="Sacramenta"
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={addId} resource="sacraments">
        <TextInput validate={required()} source="name" label="Libellé" />
      </Create>
    </BoxPaperTitled>
  );
};
