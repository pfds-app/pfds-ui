import { Box, CircularProgress } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  SaveButton,
  SimpleForm,
  TextInput,
  maxValue,
  minValue,
  number,
  required,
  useGetList,
  useLocale,
  useTranslate,
} from "react-admin";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { FC, useMemo, useState } from "react";
import dayjs from "dayjs";

import { GetLedgerStatsTypeEnum, LedgerStat } from "@/gen/jfds-api-client";
import { FlexBox, WithLayoutPadding } from "@/common/components";
import { SupportedLanguage } from "@/providers/i18n";
import { MONTHS } from "../ledger";
import { stringifyObj } from "@/common/utils/stringify-obj";

type Filters = {
  year: number;
  type: GetLedgerStatsTypeEnum;
};
export const LedgerStatUI = () => {
  const [filters, setFitlers] = useState<Filters>({
    year: dayjs().year(),
    type: GetLedgerStatsTypeEnum.Acculumated,
  });
  const translate = useTranslate();

  const updateFilters = ({ year }: { year: string }) => {
    setFitlers({
      year: +year,
      type: GetLedgerStatsTypeEnum.Acculumated,
    });
  };

  return (
    <WithLayoutPadding sx={{ bgcolor: "white" }}>
      <SimpleForm
        disableInvalidFormNotification
        onSubmit={(data: any) => updateFilters(data)}
        defaultValues={filters}
        toolbar={false}
      >
        <FlexBox
          sx={{
            width: "100%",
            margin: "10px 0px",
            alignItems: "center",
            justifyContent: "end",
            gap: 1,
          }}
        >
          <TextInput
            fullWidth={false}
            source="year"
            label={translate("custom.common.year")}
            validate={[required(), number(), minValue(2000), maxValue(4000)]}
          />
          <Box>
            <SaveButton
              icon={<Search />}
              sx={{ mb: 3, py: "11px" }}
              label="ra.action.search"
            />
          </Box>
        </FlexBox>
      </SimpleForm>
      <Box sx={{ width: "100%", mt: 2 }}>
        <StatsContent {...filters} />
      </Box>
    </WithLayoutPadding>
  );
};

const StatsContent: FC<Filters> = ({ year, type }) => {
  const { data: stats = [], isLoading } = useGetList<
    LedgerStat & { id: string }
  >("ledger-stat", {
    filter: {
      year: year ?? 2025,
      type: type ?? GetLedgerStatsTypeEnum.Acculumated,
    },
  });

  const translate = useTranslate();
  const locale = useLocale();

  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: translate("custom.common.month"),
          },
        },
        y: {
          title: {
            display: true,
            text: translate("custom.common.count"),
          },
          ticks: {
            stepSize: 10_000,
          },
        },
      },
    }),
    [translate]
  );

  const labels = useMemo(() => {
    return MONTHS[locale as SupportedLanguage].map((month) => month.name);
  }, [locale]);

  const data = useMemo(() => {
    return MONTHS[locale as SupportedLanguage].map((month) => {
      const monthValue = stats.find((stat) => +stat.month === month.id);
      return +(monthValue?.count ?? "0");
    });
  }, [locale, isLoading, stringifyObj(stats)]);

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Total",
        data,
        borderColor: "yellow",
        backgroundColor: "rgba(224, 209, 67, 0.2)",
        fill: true,
      },
    ],
  };

  if (isLoading) {
    <FlexBox sx={{ width: "100%" }}>
      <CircularProgress />
    </FlexBox>;
  }

  return (
    <Box sx={{ width: "100%", mx: "auto", maxWidth: "800px" }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};
