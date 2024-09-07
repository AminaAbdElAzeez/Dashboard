import { ResponsiveBar } from "@nivo/bar";

function Bar() {
  const data = [
    {
      country: "USA",
      junior: 60000,
      mid: 90000,
      senior: 120000,
    },
    {
      country: "Germany",
      junior: 50000,
      mid: 80000,
      senior: 110000,
    },
    {
      country: "Canada",
      junior: 55000,
      mid: 85000,
      senior: 115000,
    },
    {
      country: "UK",
      junior: 45000,
      mid: 70000,
      senior: 100000,
    },
    {
      country: "Australia",
      junior: 50000,
      mid: 75000,
      senior: 105000,
    },
    {
      country: "India",
      junior: 15000,
      mid: 30000,
      senior: 50000,
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
        <ResponsiveBar
          data={data}
          keys={["junior", "mid", "senior"]}
          indexBy="country"
          margin={{ top: 50, right: 140, bottom: 50, left: 80 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Salary (USD)",
            legendPosition: "middle",
            legendOffset: -65,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Frontend Developer Salaries in 2024"
          barAriaLabel={(e) =>
            e.id + ": $" + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </div>
    </div>
  );
}

export default Bar;
