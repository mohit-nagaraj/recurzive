"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Transaction() {
  const [data, setData] = useState([
    {
      Balance: "7,994.76",
      Credit: "5,000.00",
      Debit: null,
      Description:
        "BY TRANSFER-INB\nIMPS924416044700/97720435\n13/XX2811/IMPS Txn-",
      "Ref No./Cheque\nNo.": "MAB00033207679\n8\nMAB00033207679\n8",
      "Txn Date": "1 Sep 2019",
      "Value\nDate": "1 Sep 2019",
    },
    {
      Balance: "9,994.76",
      Credit: "2,000.00",
      Debit: null,
      Description:
        "BY TRANSFER-INB\nIMPS924416044725/97720435\n13/XX2811/IMPS Txn-",
      "Ref No./Cheque\nNo.": "MAC00033202020\n6\nMAC00033202020\n6",
      "Txn Date": "1 Sep 2019",
      "Value\nDate": "1 Sep 2019",
    },
    {
      Balance: "33,844.76",
      Credit: "23,850.00",
      Debit: null,
      Description:
        "BY TRANSFER-\nNEFT*RBIS0GORJEP*RBI246\n1906242380*TREASURY\nOFFICE-",
      "Ref No./Cheque\nNo.": "TRANSFER\nFROM\n3199417044302",
      "Txn Date": "2 Sep 2019",
      "Value\nDate": "2 Sep 2019",
    },
    {
      Balance: "31,844.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n924901104796ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "6 Sep 2019",
      "Value\nDate": "6 Sep 2019",
    },
    {
      Balance: "29,844.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n924901105800ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "6 Sep 2019",
      "Value\nDate": "6 Sep 2019",
    },
    {
      Balance: "27,844.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n924902107893ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "6 Sep 2019",
      "Value\nDate": "6 Sep 2019",
    },
    {
      Balance: "25,844.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n924902129961ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "6 Sep 2019",
      "Value\nDate": "6 Sep 2019",
    },
    {
      Balance: "23,844.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n924902133080ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "6 Sep 2019",
      "Value\nDate": "6 Sep 2019",
    },
    {
      Balance: "23,734.76",
      Credit: null,
      Debit: "110.00",
      Description: "by debit card-SBIPG\nQT7949528859EMITRA\nMUMBAI-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "6 Sep 2019",
      "Value\nDate": "6 Sep 2019",
    },
    {
      Balance: "24,074.76",
      Credit: "340.00",
      Debit: null,
      Description: "BY TRANSFER-INB\nIMPS925219679279/82337779\n68/XX7968/-",
      "Ref No./Cheque\nNo.": "MAB00033677292\n4\nMAB00033677292\n4",
      "Txn Date": "9 Sep 2019",
      "Value\nDate": "9 Sep 2019",
    },
    {
      Balance: "20,074.76",
      Credit: null,
      Debit: "4,000.00",
      Description: null,
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "12 Sep\n2019",
      "Value\nDate": "12 Sep\nATM WDL-ATM CASH 4070\n2019\nBLA ATM PHULERA-",
    },
    {
      Balance: "35,074.76",
      Credit: "15,000.00",
      Debit: null,
      Description:
        "BY TRANSFER-\nUPI/CR/926435090102/SUNIL\nB/SBIN/8233777968/NA-",
      "Ref No./Cheque\nNo.": "TRANSFER\nFROM\n5099195162098",
      "Txn Date": "21 Sep\n2019",
      "Value\nDate": "21 Sep\n2019",
    },
    {
      Balance: "25,074.76",
      Credit: null,
      Debit: "10,000.00",
      Description: null,
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "21 Sep\n2019",
      "Value\nDate":
        "21 Sep\nATM WDL-ATM CASH 6284\n2019\nSBBJ MAKRANA NAGAUR\nMAKARANA-",
    },
    {
      Balance: "20,074.76",
      Credit: null,
      Debit: "5,000.00",
      Description: null,
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "21 Sep\n2019",
      "Value\nDate":
        "21 Sep\nATM WDL-ATM CASH 6286\n2019\nSBBJ MAKRANA NAGAUR\nMAKARANA-",
    },
    {
      Balance: "19,574.76",
      Credit: null,
      Debit: "500.00",
      Description: null,
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "21 Sep\n2019",
      "Value\nDate": "21 Sep\nATM WDL-ATM CASH 92641\n2019\nMAKRANA NAGAUR-",
    },
    {
      Balance: "19,787.76",
      Credit: "213.00",
      Debit: null,
      Description: "CREDIT INTEREST--",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "25 Sep\n2019",
      "Value\nDate": "25 Sep\n2019",
    },
    {
      Balance: "17,787.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n927111022447ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "28 Sep\n2019",
      "Value\nDate": "28 Sep\n2019",
    },
    {
      Balance: "15,787.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927111349828PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "28 Sep\n2019",
      "Value\nDate": "28 Sep\n2019",
    },
    {
      Balance: "39,637.76",
      Credit: "23,850.00",
      Debit: null,
      Description:
        "BY TRANSFER-\nNEFT*RBIS0GORJEP*RBI275\n1942207409*TREASURY\nOFFICE-",
      "Ref No./Cheque\nNo.": "TRANSFER\nFROM\n3199421044306",
      "Txn Date": "1 Oct 2019",
      "Value\nDate": "1 Oct 2019",
    },
    {
      Balance: "34,637.76",
      Credit: null,
      Debit: "5,000.00",
      Description: null,
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "2 Oct 2019",
      "Value\nDate": "2 Oct 2019 ATM WDL-ATM CASH 6884\nBLA ATM PHULERA-",
    },
    {
      Balance: "32,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927514361138PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "2 Oct 2019",
      "Value\nDate": "2 Oct 2019",
    },
    {
      Balance: "30,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description:
        "by debit card-OTHPG\n927815153745ONE97\nCOMMUNICATIONS LNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "28,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815639260PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "26,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815340963PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "24,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815500523PAYTM\nNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "22,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815341287PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "20,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815502787PAYTM\nNOIDA-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "18,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815140999PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
    {
      Balance: "16,637.76",
      Credit: null,
      Debit: "2,000.00",
      Description: "by debit card-OTHPG\n927815325638PAYTM\n1204770770-",
      "Ref No./Cheque\nNo.": null,
      "Txn Date": "5 Oct 2019",
      "Value\nDate": "5 Oct 2019",
    },
  ]);

  // useEffect(() => {
  //   const getInfo = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:5000/get_history");
  //       console.log(JSON.parse(response.data));
  //       setData(JSON.parse(response.data));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getInfo();
  // }, []);
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
              {data?.map((r) => {
                const randomNumber = Math.floor(
                  10000000 + Math.random() * 90000000
                );
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
