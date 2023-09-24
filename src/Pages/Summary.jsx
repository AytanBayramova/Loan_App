import React, { useState, useRef , useEffect} from 'react';
import UserInfo from './UserInfo';
import WorkList from './WorkList';
import GuarantorList from './GuarantorList';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const summaryRef = useRef(null);

  const handlePrint = () => {
   
    const elementToPrint = summaryRef.current;

   
    html2canvas(elementToPrint).then((canvas) => {
   
      const pdf = new jsPDF('p', 'mm', 'a4');

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, width, height);

      pdf.save('summary.pdf');
    });
  };

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const handleShowSubmitModal = () => setShowSubmitModal(true);
  const handleCloseSubmitModal = () => setShowSubmitModal(false);
  const handleShowCancelModal = () => setShowCancelModal(true);
  const handleCloseCancelModal = () => setShowCancelModal(false);

  const handleCancelLoan = () => {
    console.log('Loan canceled with reason:', cancelReason);

    handleCloseCancelModal();
    navigate('/');
  };
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    if (location.state && location.state.installments) {
      setInstallments(location.state.installments);
    }
  }, [location]);
  return (
    <>
      <div ref={summaryRef}>
        <div className="buttons d-flex justify-content-end">
          <div className="ms-5 gap-2 mt-2">
            <button
              onClick={handlePrint}
              type="button"
              className="btn btn-outline-dark"
            >
              Print Information
            </button>
          </div>
         
        </div>
        <UserInfo />
        <WorkList />
        <div className="loan-table">
        {!!installments?.length && (
          <table>
          
          </table>
        )}
      </div>  
        <GuarantorList />
      </div>

   
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

      <Modal show={showSubmitModal} onHide={handleCloseSubmitModal}>
        <Modal.Header closeButton>
          <Modal.Title className="well">Well Done!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your request has been registered and you will be contacted. Thanks!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleCloseSubmitModal(); 
              navigate('/'); 
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

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
