"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export const ComparisonGraph = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: Array.from({ length: 100 }, (_, i) => (i + 1).toString()),
            datasets: [
              {
                label: "Percentile Distribution",
                data: Array.from(
                  { length: 100 },
                  (_, i) => Math.sin(i / 10) * 10 + 50
                ), // Dummy data
                borderColor: "#007bff",
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              x: { display: false },
              y: { display: false },
            },
            plugins: {
              legend: { display: false },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div className="bg-white p-6 mb-6 py-3 px-4 rounded-[4px] border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Comparison Graph</h3>
      <p className="text-gray-600 mb-4">
        You scored 30% percentile which is lower than the average percentile 72%
        of all the engineers who took this assessment
      </p>
      <canvas ref={chartRef} className="w-full h-32"></canvas>
    </div>
  );
};
