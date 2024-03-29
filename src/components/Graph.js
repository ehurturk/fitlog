/*
  Sample Line Graph Usage:
  <LineGraph
    title="Calorie Activity"
    data={[
      {
        values: [
          [10, 20], // X-Y Pairs [X, Y]
          [20, 40],
        ],
        color: "rgb(75, 192, 192)", // color of the line
      }, // if you want to have multiple lines, just add another Object
      {
        values: [
          [10, 50],
          [20, 20],
        ],
        color: "rgb(255, 145, 0)",
      },
    ]}
  />
*/

import React, { useEffect } from "react";
// npm i react-helmet
import { Helmet } from "react-helmet";
import Chart from "chart.js/auto";
export default function Graph(props) {
  useEffect(() => {
    const data = props.data;
    const datasets = [];
    for (let i = 0; i < data.length; i++) {
      // amount of graph in one canvas
      const x = [];
      for (let j = 0; j < data[i].values.length; j++) {
        x.push(data[i].values[j][1]);
      }

      console.log(x);
      datasets.push({
        label: data[i].name,
        borderColor: data[i].lineColor,
        backgroundColor: data[i].backgroundColor,
        data: x,
        fill: false,
        pointBackgroundColor: "#4A5568",
        borderWidth: "3",
        pointBorderWidth: "4",
        pointHoverRadius: "6",
        pointHoverBorderWidth: "8",
        pointHoverBorderColor: "rgb(74,85,104,0.2)",
      });
    }
    const labels = [];
    // TODO: Assumes all data labels are same length!!!
    for (let i = 0; i < data[0].values.length; i++) {
      labels.push(data[0].values[i][0]);
    }
    if (props.x_sorted)
      labels.sort((a, b) => {
        return a - b;
      });
    const chart = new Chart(document.getElementById(props.title), {
      type: props.type,
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        maintainAspectRatio:
          props.lockAspectRatio !== undefined ? props.lockAspectRatio : true,
        legend: {
          position: false,
        },
        // responsive: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              display: false,
            },
          ],
        },
      },
    });
  });

  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script
          defer
          src="https://cdn.tuk.dev/dev/light-dark-switch.js"
        ></script>
      </Helmet>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex items-center justify-center py-8 px-4">
          <div className="w-11/12 lg:w-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="lg:flex w-full justify-between">
                  <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
                    {props.title}
                  </h3>
                  <div className="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                    <div className="flex items-center">
                      <button className="py-2 px-4 bg-gray-100 dark:bg-gray-700 focus:outline-none ease-in duration-150 text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-200">
                        Dollars
                      </button>
                      <button className="py-2 px-4 bg-sky-500 focus:outline-none text-white ease-in duration-150 text-xs hover:bg-sky-600">
                        Tickets
                      </button>
                    </div>
                    <div className="lg:ml-14">
                      <div className="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                        <select className="text-xs text-gray-600 dark:text-gray-400 bg-transparent focus:outline-none">
                          <option className="leading-1">Year</option>
                          <option className="leading-1">2020</option>
                          <option className="leading-1">2019</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end mt-6">
                  <h3 className="text-sky-500 leading-5 text-lg md:text-2xl">
                    $65,875
                  </h3>
                  <div className="flex items-center md:ml-4 ml-1">
                    <p className="text-sky-500 text-xs md:text-base">17%</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 2.5V9.5"
                        stroke="#4338CA"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 4.5L6 2.5"
                        stroke="#4338CA"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4.5L6 2.5"
                        stroke="#4338CA"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className={``}>
                  <canvas id={props.title} width={1025} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
