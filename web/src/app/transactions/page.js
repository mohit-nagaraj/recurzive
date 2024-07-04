export default async function Transaction() {
  const res = [
    {
      Balance: "15,787.76",
      Credit: NaN,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927111349828PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": NaN,
      "Txn Date": "28 Sep\n2019",
      "Value\nDate": "28 Sep\n2019",
    },
    {
      Balance: "39,637.76",
      Credit: "23,850.00",
      Debit: NaN,
      Description:
        "BY TRANSFER-\nNEFT*RBIS0GORJEP*RBI275\n1942207409*TREASURY\nOFFICE-",
      "Ref No./Cheque\nNo.": "TRANSFER\nFROM\n3199421044306",
      "Txn Date": "1 Oct 2019",
      "Value\nDate": "1 Oct 2019",
    },
  ];
  return (
    <main className="flex flex-1 flex-col gap-4 md:gap-8">
      <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
          <div class="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
            <div>
              <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Recent Transactions
              </h5>
              <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                These are details about the last transactions
              </p>
            </div>
            <div class="flex w-full gap-2 shrink-0 md:w-max">
              <div class="w-full md:w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                  <div class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Search
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 px-0 overflow-auto">
          <table class="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Transaction
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Amount
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Date
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Status
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Description
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Balance
                  </p>
                </th>
                {/* <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    </p>
                  </th> */}
              </tr>
            </thead>
            <tbody>
              {res.map((r) => {
                const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
                return (
                  <tr>
                    <td class="p-4 border-b border-blue-gray-50">
                      <div class="flex items-center gap-3">
                        <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                          {randomNumber}
                        </p>
                      </div>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        ₹{r.Credit || r.Debit}
                      </p>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {r["Txn Date"]}
                      </p>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                      <div class="w-max">
                        <div
                          class={
                            r.Credit
                              ? "relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20"
                              : "relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20"
                          }
                        >
                          <span class="">
                            {r.Credit ? "Credited" : "Debited"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                      <div class="flex items-center gap-3">
                        <div class="flex flex-col">
                          <p class="block w-48 font-sans text-xs text-wrap antialiased font-normal leading-normal capitalize text-blue-gray-900">
                            {/* {r?.Description.length>30?r?.Description.slice(0,30)+'...':r?.Description} */}
                            {r?.Description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                      <div class="flex items-center gap-3">
                        <div class="flex flex-col">
                          <p class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                            {r?.Balance}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
          <div class="flex items-center gap-2">
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                1
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                2
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                3
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                ...
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                8
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                9
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                10
              </span>
            </button>
          </div>
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
