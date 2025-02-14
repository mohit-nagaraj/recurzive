"use client";

import { useEffect, useRef, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { GrScorecard } from "react-icons/gr";
import ReactSpeedometer from "react-d3-speedometer";
import { data } from "../dummy/dummy.js";
import LoanModal from "@/components/BankModal.js";
import axios from "axios";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { toast } from "react-toastify";
export default function Home() {
  const fileRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null); // State to store the PDF URL
  const [state, setState] = useState(0);
  const [score, setScore] = useState(30);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [values, setValues] = useState({});
  const [netWorth, setNetWorth] = useState(0);
  const [familyMembers, setFamilyMembers] = useState(0);
  const openModal = (
    upper_bound_amount,
    lower_bound_amount,
    averageInterestRate
  ) => {
    setModalIsOpen(true);
    setValues({ upper_bound_amount, lower_bound_amount, averageInterestRate });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const notify = (id) =>
    toast.success(`Loan applied successfully with id ${id}`);
  const handleSubmitFormData = async (formData) => {
    const amount = formData.loanAmount;
    const duration = formData.loanDuration;
    const interest = formData.averageInterestRate;
    // const interest =
    const loanRef = collection(db, "loan");
    const docReference = doc(loanRef);
    await setDoc(docReference, {
      amount: parseInt(amount),
      months: parseInt(duration),
      interest: parseFloat(interest),
      paid: 0,
    });
    notify(docReference.id);
    // Handle form submission logic here
    closeModal(); // Close modal after submission
  };
  const handleSelectFile = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    console.log(data);
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };
  const handleChange = () => {
    fileRef.current.click();
  };

  const handleDelete = () => {
    setPdfUrl(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    console.log("Form submitted");
    // Simulate an asynchronous operation like a network request

    const formData = new FormData();
    const pdf = fileRef.current.files[0];
    formData.append("pdf", pdf);
    const familyMembers = parseInt(e.target.familyMemebers.value);
    const netWorth = parseInt(e.target.netWorth.value);
    // formData.append("familyMembers", familyMembers);
    // formData.append("netWorth", netWorth);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/get_score",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const income = response.data[0].income;
      console.log(income);

      const response2 = await axios.post(
        "https://1dzrr69b-5000.inc1.devtunnels.ms/generator",
        {
          income: income,
          members: familyMembers,
          net: netWorth,
        }
      );
      setNetWorth(netWorth);
      setFamilyMembers(familyMembers);
      // console.log(response2.data);
      setScore(response2.data[0].prediction[0]);
      // Simulated API call
      console.log("Simulated API call success");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading
      setState(1);
    }
    // Adjust the delay here as needed
  };

  return (
    <>
      {state === 0 ? (
        <main className="flex flex-1 flex-col p-4 md:p-6">
          <h1 className="w-full h-fit font-bold text-2xl mb-2">
            Get Your Score
          </h1>
          <form
            className="w-full h-full pr-24 flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="file"
              className="hidden"
              ref={fileRef}
              name="pdf"
              id="pdf"
              onChange={handleFileChange}
            />
            <label className="w-full text-left font-semibold text-lg">
              Upload Bank Statement
            </label>
            {!pdfUrl && (
              <div className="w-full">
                <button
                  className="w-full border min-h-40 border-gray-400 rounded-lg flex flex-col items-center justify-center py-4 gap-2"
                  type="button"
                  onClick={handleSelectFile}
                >
                  <IoImagesOutline size={30} />
                  <p className="font-semibold text-xl">
                    Select your bank state{" "}
                    <span className="text-blue-500 mb-2">PDF</span>
                  </p>
                  <p className="font-medium text-sm text-gray-400">
                    PLEASE SELECT A PDF FILE
                  </p>
                </button>
              </div>
            )}
            {pdfUrl && (
              <>
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                >
                  <p>
                    Your browser does not support PDFs. Please download the PDF
                    to view it: <a href={pdfUrl}>Download PDF</a>.
                  </p>
                </object>
                <div className="flex gap-4 mt-4">
                  <button
                    className="bg-gray-500 p-2 rounded-full"
                    onClick={handleDelete}
                  >
                    <MdDelete size={22} color="white" />
                  </button>
                  <button
                    className="bg-gray-500 p-2 rounded-full"
                    onClick={handleChange}
                  >
                    <FaEdit size={22} color="white" />
                  </button>
                </div>
              </>
            )}
            <div className="w-full flex flex-wrap my-6 gap-4">
              <div className="flex-1 w-full ">
                <label className="font-semibold text-lg">
                  No.of family members
                </label>
                <div className="flex flex-nowrap items-center border-black/40 border gap-4 px-4 py-2 rounded-xl">
                  <MdPeopleAlt size={25} />
                  <input
                    type="number"
                    className="outline-none border-none w-full font-semibold"
                    placeholder="Enter no of members in family"
                    name="familyMemebers"
                    id="familyMemebers"
                  />
                </div>
              </div>
              <div className="flex-1 w-full ">
                <label className="font-semibold text-lg">
                  Current Net Worth
                </label>
                <div className="flex flex-nowrap items-center border-black/40 border gap-4 px-4 py-2 rounded-xl">
                  <RiMoneyDollarCircleFill size={25} />
                  <input
                    type="number"
                    className="outline-none border-none w-full font-semibold"
                    placeholder="Enter your current net worth"
                    name="netWorth"
                    id="netWorth"
                  />
                </div>
              </div>
            </div>
            <button
              className="w-80 bg-black text-white font-semibold text-lg py-3 px-4 rounded-xl flex flex-nowrap justify-center items-center disabled:cursor-not-allowed gap-2"
              disabled={isLoading}
            >
              {isLoading && (
                <FaSpinner color="white" size={22} className="animate-spin" />
              )}
              <p>Generate Score</p>
            </button>
          </form>
        </main>
      ) : (
        <main className="flex flex-1 flex-col p-4 md:p-6">
          <div className="bg-white h-fit shadow-md rounded-lg p-6 mt-6 flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-center md:justify-start md:items-start">
              <h2 className="text-xl font-bold mb-2">Details</h2>
              <p className="text-gray-600">
                Your score is based on the following details:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 list-none">
                <li></li>
                <li className="flex items-center mb-2">
                  <MdPeopleAlt className="mr-2" size={20} />
                  Family Members: {familyMembers}
                </li>
                <li className="flex items-center mb-2">
                  <RiMoneyDollarCircleFill className="mr-2" size={20} />
                  Net Worth: ₹{netWorth}
                </li>
                <li className="flex items-center mb-2">
                  <GrScorecard className="mr-2" size={20} />
                  Pseduo Credit Score: {score} / 900
                </li>
              </ul>
            </div>
            <div className="flex-1 h-full flex justify-center items-center">
              {/* React D3 Speedometer */}
              <div>
                <ReactSpeedometer
                  maxValue={900}
                  minValue={300}
                  value={score}
                  needleColor="blue"
                  startColor="red"
                  segments={10}
                  endColor="green"
                  textColor="gray"
                  height={150}
                  width={250}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            {/* generate the table heretabe here  */}
            <table className="w-full mt-6">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 text-left">Bank</th>
                  <th className="py-2 px-4 bg-gray-200 text-left">
                    Loan Amount
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-left">
                    Interest Rate
                  </th>
                  <th className="py-2 px-4 bg-gray-200 text-left">Form</th>
                </tr>
              </thead>
              <tbody>
                {data.banks.map((bank, index) => (
                  <tr key={index} className="my-2">
                    <td className="py-2 px-4 flex justify-start items-center">
                      <img
                        src={bank.image}
                        alt={bank.name}
                        className="w-8 h-8 mr-2"
                      />
                      <p className="font-semibold text-lg">{bank.name}</p>
                    </td>
                    <td className="py-2 px-12">
                      <div key={index}>
                        <p className="font-semibold">
                          ₹
                          {(bank.score_ranges[score - (score % 60)].loan_amount
                            .lower_bound +
                            bank.score_ranges[score - (score % 60)].loan_amount
                              .upper_bound) /
                            2}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-10">
                      <div key={index}>
                        <p className="font-semibold">
                          {(bank.score_ranges[score - (score % 60)]
                            .interest_rate.lower_bound +
                            bank.score_ranges[score - (score % 60)]
                              .interest_rate.lower_bound) /
                            2}
                          %
                        </p>
                      </div>
                    </td>
                    <td className="py-2">
                      <button
                        className="px-4 py-2 bg-black text-white font-semibold rounded-lg"
                        onClick={() =>
                          openModal(
                            bank.score_ranges[score - (score % 60)].loan_amount
                              .upper_bound,
                            bank.score_ranges[score - (score % 60)].loan_amount
                              .lower_bound,
                            (bank.score_ranges[score - (score % 60)]
                              .interest_rate.lower_bound +
                              bank.score_ranges[score - (score % 60)]
                                .interest_rate.lower_bound) /
                              2
                          )
                        }
                      >
                        Apply
                      </button>
                    </td>
                    <LoanModal
                      isOpen={modalIsOpen}
                      closeModal={closeModal}
                      handleSubmit={handleSubmitFormData}
                      values={values}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      )}
    </>
  );
}
