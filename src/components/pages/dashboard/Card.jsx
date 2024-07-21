import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const Card = ({ icon, title, subTitle, increase, data, scheme }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "300px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box sx={{ height: "80px", width: "90px" }}>
          <ResponsivePie
            data={data}
            margin={{ top: 0, right: 80, bottom: 10, left: 80 }}
            innerRadius={0.5}
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
                    fill: theme.palette.text.primary,
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
                    fill: theme.palette.text.primary,
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
            colors={{ scheme: scheme }}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
        </Box>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {increase}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
