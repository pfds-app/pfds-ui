import {
  Button,
  maxValue,
  minValue,
  number,
  required,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  useLocale,
  useTranslate,
} from "react-admin";
import { Search } from "@mui/icons-material";

import {
  List,
  MoneyTextField,
  TranslatedEnumTextField,
} from "@/common/components/list";
import { BoxPaperTitled, FlexBox } from "@/common/components";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { SupportedLanguage } from "@/providers/i18n";

type Filters = {
  month: number;
  year: number;
};

const MONTHS = {
  en: [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ],
  fr: [
    { id: 1, name: "Janvier" },
    { id: 2, name: "Février" },
    { id: 3, name: "Mars" },
    { id: 4, name: "Avril" },
    { id: 5, name: "Mai" },
    { id: 6, name: "Juin" },
    { id: 7, name: "Juillet" },
    { id: 8, name: "Août" },
    { id: 9, name: "Septembre" },
    { id: 10, name: "Octobre" },
    { id: 11, name: "Novembre" },
    { id: 12, name: "Décembre" },
  ],
};

const getMonthChoices = (language: SupportedLanguage) => {
  return MONTHS[language] || MONTHS.en; // Default to English if language is not recognized
};

export const LedgerList = () => {
  const locale = useLocale();
  const translate = useTranslate();
  const [filters, setFilters] = useState<Filters>({
    month: dayjs().month() + 1,
    year: dayjs().year(),
  });

  const updateFilters = (values: Filters) => {
    setFilters({
      month: +values.month,
      year: +values.year,
    });
  };

  const monthChocies = useMemo(
    () => getMonthChoices(locale as SupportedLanguage),
    [locale]
  );

  return (
    <BoxPaperTitled sx={{ mt: 2 }} title="Journal">
      <SimpleForm onSubmit={(data: any) => updateFilters(data)} toolbar={false}>
        <FlexBox sx={{ width: "100%", gap: 4, justifyContent: "end" }}>
          <TextInput
            source="year"
            defaultValue={dayjs().year()}
            fullWidth={false}
            label={translate("custom.common.year")}
            validate={[required(), number(), minValue(2000), maxValue(4000)]}
          />
          <SelectInput
            defaultValue={dayjs().month() + 1}
            source="month"
            label={translate("custom.common.month")}
            fullWidth={false}
            translateChoice={false}
            choices={monthChocies}
            validate={required()}
            optionText={"name"}
            optionValue={"id"}
            size="small"
          />
          <Button
            type="submit"
            disabled={false}
            size="large"
            sx={{ mb: 2 }}
            color="success"
            startIcon={<Search />}
            variant="contained"
            label={translate("ra.action.search")}
          />
        </FlexBox>
      </SimpleForm>
      <List resource="ledger" filter={filters}>
        <TextField sortable={false} source="ledgerDate" />
        <TranslatedEnumTextField
          source="mouvementType"
          enumLocalSuffix="custom.enum.ledger_mouvement_type"
        />
        <MoneyTextField source="price" />
        <TextField sortable={false} source="name" />
      </List>
    </BoxPaperTitled>
  );
};
