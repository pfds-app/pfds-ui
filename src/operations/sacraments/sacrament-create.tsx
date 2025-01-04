import { required, TextInput } from "react-admin"
import { BoxPaperTitled } from "@/common/components"
import { Create } from "@/common/components/create"
import { add_id } from "@/common/utils/transform"

export const SacramentCreate = () => {
  return (
    <BoxPaperTitled title="Sacramenta" sx={{ minWidth: '350px', width: '350px' }}>
      <Create transform={add_id} resource="sacraments">
        <TextInput validate={required()} source="name" label="Libellé" />
      </Create>
    </BoxPaperTitled >
  )
}
