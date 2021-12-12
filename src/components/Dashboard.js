import React from "react";
import Graph from "./Graph";

function Dashboard() {
  return (
    <div>
      <Graph
        title="Calorie Activity"
        type="line"
        data={[
          {
            values: [
              [10, 20],
              [20, 40],
            ],
            lineColor: "rgb(75, 192, 192)",
            name: "Calorie Income",
          },
          {
            values: [
              [10, 50],
              [20, 20],
            ],
            lineColor: "rgb(255, 145, 0)",
            name: "Calorie Outcome",
          },
        ]}
        width={"1/2"}
        height={"1/2"}
      />

      <Graph
        title="Exercise Activity"
        type="bar"
        data={[
          {
            values: [
              [30, 10],
              [10, 50],
            ],
            backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 145, 0)"],
            name: "Daily Steps",
          },
        ]}
        // x_sorted={true}
        width={"1/2"}
        height={"1/2"}
      />
      <div className="flex items-center">
        <Graph
          title="Bench Press Activity"
          type="pie"
          data={[
            {
              values: [
                ["Red", 10],
                ["Blue", 50],
                ["Yellow", 30],
              ],
              lineColor: ["rgb(75, 192, 192)"],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              name: "Daily Steps",
            },
          ]}
          width={"1/2"}
          height={"1/2"}
          lockAspectRatio={false}
        />
        <Graph
          title="Shoulder Press Activity"
          type="pie"
          data={[
            {
              values: [
                ["Red", 10],
                ["Blue", 50],
                ["Yellow", 30],
              ],
              lineColor: ["rgb(75, 192, 192)"],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              name: "Daily Steps",
            },
          ]}
          width={"1/2"}
          height={"1/2"}
          lockAspectRatio={false}
        />
      </div>
    </div>
  );
}

export default Dashboard;
