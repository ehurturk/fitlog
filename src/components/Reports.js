import React from "react";

function Reports() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
        <h1 className="text-3xl font-semibold text-gray-900">Reports</h1>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg ">
        <section class="py-8">
          <div class="container px-10 mx-auto">
            <div class="flex flex-wrap -m-4 p-2 ">
              <div class="w-full md:w-1/2 lg:w-1/4 p-4 bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="pt-6 text-center bg-white rounded">
                  <h4 class="mb-2 text-xs text-gray-500">Engaged Users</h4>
                  <p class="mb-1 text-4xl font-bold">1 450</p>
                  <span class="inline-block py-1 px-2 mb-2 text-xs text-white bg-green-500 rounded-full">
                    +115
                  </span>
                  <div
                    class="chart"
                    data-type="area-small"
                    data-variant="indigo"
                  ></div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 p-4 bg-white shadow overflow-hidden sm:rounded-lg ">
                <div class="pt-6 text-center bg-white rounded">
                  <h4 class="mb-2 text-xs text-gray-500">Total Profit</h4>
                  <p class="mb-1 text-4xl font-bold">$9,054</p>
                  <span class="inline-block py-1 px-2 mb-2 text-xs text-white bg-red-500 rounded-full">
                    -$1,535
                  </span>
                  <div
                    class="chart"
                    data-type="area-small"
                    data-variant="blue"
                  ></div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 p-4 bg-white shadow overflow-hidden sm:rounded-lg ">
                <div class="pt-6 text-center bg-white rounded">
                  <h4 class="mb-2 text-xs text-gray-500">Click Counter</h4>
                  <p class="mb-1 text-4xl font-bold">73.5%</p>
                  <span class="inline-block py-1 px-2 mb-2 text-xs text-white bg-green-500 rounded-full">
                    +5.64%
                  </span>
                  <div
                    class="chart"
                    data-type="area-small"
                    data-variant="green"
                  ></div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 p-4 bg-white shadow overflow-hidden sm:rounded-lg ">
                <div class="pt-6 text-center bg-white rounded">
                  <h4 class="mb-2 text-xs text-gray-500">Visit Duration</h4>
                  <p class="mb-1 text-4xl font-bold">0m 50s</p>
                  <span class="inline-block py-1 px-2 mb-2 text-xs text-white bg-green-500 rounded-full">
                    +15s
                  </span>
                  <div
                    class="chart"
                    data-type="area-small"
                    data-variant="orange"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Reports;
