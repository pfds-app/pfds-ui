import { BoxPaperTitled, WithLayoutPadding } from "@/common/components";
import { FunctionField, TextField, useTranslate } from "react-admin";
import { List } from "@/common/components/list";
import { OperationResult } from "@/gen/jfds-api-client";
import { renderMoneyWithUnit } from "@/common/utils/money";
import { MoneyTextField } from "@/common/components/list/money-text-field";

export const OperationResultPage = () => {
  const translate = useTranslate();

  return (
    <WithLayoutPadding>
      <BoxPaperTitled title={translate("resources.operation-result.name")}>
        <List resource="operation-result">
          <TextField
            label={translate("resources.operation.name")}
            source="operation.name"
          />
          <FunctionField
            label={translate("resources.operation.fields.ticketPrice")}
            sortable={false}
            render={(operationResult: OperationResult) =>
              renderMoneyWithUnit(operationResult.operation.ticketPrice)
            }
          />
          <TextField source="numberOfDistributed" />
          <MoneyTextField source="sumOfDistributed" />
        </List>
      </BoxPaperTitled>
    </WithLayoutPadding>
  );
};
