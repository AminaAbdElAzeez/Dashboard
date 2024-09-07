import { ResponsiveLine } from "@nivo/line";

function Line() {
  const data = [
    {
      id: "junior",
      color: "hsl(207, 70%, 50%)",
      data: [
        { x: "USA", y: 60000 },
        { x: "Germany", y: 50000 },
        { x: "Canada", y: 55000 },
        { x: "UK", y: 45000 },
        { x: "Australia", y: 50000 },
        { x: "India", y: 15000 },
      ],
    },
    {
      id: "mid",
      color: "hsl(69, 70%, 50%)",
      data: [
        { x: "USA", y: 90000 },
        { x: "Germany", y: 80000 },
        { x: "Canada", y: 85000 },
        { x: "UK", y: 70000 },
        { x: "Australia", y: 75000 },
        { x: "India", y: 30000 },
      ],
    },
    {
      id: "senior",
      color: "hsl(47, 70%, 50%)",
      data: [
        { x: "USA", y: 120000 },
        { x: "Germany", y: 110000 },
        { x: "Canada", y: 115000 },
        { x: "UK", y: 100000 },
        { x: "Australia", y: 105000 },
        { x: "India", y: 50000 },
      ],
    },
  ];
  return (
    <div
      style={{
        overflowX: "auto",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "650px",
          margin: "0 auto",
        }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
            legend: "Country",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Salary (USD)",
            legendOffset: -65,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="yFormatted"
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
      </div>
    </div>
  );
}

export default Line;
