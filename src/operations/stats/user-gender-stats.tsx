import { Typography, Box, CircularProgress } from "@mui/material";
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
  useTranslate,
} from "react-admin";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { FC, useState } from "react";
import dayjs from "dayjs";

import { FlexBox, WithLayoutPadding } from "@/common/components";
import { UserGenderStat } from "@/gen/jfds-api-client";
import { usePalette } from "@/common/hooks";
import { higherOrEqualsThan } from "@/common/input-validator";

type Filters = {
  fromDate: number;
  endDate: number;
};
export const UserGenderStats = () => {
  const [filters, setFitlers] = useState<Filters>({
    fromDate: dayjs().year() - 3,
    endDate: dayjs().year() + 3,
  });
  const { textSecondaryColor } = usePalette();
  const translate = useTranslate();

  const updateFilters = ({
    endDate,
    fromDate,
  }: {
    fromDate: string;
    endDate: string;
  }) => {
    setFitlers({
      endDate: +endDate,
      fromDate: +fromDate,
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
        <Typography sx={{ my: 1, color: textSecondaryColor, fontSize: "1rem" }}>
          Filtre
        </Typography>
        <FlexBox
          sx={{
            width: "fit-content",
            alignItems: "start",
            justifyContent: "start",
            gap: 1,
          }}
        >
          <TextInput
            source="fromDate"
            label={translate("resources.user-gender-stats.fields.fromDate")}
            validate={[required(), number(), minValue(2000), maxValue(4000)]}
          />
          <TextInput
            source="endDate"
            label={translate("resources.user-gender-stats.fields.endDate")}
            validate={[
              required(),
              number(),
              minValue(2000),
              maxValue(4000),
              higherOrEqualsThan("fromDate", translate),
            ]}
          />
          <Box>
            <SaveButton
              icon={<Search />}
              sx={{ py: "11px" }}
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

const StatsContent: FC<Filters> = ({ fromDate, endDate }) => {
  const { data: stats = [], isLoading } = useGetList<
    UserGenderStat & { id: string }
  >("user-gender-stats", {
    filter: {
      fromDate: `${fromDate}-01-01`,
      endDate: `${endDate}-01-01`,
    },
  });
  const translate = useTranslate();

  if (isLoading) {
    <FlexBox sx={{ width: "100%" }}>
      <CircularProgress />
    </FlexBox>;
  }

  const chartData: ChartData<"line"> = {
    labels: stats.map((stat) => stat.year),
    datasets: [
      {
        label: translate("custom.enum.user_gender.MALE"),
        data: stats.map((stat) => stat.maleCount),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: true,
      },
      {
        label: translate("custom.enum.user_gender.FEMALE"),
        data: stats.map((stat) => stat.femaleCount),
        borderColor: "pink",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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
          text: translate("custom.common.year"),
        },
      },
      y: {
        title: {
          display: true,
          text: translate("custom.common.count"),
        },
        ticks: {
          stepSize: 1,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Box sx={{ width: "100%", mx: "auto", maxWidth: "800px" }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};
