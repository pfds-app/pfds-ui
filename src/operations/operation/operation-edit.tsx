import { DateInput, number, required, TextInput } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Operation } from "@/gen/jfds-api-client";
import { FC } from "react";
import { toISOString } from "@/common/utils/date";

export const OperationEdit: FC<{ operation: Operation }> = ({ operation }) => {
  const transform = (record: Operation): Operation => {
    return updateTranform({
      ...record,
      numberOfTickets: +record.numberOfTickets,
      operationDate: toISOString(record.operationDate),
    });
  };

  return (
    <Edit id={operation.id} resource="operation" transform={transform}>
      <TextInput validate={required()} source="name" />
      <TextInput validate={[required(), number()]} source="numberOfTickets" />
      <TextInput validate={[required(), number()]} source="ticketPrice" />
      <TextInput multiline validate={required()} source="description" />
      <DateInput validate={required()} source="operationDate" />
    </Edit>
  );
};
