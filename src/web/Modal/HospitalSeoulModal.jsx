import ModalPortal from "../../component/Layout/ModalPortal";
import {Modal} from "react-bootstrap";

function HospitalSeoulModal({onClose, isOpen}) {
    return (
        <ModalPortal>
            <Modal scrollable={true} show={isOpen}>
                <div className="modal-header">
                    <h5 className="modal-title" id="location_01_ModalLabel"><i
                        className="bi bi-geo-alt-fill me-1"></i>서울
                    </h5>
                </div>
                <div className="modal-body">
                    <div className="px-2">
                        <div className="row border py-3 px-1 align-items-center mb-2">
                            <div className="col-12 col-md-8">
                                <div className="fw-bold mb-0">
                                    강아지분양 올리펍스 강남점
                                </div>
                                <div className="fs-6_5 mb-0">
                                    <div>서울특별시 강남구 개포동
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-end">
                                <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0" href="#"
                                        role="button" disabled><i className="bi bi-telephone-fill me-1"></i>전화걸기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="d-flex w-100">
                        <button type="button" className="btn btn-secondary w-100 py-3" onClick={onClose}>닫기
                        </button>
                    </div>
                </div>
            </Modal>
        </ModalPortal>
    );
}

export default HospitalSeoulModal;