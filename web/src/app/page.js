"use client";

import { useRef, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
export default function Home() {
  const fileRef = useRef();
  const [pdfUrl, setPdfUrl] = useState(null); // State to store the PDF URL

  const handleSelectFile = () => {
    fileRef.current.click();
  };

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const pdf = fileRef.current.files[0];
    formData.append("pdf", pdf);
    const familyMemebers = e.target.familyMemebers.value;
    const netWorth = e.target.netWorth.value;
    formData.append("familyMemebers", familyMemebers);
    formData.append("netWorth", netWorth);
    console.log(formData);
  };
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <h1 className="w-full h-fit font-bold text-2xl mb-8">Get Your Score</h1>
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
        <label className="w-full text-left font-semibold text-lg mb-4">
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
                Your browser does not support PDFs. Please download the PDF to
                view it: <a href={pdfUrl}>Download PDF</a>.
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
            <div className="flex flex-nowrap items-center mt-2 border-black/40 border gap-4 px-4 py-2 rounded-xl">
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
            <label className="font-semibold text-lg">Current Net Worth</label>
            <div className="flex flex-nowrap items-center mt-2 border-black/40 border gap-4 px-4 py-2 rounded-xl">
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
        <button className="w-80 bg-black text-white font-semibold text-lg py-3 px-4 rounded-xl">
          Generate Score
        </button>
      </form>
    </main>
  );
}
