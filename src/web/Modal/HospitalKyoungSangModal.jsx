import ModalPortal from "../../component/Layout/ModalPortal";
import {Modal} from "react-bootstrap";

function HospitalKyoungSangModal({onClose, isOpen}) {
    return (
        <ModalPortal>
            <Modal scrollable={true} show={isOpen}>
                <div className="modal-header">
                    <h5 className="modal-title" id="location_02_ModalLabel"><i
                        className="bi bi-geo-alt-fill me-1"></i>부산/울산/경남
                    </h5>
                </div>
                <div className="modal-body">
                    <div className="accordion" id="accordionLocation_02">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    부산
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionLocation_02">
                                <div className="accordion-body">
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                네오메디컬동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지국제6로 234 (명지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                홈즈 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지국제8로 233, 2층 203호 (명지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                국제동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지국제8로 243 (명지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                어울림동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지국제8로 270, 1동 202호 (명지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                명지오션시티동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지오션시티11로 66 (명지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                명지종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지오션시티11로 74 (명지동,명지오션타워 204)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해옴동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 명지오션시티4로 69 (명지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                신호동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 강서구 신호산단1로 124, 103호 (신호동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                순동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로 206-3 (장전동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                수종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로 340 (장전동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                구서동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로 454 (구서동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                드림동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로 539 (구서동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                에이스종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로 578 (구서동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                남산동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로 703-3 (남산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                웰동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 금강로403번길 1, 2층 (구서동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                지동범 동물 안과 치과병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 부곡로 184, 행복한빌딩 1,2층 (부곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                에이치동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 부곡로 3, 1~2층 (부곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                부곡동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 부곡로 86 (부곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                한독동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 서동로 200 (서동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서동 동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 서동로175번길 11, 2층 (서동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                동물병원 산책
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 수림로 25 (부곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                금빛동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 식물원로 38, 주현빌딩 2층 (장전동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                제일2차동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 중앙대로 1754 (부곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                제일동물진단영상센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 중앙대로 1754 (부곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                쿨펫동물병원 이마트금정점
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 금정구 중앙대로1841번길 24 (구서동, E마트금정점)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                힐링페츠동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 기장읍 대청로 8, 1층
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                배산 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 기장읍 차성로 286
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                디알씨동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 기장읍 차성로 314
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                기장동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 기장읍 차성로288번길 61
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                일광해빛동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 일광면 해빛6로 85-4, 스타타워Ⅱ 3층 301,302호
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                바른진료 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 일광면 해빛로 13, 일광제일프라자 2층 203호
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                좌천동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 장안읍 해맞이로 17-1
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                지 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 정관면 용수로 21
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                킴스동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 정관읍 정관로 565
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                정관착한동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 정관읍 정관로 575-3, 2층 202호 (정관제일타워Ⅱ)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                아산동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 기장군 정관읍 정관로 583
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                자이안트 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 분포로 113, 상가동 3층 304호 (용호동, 엘지메트로시티)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                헬로동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 분포로 115, 힐탑탑플레이스 A동 403호 (용호동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                우암동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 석포로 7, 상가동 109호 (감만동, 우암 자유 4차 아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                UN동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로 221 (대연동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                조양래 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로 224-1, 호수약국 (대연동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                25시 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로 34 (문현동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                다온 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로 345, 1115동 124, 125호 (대연동, 대연힐스테이트푸르지오)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                더본 외과동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로 364, 4층 (대연동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                문현동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로 38 (문현동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                다솜고양이메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로13번길 3, 다솜 동물 병원 (문현동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                (주)다솜동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로13번길 3, 다솜 동물 병원 (문현동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                튼튼동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 수영로334번길 3, 2층 (대연동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                지경희동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 용호로 199 (용호동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                메트로동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 용호로 20, 메트로동물병원 (용호동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해온동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 용호로 233 (용호동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                W동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 용호로 68, 2층 (용호동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                용호동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 용호로123번길 5 (용호동, 목련아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                웰니스동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 남구 전포대로91번길 47, E마트 3층 (문현동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                성경완 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동구 고관로 48, 신화하니엘 더시티 주건축물제1동 103호 (초량동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                동구종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동구 망양로 835-1 (수정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                구구동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동구 범일로 64(범일동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                하나동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동구 수정동로 11, 1층 (수정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                제일동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동구 초량상로 83 (초량동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                시민동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동구 초량상로 84-1 (초량동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                류태현동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 금강공원로 11-1 (온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                동래종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 금강로 69, 105호 (온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                학산동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 동래로147번길 6 (복천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                훈 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 명륜로 194, 1층 (명륜동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                뉴욕동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 명륜로 65, 1층 (수안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                유성준동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 명륜로 90 (수안동, 호원메디컬)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                한사랑동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 명륜로98번길 1 (명륜동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                초원동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 명장로 150 (안락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                레알피부전문동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 반송로 243 (안락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                한양종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 반송로 265 (명장동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                자연동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 사직로70번길 50 (사직동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                자이언츠 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 사직북로 26 (사직동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사직삼보동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 사직북로63번길 11 (사직동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                유기화동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 아시아드대로 131-1, 2층 (사직동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                노블동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 아시아드대로 160, 1,2층 (사직동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                온천동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 아시아드대로 207 (온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사직동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 아시아드대로 209, 2층 (온천동, 지영아이니드빌)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                온정동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 안연로 72, 동림빌딩 1층 (안락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                안락동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 안연로98번길 4 (안락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                24시 더휴동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 온천장로 20, 1층 (온천동, 신화타워아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                린동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 중앙대로1381번길 43, 2층 (온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                온마음동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 중앙대로1473번길 24, 온천장역삼정그린코아더시티 상가동 109~110호 (온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                스카이동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 160, 1층 (온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                24시 리본동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 194, 동림빌딩 2층 (명륜동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                24시 리본동물영상센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 194, 동림빌딩 3층 (명륜동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                재생동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 268-1 (낙민동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                헤아림동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 288 (낙민동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대일종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 435 (안락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                바른동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로 488 (안락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                리브동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로125번길 6(온천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                동양축산병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 동래구 충렬대로237번길 148 (명륜동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                펫케어 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 가야공원로 6, B112호 (가야동, 가야센트레빌아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                가야종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 가야대로 491 (개금동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                보듬 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 가야대로 517, 윤정빌딩 (가야동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                미소동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 가야대로 754 (부전동, 한솔폴라리스)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                닥터펫 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 개금온정로 6 (개금동, 개금블루스카이)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이브동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 거제대로 14, 2층 (양정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                롯데동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 거제대로 20 (양정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                부일동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 국악로 5 (연지동, 연지로얄아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                당감동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 당감로 31-1 (당감동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                리치동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 당감서로 84, 아시아드빌딩상가 (당감동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                힘찬동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 대학로 1, 1,2층 (가야동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                24시 온동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 동성로 152 (전포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                화승종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 동평로 107 (부암동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                우진동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 동평로 115-1, 1층 (부암동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대디동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 동평로 173, 207,208호 (부암동, 협성휴포레시티즌파크아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                올케어 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 동평로 356, 1층 (양정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                위드동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 동평로 54 (당감동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                도담동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 망양로 973 (범천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                신개금동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 복지로 47 (개금동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서면동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 부전로 87 (부전동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                정훈동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 부전로66번길 12, 2층 (부전동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                애경동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 새싹로 155 (연지동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                더원동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 새싹로 218 (초읍동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                초읍동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 새싹로 243-4 (초읍동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서면Q 외과 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 서전로 25, 이오스프라자 201호 (전포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                풍경동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 성지로 110-1(초읍동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                웰니스크리닉
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 시민공원로 31, 이마트트레이더스서면점 (부암동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                스타동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 전포대로 170, B1층 104호 (전포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                전포NC동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 전포대로 206-1, 1층 (전포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                그린동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 전포대로 274 (전포동, 서면대우디오빌2)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                새부산종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 전포대로298번길 1 (전포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                부산종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 부산진구 중앙대로 867 (양정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                동행동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 126, 채움센트럴 3층 (덕천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                노아동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 175 (화명동, 화명2차동원로얄듀크비스타)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                카이저 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 182, 새마을금고 (화명동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                원 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 287, 삼한골든뷰 2층 202,203호 (화명동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                차동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 304 (화명동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                행복한동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 344 (화명동,화명빌딩202호)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                허그동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 금곡대로 366, 대진빌딩 1층 (화명동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                만덕24시동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 덕천로 227 (만덕동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                백양동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 덕천로 280 (만덕동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                베이직 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 만덕3로 55-1, 2층 (만덕동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                덕천동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 만덕대로 119 (덕천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                21세기종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 만덕대로 34 (덕천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                유동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 만덕대로 41 (덕천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                더힐동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 만덕대로155번길 9 (덕천동, 삼정그린코아아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해든동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 백양대로 1053 (구포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                장원동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 시랑로 1, 장원동물병원 (구포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                그랜드 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 학사로 299, 해림빌딩 (금곡동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                토브동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 북구 화명대로 20, 대성빌딩 101호 (화명동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                주례동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 가야대로 258 (주례동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                가나다 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 가야대로 258 (주례동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                개금동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 가야대로 367 (주례동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                쿨펫동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 낙동대로 733, 롯데마트엄궁점 2층 (엄궁동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서부산동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 낙동대로 786, 애진빌딩 201호 (엄궁동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                학장동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 대동로 129 (학장동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                엄궁종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 대동로 18(엄궁동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                고은동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 모라로 107 (모라동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                모라동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 백양대로 957 (모라동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사상동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 사상로 153 (괘법동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                신병헌동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 사상로 261 (덕포동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대성동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사상구 주례로10번길 125 (주례동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                삼성종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 감천로 32 (감천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                부산야생동물치료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동남로 1240 (하단동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                한솔동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동대로 184 (괴정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                괴정동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동대로 246-1, 1층 (괴정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                참조은 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동대로 295-1 (괴정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사하동물의료원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동대로 356 (당리동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                박 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동대로 407 (당리동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                라온동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 낙동대로 511 (하단동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                나은 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 다대로 254 (장림동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                다대동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 다대로 549 (다대동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                스마트동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 다대로 624 (다대동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                더바른 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 다대로 700, 2층 (다대동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                김현태김동민 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 다송로 36 (다대동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                염동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 사하로142번길 10 (괴정동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                장 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 윤공단로56번길 55 (다대동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                행복한 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 을숙도대로 713, 1층 (신평동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                모아동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 장림번영로 41, 1층 (장림동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                코끼리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 하신번영로 201 (신평동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                하단동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 하신중앙로 296 (하단동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                하단오거리 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 사하구 하신중앙로 340, 1층 (하단동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대호동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 구덕로 130 (토성동5가, 해오름상가1층)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                길경진동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 구덕로 308 (동대신동2가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                중앙동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 까치고개로 253-2 (토성동1가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                만박동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 까치고개로 257, 1층 (토성동1가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                가온동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 대영로 36 (서대신동1가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대신동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 망양로 19-1 (서대신동3가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                베이시티 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 서구 송도해변로 192, 상가B동 2층 201호 (암남동, 송도힐스테이트이진베이시티아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이랑동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 과정로 37, 1층 (망미동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                세진동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 과정로15번길 7 (망미동, 국화)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                바다동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 광남로 125, 1층 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                나비동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 광남로 184 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                민락동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 광남로 207 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                박종현동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 광남로 258, 1층 (민락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서울동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 광안로 19 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                오리진 동물피부과병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 광안해변로370번길 9-8, 블루오션 3층 (민락동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                유어캣 고양이병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 무학로63번길 142, 401동 2층 203호 (민락동, 센텀비스타동원2차)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                더프라임동물의료원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 405-1, 2-4층 (남천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                소망애견종합병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 485, 6동 2호 (남천동, 화목아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                광안동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 567, 2층 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                알로하 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 602, 1층 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                메이동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 610, 호암 2층 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                ABC동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 618-1 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사랑동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 733 (수영동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이상동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로 757, 2층 (수영동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                클릭퍼피 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 수영로702번길 18, 3층 (광안동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                삼성동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 연수로 235 (망미동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                연제종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 연수로 241 (망미동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                센텀동물메디컬센터 수영점
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 연수로 407-1, 2-3층 (수영동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                남천동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 황령대로 505, 1층 (남천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                차이 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 수영구 황령산로 3, 2층 (남천동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                거제동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 거제대로 146 (거제동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                부산동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 거제대로 278 (거제동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                피정현 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 거제천로 258 (연산동, 월드빌스포츠센터)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                현대동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 과정로 171-1 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                토곡동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 과정로 234-1 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                MS동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 과정로 354 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                망미동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 과정로 84 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                진석범동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 과정로237번길 115 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                아이디펫 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 과정로344번길 1 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                온천천동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 세병로 84 (거제동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해비치동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 안연로 28, 1층 (연산동, 그린주택)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                연산동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 연수로 135 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이룸동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 연수로 140 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                Jpet동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 연수로 98 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                청조동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 온천천남로 4 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                양지동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 월드컵대로114번길 1 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                24시 센텀동물메디컬센터 연산점
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 중앙대로 1084, 진도사옥 1~3층 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                엘동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 연제구 중앙대로 1133, 1층 (연산동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                태종동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 영도구 동삼로 80 (동삼동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                영도동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 영도구 태종로 111 (영선동1가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                천동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 영도구 태종로 430, 한라청학아파트 2층 (청학동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                센트럴종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 영도구 태종로 78 (대교동1가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                피닉스동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 중구 구덕로 30-1 (남포동2가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                희망종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 중구 구덕로 51, 2층 (남포동5가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                고동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 중구 자갈치로47번길 5 (남포동5가)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                리안 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 달맞이길 58, 2층 (중동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                달맞이 호두네 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 달맞이길65번길 33, 상가동 3층 305호 (중동, 해운대 달맞이 유림 노르웨이숲)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                아이앤지동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 대천로 114, 1층 (좌동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                마린시티 종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 마린시티3로 23, 벽산이오렌지프라자 333~336호 (우동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                숲동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 마린시티3로 37, 한일오르듀 207호 (우동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                마린숲 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 마린시티3로 37, 한일오르듀 208호 (우동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                토마스동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 반송로 922 (반송동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                장산동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 반여로 96, 1층 (반여동, 영풍빌딩)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                행복드림 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 삼어로 61, 201호 (반여동, 우방신세계아파트)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                우리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 선수촌로 101 (반여동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                반여착한동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>부산광역시 해운대구 선수촌로 65-19, 농협반여동지점 2층 (반여동)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                오션동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 선수촌로 78, 다솜빌딩 2층 (반여동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                화목종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 세실로 48, 206호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해운대 플러스동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 세실로 48, 상가동 1-2, 2-2호 (좌동, 해운대삼정코아주상복합)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                돌봄 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 센텀2로 33, 센텀뷰라움 107호 (우동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                아이센텀 동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 센텀동로 25, B동 204호 (우동, 대우월드마크센텀아파트)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                아이케어 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 센텀동로 25, B상가동 203호 (우동, 대우월드마크센텀아파트)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                로이종합동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 센텀중앙로 145, 202호 (재송동, 센텀파크상가2동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                센텀동물종합병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 센텀중앙로 145, 205호 (재송동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                신비한 동물병원 인센텀
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 센텀중앙로 60, 106호 (우동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                누리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 송정2로13번길 46 (송정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해밀동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 송정광어골로 22, 1층 (송정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                반송동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 아랫반송로 11-1 (반송동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                조앤박동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 양운로 108, 2층 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해운대동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 양운로 40, 봉황빌딩 301호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해운대 24시 동물의료원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 양운로 45, 해운대베르나움 111호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                BS조은동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 윗반송로 73 (반송동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                재송동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 재반로 117-1, 2층 (재송동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                갑을동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 재반로 148, 32호 (재송동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사랑의동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 좌동순환로 173, 영풍프라자 302호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                신도시동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 좌동순환로 178, 2층 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                성심동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 좌동순환로 308, 3층 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                온누리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 좌동순환로 309, 303호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                닥터주 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 좌동순환로402번길 8, 204호 (좌동, 피렌체오피스텔)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                힐 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 좌동순환로433번길 30-1, 해운대힐스테이트위브 224~227호 (중동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                벡스코 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로 369, 해운대센텀메디칼센터 (우동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                김준완 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로 580, 4층 (우동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                해운대조은동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로 624 (우동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                스펀지동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로 658-1 (우동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                마리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로 794, 엘리움 306호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                리더스동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로 814, 세종월드프라자 A동 301호 (좌동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                박창언 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로177번길 6 (재송동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                푸른동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대로61번길 104 (반여동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                큰마음동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                부산광역시 해운대구 해운대해변로357번길 17, 4~8층 (중동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>예약전화
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    울산
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionLocation_02">
                                <div className="accordion-body">
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                펫하우스 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 남중로 48 (삼산동,이마트울산점 3층)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대공원 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 대공원로 241, 207호 (신정동, 대공원코오롱파크폴리스)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                울산광역시 야생동물구조관리센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 대공원로 94 (옥동, 울산대공원내 동물농장)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                스마일동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 대학로 112 (무거동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                도그 앤 피플 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 대학로 127, 2층 (무거동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                문수동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 대학로 164, 102호 (무거동, 웰츠타워)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이루아동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 대학로 27 (무거동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                강남동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 돋질로 234 (달동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                숲동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 돋질로 273 (삼산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                주동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 돋질로 385-1 (삼산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                옥동정철 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 문수로 358 (옥동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                메디펫우리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 번영로 147-1 (달동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                리틀쥬동물의료원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 봉월로 104 (신정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                원헬스 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 북부순환도로 23, 1층 (무거동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                남산동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 북부순환도로 40 (무거동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                울산에스동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 삼산로 160 (달동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                위즈펫동물병원(롯데마트 울산점)
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 삼산로 74, 2층 (달동, 롯데마트울산점)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이승진동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 삼산로 94 (달동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                쿨펫동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 수암로 148, 3층 (야음동, 홈플러스)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                현대동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 수암로149번길 2 (야음동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                울산동물영상센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 신정로 85-2 (달동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                사랑동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 중앙로 165-1 (신정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                미래펫 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 중앙로 218-1 (신정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                권오성동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 중앙로 282 (신정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                수정동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 중앙로28번길 2(야음동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                아너스 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 화합로 197, 1층 (삼산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                강일웅 동물메디컬 센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 남구 화합로 200(삼산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                방어진 행복한 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 동구 방어진순환도로 548 (방어동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                쿨펫동물병원 동구점
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 동구 방어진순환도로 637 (일산동, 홈플러스)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                일산동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 동구 방어진순환도로 645 (일산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                척척 동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 동구 방어진순환도로 652, 테라스파크 301,302,304호 (일산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                손대하 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 동구 일산진6길 22, 1층 (일산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이솝동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 당수골2길 3(매곡동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                울산착한동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 매곡산업로 177, 102호 (매곡동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                잘하는 동물메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 박상진11로 1, 203,204,205호 (송정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                쿨펫동물병원 홈플러스 북구점
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 신답로 26 (상안동, 홈플러스)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                배박사 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 신답로 40 (상안동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서울한빛동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 신답로 48 (상안동, 프리지아)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                정철 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 진장17길 11 (진장동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                호계동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 호계로 365-1 (신천동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                화봉GL동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 북구 화동로 11, 124동 1층 113호 (화봉동, 화봉 쌍용예가)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                벧엘동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 두동면 계명3길 9, 봉계재래시장 203호
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                언양동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 두동면 구미월평로 787
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                BB동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 범서읍 점촌6길 5
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                더조은동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 범서읍 천상중앙길 47, 더조은동물병원 1층
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                초록동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 삼남면 상평강변길 3
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                라인동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 삼남면 중남로 72, 3층
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                제일동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 삼남면 중평로 79
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                박지호 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 삼남면 하방로 27
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                중산동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 삼남면 향교로 164, 2층 202호 (울산 교동 리슈빌아파트)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                삼동종합가축병원약품
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 삼동면 삼동로 751, 2층
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                대동동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 언양읍 동부8길 19-6
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                서울산 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 언양읍 방천4길 19-9, 서울산 동물병원 1층 101호
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                원동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 언양읍 웃방천5길 14, 바동 104호 (서부상가)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                와우동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 언양읍 읍성로 135
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                울산축협동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 언양읍 읍성로 20, 나동 1층
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                박동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 언양읍 태기길 23-6
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                MK동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 온산읍 덕신로 250
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                남창미르동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 온양읍 대운길 12, 남창미르동물병원
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                온양 발리동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 온양읍 보곡3길 40 (온양서희스타힐스)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                통일동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 울주군 청량읍 덕하장터길 7
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                전영호동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 구교로 163 (반구동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                산타클라라동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 다운로 1 (다운동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                제갈견 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 명륜로 64-1 (우정동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                라온 동물 메디컬센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 번영로 524 (반구동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                메이 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 번영로 581 (남외동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                우정 동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 종가3길 24, 1층 (유곡동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                이박사동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 중앙길 75 (성남동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                태화동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 태화로 160 (태화동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                리버동물의료센터
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 태화로 250 (태화동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                쿨펫동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 학산로 5 (학산동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                울산동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 학성공원13길 45 (학성동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                닥터강동물병원
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                울산광역시 중구 화진길 13-2 (태화동)
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화예약
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    경남
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionLocation_02">
                                <div className="accordion-body">
                                    <div className="row border py-3 px-1 align-items-center mb-2">
                                        <div className="col-12 col-md-8">
                                            <div className="fw-bold mb-0">
                                                애견구루머
                                            </div>
                                            <div className="fs-6_5 mb-0">
                                                <div>경상남도 거제시 고현동
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 text-end">
                                            <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                    href="#" role="button" disabled><i
                                                className="bi bi-telephone-fill me-1"></i>전화걸기
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="d-flex w-100">
                        <button type="button" className="btn btn-secondary w-100 py-3" onClick={onClose}
                        >닫기
                        </button>
                    </div>
                </div>
            </Modal>
        </ModalPortal>
    );
}

export default HospitalKyoungSangModal;