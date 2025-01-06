import { DateInput, number, required, TextInput } from "react-admin";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";
import { Operation } from "@/gen/jfds-api-client";
import { toISOString } from "@/common/utils/date";

export const OperationCreate = () => {
  const transform = (
    record: Pick<
      Operation,
      | "name"
      | "numberOfTickets"
      | "ticketPrice"
      | "description"
      | "operationDate"
    >
  ): Operation => {
    return createTranform({
      ...record,
      numberOfTickets: +record.numberOfTickets,
      operationDate: toISOString(record.operationDate),
    });
  };

  return (
    <BoxPaperTitled
      title="Opération"
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={transform} resource="operation">
        <TextInput validate={required()} source="name" />
        <TextInput validate={[required(), number()]} source="numberOfTickets" />
        <TextInput validate={[required(), number()]} source="ticketPrice" />
        <TextInput multiline validate={required()} source="description" />
        <DateInput validate={required()} source="operationDate" />
      </Create>
    </BoxPaperTitled>
  );
};
