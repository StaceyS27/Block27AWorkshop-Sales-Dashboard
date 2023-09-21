import React from "react";
import {BarChart} from '@mui/x-charts/BarChart'
import { mockLineData } from "../mockData";

export default function BarChartWeekday () {
    return (
        <BarChart
        xAxis={[
            {
              id: 'foodItems',
              data: ["donut", "sandwhich", "fries",
                      "kebab", "hotdog", "burger" ],
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: [200, 75, 36, 216, 35, 236],
            },
          ]}
          width={500}
          height={500}

        />

    )
}
