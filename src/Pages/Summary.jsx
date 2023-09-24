import React, { useState, useRef } from 'react';
import UserInfo from './UserInfo';
import WorkList from './WorkList';
import GuarantorList from './GuarantorList';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Summary = () => {
  const navigate = useNavigate();

  // Move the useRef inside the component
  const summaryRef = useRef(null);

  const handlePrint = () => {
    // Get the HTML element to print (in this case, the `Summary` component)
    const elementToPrint = summaryRef.current;

    // Use html2canvas to capture the content as an image
    html2canvas(elementToPrint).then((canvas) => {
      // Create a PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Calculate the width and height of the PDF based on the content
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      // Add the captured image to the PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, width, height);

      // Save the PDF with a filename
      pdf.save('summary.pdf');
    });
  };

  // State variables for modals
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  // Functions to show/hide modals
  const handleShowSubmitModal = () => setShowSubmitModal(true);
  const handleCloseSubmitModal = () => setShowSubmitModal(false);
  const handleShowCancelModal = () => setShowCancelModal(true);
  const handleCloseCancelModal = () => setShowCancelModal(false);

  // Function to handle loan cancellation
  const handleCancelLoan = () => {
    // Handle cancellation logic here (e.g., send reason to the server)
    console.log('Loan canceled with reason:', cancelReason);

    // Close the modal and navigate to Main.jsx
    handleCloseCancelModal();
    navigate('/');
  };

  return (
    <>
      <div ref={summaryRef}>
        <div className="buttons d-flex justify-content-end">
          {/* Print Button */}
          <div className="ms-5 gap-2 mt-2">
            <button
              onClick={handlePrint}
              type="button"
              className="btn btn-outline-dark"
            >
              Print Information
            </button>
          </div>
          {/* Other buttons */}
          {/* ... (existing buttons) */}
        </div>
        <UserInfo />
        <WorkList />
        <GuarantorList />
      </div>

      {/* Buttons */}
      <div className="buttons d-flex justify-content-end">
        <div className="ms-5 gap-2 mt-2">
          <button
            onClick={handleShowCancelModal}
            type="button"
            className="btn btn-outline-danger"
          >
            Cancel loan
          </button>
        </div>
        <div className="me-5 ms-5 gap-2 mt-2">
          <button
            onClick={handleShowSubmitModal}
            type="button"
            className="btn btn-outline-primary"
          >
            Submit loan
          </button>
        </div>
      </div>

      {/* Submit Loan Modal */}
      <Modal show={showSubmitModal} onHide={handleCloseSubmitModal}>
        <Modal.Header closeButton>
          <Modal.Title className="well">Well Done!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your loan has been submitted successfully.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleCloseSubmitModal(); // Close the modal
              navigate('/'); // Navigate to Main.jsx
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Cancel Loan Modal */}
      <Modal show={showCancelModal} onHide={handleCloseCancelModal}>
        <Modal.Header closeButton>
          <Modal.Title className="cancel">Cancel Loan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="cancelReason" className="form-label">
              Please provide a reason for canceling the loan:
            </label>
            <textarea
              className="form-control"
              id="cancelReason"
              rows="4"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCancelModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleCancelLoan}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Summary;
