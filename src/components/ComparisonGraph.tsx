"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ComparisonGraphProps {
  percentile: number;
}

export const ComparisonGraph = ({ percentile }: ComparisonGraphProps) => {
  const [chartOptions, setChartOptions] = useState<any>(null);
  const [chartSeries, setChartSeries] = useState<any[]>([]);

  const generateNormalDistribution = (
    mean: number,
    stdDev: number,
    size: number
  ) => {
    const data: number[] = [];
    for (let x = 0; x < size; x++) {
      const scaledX = (x / (size - 1)) * 100;
      const exponent = -Math.pow(scaledX - mean, 2) / (2 * Math.pow(stdDev, 2));
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
      data.push(y * 1000);
    }
    return data;
  };

  const getXFromPercentile = (percentile: number) => {
    return percentile;
  };

  useEffect(() => {
    const data = generateNormalDistribution(72, 15, 15);

    const xValues = Array.from({ length: 15 }, (_, i) => (i / (15 - 1)) * 100);

    setChartSeries([
      {
        name: "Percentile Distribution",
        data: data.map((y, i) => ({ x: xValues[i], y })),
      },
    ]);

    setChartOptions({
      chart: {
        type: "line",
        height: 150,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
        events: {
          mouseMove: () => false,
          mouseWheel: () => false,
          click: () => false,
        },
      },
      stroke: {
        curve: "smooth",
        width: 1,
        colors: ["#ccc"],
      },
      markers: {
        size: 3,
        colors: ["#ccc"],
        strokeColors: ["#ccc"],
        hover: {
          size: 5,
        },
      },
      xaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value: number) => {
            if ([0, 25, 50, 75, 100].includes(value)) {
              return value;
            }
            return "";
          },
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: true,
        x: {
          formatter: (value: number) => `${value}%`,
        },
        y: {
          formatter: () => "",
        },
        marker: {
          show: false,
        },
        style: {
          fontSize: "12px",
        },
      },
      annotations: {
        xaxis: [
          {
            x: getXFromPercentile(percentile),
            borderColor: "#cccccc",
            strokeDashArray: 5,
            label: {
              borderColor: "transparent",
              style: {
                color: "#cccccc",
                background: "transparent",
              },
              text: "your percentile",
              position: "top",
              offsetY: -10,
            },
          },
        ],
      },
    });
  }, [percentile]);

  return (
    <div className="bg-white p-6 rounded-lg px-4 py-6 border border-gray-200">
      <h3 className="text-[17px] font-semibold mb-4 text-black">
        Comparison Graph
      </h3>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">
          You scored {percentile ?? 0}% percentile
        </span>{" "}
        which is lower than the average percentile 72% of all the engineers who
        took this assessment
      </p>
      {chartOptions && chartSeries.length > 0 && (
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={400}
        />
      )}
    </div>
  );
};
