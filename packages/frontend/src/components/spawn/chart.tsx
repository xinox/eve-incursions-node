import React, {useMemo} from 'react';
import {ActiveSpawnsQuery} from '../../lib/graphql';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Tooltip, LinearScale, LineElement, LineController, PointElement, CategoryScale, Filler, ChartOptions} from 'chart.js';

ChartJS.register(Tooltip, LineController, LineElement, PointElement, LinearScale, Tooltip, CategoryScale, Filler);
export const Chart = ({influenceLogArray}: { influenceLogArray: ActiveSpawnsQuery['activeSpawns'][0]['influenceLogArray'] }) => {
  const data = useMemo(() => ({
    labels: ["-72h", "", "", "", "", "", "", "", "", "", "", "", "-60h", "", "", "", "", "", "", "", "", "", "", "", "-48h", "", "", "", "", "", "", "", "", "", "", "", "-36h", "", "", "", "", "", "", "", "", "", "", "", "-24h", "", "", "", "", "", "", "", "", "", "", "", "-12h", "", "", "", "", "", "", "", "", "", "", "now"],
    datasets: [
      {
        label: "Influence",
        fill: true,
        backgroundColor: "rgba(220,220,220,0.2)",
        borderColor: "#0FA0CE",
        pointRadius: 0,
        data: influenceLogArray
      }
    ]
  }), [influenceLogArray]);

  let options = useMemo<ChartOptions<'line'>>(() => ({
    legend: {
      display: false
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    layout: {
      padding: {
        top: 5
      }
    }
  }), []);

  return (
    <Line data={data} options={options as any}/>
  );
};
