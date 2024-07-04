"use client";

import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    width: "400px",
    padding: "20px",
  },
};

const LoanModal = ({
  isOpen,
  closeModal,
  handleSubmit,
  upper_bound_amount,
  lower_bound_amount,
}) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDuration, setLoanDuration] = useState("");

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleLoanDurationChange = (e) => {
    setLoanDuration(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (loanAmount < lower_bound_amount || loanAmount > upper_bound_amount) {
      alert(
        `Loan amount should be between ${lower_bound_amount} and ${upper_bound_amount}`
      );
      return;
    }
    handleSubmit({ loanAmount, loanDuration });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Apply Loan Modal"
    >
      <h2 className="text-xl font-bold mb-4">Apply for Loan</h2>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="loanAmount" className="font-semibold">
              Loan Amount
            </label>
            <input
              type="text"
              id="loanAmount"
              name="loanAmount"
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="loanDuration" className="font-semibold">
              Loan Duration (months)
            </label>
            <input
              type="text"
              id="loanDuration"
              name="loanDuration"
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              placeholder="Enter loan duration"
              value={loanDuration}
              onChange={handleLoanDurationChange}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-lg"
          >
            Submit
          </button>
          <button
            className="ml-4 bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoanModal;
