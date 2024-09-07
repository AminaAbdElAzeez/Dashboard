import { ResponsivePie } from "@nivo/pie";

function Row1PieChart({ colors }) {
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
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={colors}
      arcLinkLabelsSkipAngle={360}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
    />
  );
}

export default Row1PieChart;
