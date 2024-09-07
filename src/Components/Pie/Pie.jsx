import { ResponsivePie } from "@nivo/pie";

function Pie() {
  const data = [
    {
      id: "Junior",
      label: "Junior",
      value: 275000,
    },
    {
      id: "Mid",
      label: "Mid",
      value: 430000,
    },
    {
      id: "Senior",
      label: "Senior",
      value: 600000,
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
          width: "400px",
          margin: "0 auto",
        }}
      >
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.7}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
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

export default Pie;
