import { required, TextInput } from "react-admin";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";

export const ResponsabilityCreate = () => {
  return (
    <BoxPaperTitled
      title="Andraikitra"
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={createTranform} resource="responsability">
        <TextInput validate={required()} source="name" />
      </Create>
    </BoxPaperTitled>
  );
};
