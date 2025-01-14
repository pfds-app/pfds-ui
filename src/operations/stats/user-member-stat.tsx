import { Box, CircularProgress } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  SaveButton,
  SelectInput,
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
import { FC, useMemo, useState } from "react";
import dayjs from "dayjs";

import { GetUserMembersStatsTypeEnum, UserStat } from "@/gen/jfds-api-client";
import { FlexBox, WithLayoutPadding } from "@/common/components";
import { higherOrEqualsThan } from "@/common/input-validator";
import { USER_STAT_TYPE_CHOICES } from "./utils/user-stat-type-choices";

type Filters = {
  fromDate: number;
  endDate: number;
  type: GetUserMembersStatsTypeEnum
};
export const UserMemberStat = () => {
  const [filters, setFitlers] = useState<Filters>({
    fromDate: dayjs().year() - 3,
    endDate: dayjs().year() + 3,
    type: GetUserMembersStatsTypeEnum.PerYear
  });
  const translate = useTranslate();

  const updateFilters = ({
    endDate,
    fromDate,
    type
  }: {
    fromDate: string;
    endDate: string;
    type: GetUserMembersStatsTypeEnum
  }) => {
    setFitlers({
      endDate: +endDate,
      fromDate: +fromDate,
      type
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
            width: "fit-content",
            alignItems: "center",
            justifyContent: "start",
            gap: 1,
          }}
        >
          <TextInput
            source="fromDate"
            label={translate("resources.user-stat.fields.fromDate")}
            validate={[required(), number(), minValue(2000), maxValue(4000)]}
          />
          <TextInput
            source="endDate"
            label={translate("resources.user-stat.fields.endDate")}
            validate={[
              required(),
              number(),
              minValue(2000),
              maxValue(4000),
              higherOrEqualsThan("fromDate", translate),
            ]}
          />
          <SelectInput
            translateChoice
            label="Type"
            source="type"
            sx={{ mb: 1 }}
            choices={USER_STAT_TYPE_CHOICES}
            validate={required()}
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

const StatsContent: FC<Filters> = ({ fromDate, endDate, type }) => {
  const { data: stats = [], isLoading } = useGetList<
    UserStat & { id: string }
  >("user-stat", {
    filter: {
      fromDate: `${fromDate}-01-01`,
      endDate: `${endDate}-12-31`,
      type
    },
  });
  const translate = useTranslate();

  const options: ChartOptions<"line"> = useMemo(() => ({
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
          stepSize: 5,
        },
        beginAtZero: true,
      },
    },
  }), [translate]);

  const chartData: ChartData<"line"> = {
    labels: stats.map((stat) => stat.year),
    datasets: [
      {
        label: "Total",
        data: stats.map((stat) => stat.totalCount),
        borderColor: "yellow",
        backgroundColor: "rgba(224, 209, 67, 0.2)",
        fill: true,
      },
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
