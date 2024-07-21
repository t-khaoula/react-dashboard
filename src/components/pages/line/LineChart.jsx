import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(186, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 189,
      },
      {
        x: "helicopter",
        y: 94,
      },
      {
        x: "boat",
        y: 37,
      },
      {
        x: "train",
        y: 89,
      },
      {
        x: "subway",
        y: 280,
      },
      {
        x: "bus",
        y: 261,
      },
      {
        x: "car",
        y: 274,
      },
      {
        x: "moto",
        y: 87,
      },
      {
        x: "bicycle",
        y: 110,
      },
      {
        x: "horse",
        y: 128,
      },
      {
        x: "skateboard",
        y: 3,
      },
      {
        x: "others",
        y: 208,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(317, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 245,
      },
      {
        x: "helicopter",
        y: 115,
      },
      {
        x: "boat",
        y: 125,
      },
      {
        x: "train",
        y: 74,
      },
      {
        x: "subway",
        y: 94,
      },
      {
        x: "bus",
        y: 47,
      },
      {
        x: "car",
        y: 197,
      },
      {
        x: "moto",
        y: 33,
      },
      {
        x: "bicycle",
        y: 34,
      },
      {
        x: "horse",
        y: 200,
      },
      {
        x: "skateboard",
        y: 140,
      },
      {
        x: "others",
        y: 293,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(46, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 43,
      },
      {
        x: "helicopter",
        y: 191,
      },
      {
        x: "boat",
        y: 271,
      },
      {
        x: "train",
        y: 283,
      },
      {
        x: "subway",
        y: 42,
      },
      {
        x: "bus",
        y: 95,
      },
      {
        x: "car",
        y: 105,
      },
      {
        x: "moto",
        y: 74,
      },
      {
        x: "bicycle",
        y: 197,
      },
      {
        x: "horse",
        y: 70,
      },
      {
        x: "skateboard",
        y: 233,
      },
      {
        x: "others",
        y: 81,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(39, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 56,
      },
      {
        x: "helicopter",
        y: 18,
      },
      {
        x: "boat",
        y: 297,
      },
      {
        x: "train",
        y: 58,
      },
      {
        x: "subway",
        y: 58,
      },
      {
        x: "bus",
        y: 230,
      },
      {
        x: "car",
        y: 123,
      },
      {
        x: "moto",
        y: 33,
      },
      {
        x: "bicycle",
        y: 158,
      },
      {
        x: "horse",
        y: 0,
      },
      {
        x: "skateboard",
        y: 13,
      },
      {
        x: "others",
        y: 6,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(79, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 213,
      },
      {
        x: "helicopter",
        y: 159,
      },
      {
        x: "boat",
        y: 280,
      },
      {
        x: "train",
        y: 286,
      },
      {
        x: "subway",
        y: 286,
      },
      {
        x: "bus",
        y: 248,
      },
      {
        x: "car",
        y: 199,
      },
      {
        x: "moto",
        y: 24,
      },
      {
        x: "bicycle",
        y: 130,
      },
      {
        x: "horse",
        y: 71,
      },
      {
        x: "skateboard",
        y: 179,
      },
      {
        x: "others",
        y: 70,
      },
    ],
  },
];

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
