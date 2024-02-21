import React from 'react';
import banksData from './banksData.json';

const Loan = () => {
  return (
    <div className="container mx-auto p-12" id='loan'>
      <h1 className="text-3xl font-bold mb-4 text-[#ff6537]">Education Loan Providers for Studying Abroad
      <hr
            style={{
              backgroundColor: "#ff6537",
              width: "160px",
              height: "2px",
              border: "none",
              marginTop: "0px",
              marginLeft: "0px",
              marginBottom: "20px",
            }}
          /></h1>
      <div className="grid grid-cols-1 gap-6">
        {banksData.banks.map((bank, index) => (
          <div key={index} className="bg-white drop-shadow-2xl  p-6 rounded-lg" style={{borderRadius:'30px'}}>
            <h2 className="text-xl text-[#ff6537] font-semibold mb-2">{bank.name}</h2>
            <p><strong>Loan Amount:</strong> {bank.loanAmount.withCollateral} (with collateral) | {bank.loanAmount.withoutCollateral} (without collateral)</p>
            <p><strong>Interest Rate:</strong> {bank.interestRate}</p>
            {bank.discounts && bank.discounts.length > 0 && (
              <p><strong>Discounts:</strong> {bank.discounts.join(', ')}</p>
            )}
            <p><strong>Loan Tenure:</strong> {bank.loanTenure}</p>
            {bank.moratoriumPeriod && <p><strong>Moratorium Period:</strong> {bank.moratoriumPeriod}</p>}
            <p><strong>Pre/Post-Disbursement Options:</strong> {bank.prePostDisbursementOptions ? 'Available' : 'Not Available'}</p>
            {bank.margin && <p><strong>Margin:</strong> {bank.margin}</p>}
            {bank.loanSanction && <p><strong>Loan Sanction:</strong> {bank.loanSanction}</p>}
            {bank.preDisbursement && <p><strong>Pre Disbursement:</strong> {bank.preDisbursement}</p>}
            {bank.topUpLoans && <p><strong>Top-up Loans:</strong> Available</p>}
            {bank.funding && <p><strong>Funding:</strong> {bank.funding}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan;
