import ModalPortal from "../../component/Layout/ModalPortal";
import {Modal} from "react-bootstrap";

function ShopKyoungSangModal({onClose, isOpen}) {
    return (
        <ModalPortal>
            <Modal scrollable={true} show={isOpen}>
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
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
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            부산
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne"
                                         data-bs-parent="#accordionLocation_02">
                                        <div className="accordion-body">
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        에이펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 대저2동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산강아지분양 테디럽 명지본점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        올리스24 명지점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        헬로퍼피 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        뽀글리
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        와우펫앤쥬 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        밀크푸딩 켄넬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        LOB켄넬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개츠비 켄넬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫피플 스타필드명지점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아이비도그
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        홍s살롱
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 명지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쥬쥬펫살롱
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 강서구 신호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견훈련소 보담
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 구서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        박냥이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 구서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫미인
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 구서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        이마트 금정점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 구서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        캣츠타운
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 남산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        예쁜강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍멍아 노~올자
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        고양이카페 랙돌
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 장전동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        심즈펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 장전동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        네로는 검은고양이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 장전동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        츄츄애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 금정구 장전동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견의 집
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 기장읍 대라리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍멍클럽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 기장읍 대라리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        기장애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 기장읍 대라리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        핑크애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 기장읍 동부리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        코코스퀘어
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 기장읍 시랑리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산애견대학
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 장안읍 좌동리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        복남펫하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 정관읍 달산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        디오지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 정관읍 매학리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피앤유
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 정관읍 매학리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        와우펫앤쥬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 기장군 정관읍 방곡리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 감만동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        츄츄독 푸들이야기 부산 강아지분양
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그마루 강아지 고양이 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        하이바이분양소 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        제나캣 부산고양이분양
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산고양이분양 그린캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        츄츄독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아미고펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프란다스의 개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        붐애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 대연동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        웰니스 동물병원
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 문현동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멀티펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 문현동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견마트
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 남구 용호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        패러그린샵 동래점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 명륜동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        그린펫 동래점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 명륜동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        전수진.ALL THE PET
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 명륜동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도도펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 명륜동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        그린펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 명장동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        DANG SMILE
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 사직동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        플란다스의개 사직점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 사직동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        야옹아멍멍해봐
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 사직동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        스파리버
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 안락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견나라
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 안락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견나라
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 동래구 안락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도도펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 가야동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        두부네 애견카페
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 개금동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍냥이그루밍아카데미
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 개금동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우니캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 범천동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        웰니스 펫뷰티
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 부암동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        짧냥이네
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 부전동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        데려가줄래
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피룸 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피그랑
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산 퍼피몰리 강아지분양
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        패밀리PET
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Sara pet (사라펫)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프리미엄캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아이조아요양보호소 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견제일싼집(1호점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        옆집강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Dog Show
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프라임 도그
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        The 착한애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        제니스펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        신영구와땡칠이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        시원애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도도한냥이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 양정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫퍼센트
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 연지동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미스터독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 부산진구 전포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        여울목 아쿠아
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 구포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        그루밍선데이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 구포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        피쉬플라넷
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 금곡동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마마스미독 강아지분양 부산덕천점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 덕천동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        플랜츠비
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 덕천동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        바니펫살롱
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 만덕동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        고양이분양 제나캣 화명점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        강아지분양 고양이분양 헬로브리더 부산화명점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        헬로다키
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그마루 강아지 고양이 부산 화명점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        젠느켄넬(Jeune Kennel)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우다다애견카페
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        야옹아 멍멍해봐
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        롯데마트 화명점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견마을
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 북구 화명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        스몰펫하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 감전동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우리집 첫째
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 괘법동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)밀레펫(이마트사상점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 괘법동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        MK CLUB 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 덕포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        큐티퍼피
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 덕포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그와트(Dogwarts)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 덕포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍이와냥이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 모라동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개발바닥
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 삼락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)바이오시스템아쿠아(롯데마트사상점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 엄궁동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산고양이 분양 도로시펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 주례동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도로시펫 강아지 고양이 부산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 주례동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쁘니＆비키
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사상구 주례동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아이러브 애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 괴정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아름이네강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 괴정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        회원애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 괴정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        큐티애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 괴정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우리집 막내
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 다대동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        다키애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 다대동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그라이프
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 다대동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        유리애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 다대동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미엘 캣터리
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 당리동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        똥강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 당리동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쭈야애견샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 당리동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        샵돌봄
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 장림동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        빨강머리 앤
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 장림동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        홈플러스스토어즈
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 장림동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        롯데마트 사하점 수족관
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 장림동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        바른개 생활
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 하단동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        큐티독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 하단동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        다인애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 사하구 하단동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        늘, 고운펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 서구 남부민동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        폴인캣츠
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 서구 서대신동3가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 서구 토성동4가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견매니아
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 서구 토성동4가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도도한 펫츠
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        다정한 개아빠
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        메이펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프란다스의 개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        두두펫케어
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        명문애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        털보애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 광안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        그루멍(groomung)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 남천동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        고든펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 망미동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우리애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 망미동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그메종
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 민락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마이펫의 이중생활
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 민락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개키우는오빠 Love&Dog
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 민락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        웰빙펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 민락동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쁘띠몽 펫샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 수영동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        LOUISMONG(루이몽)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 수영동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        앰플스위트
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 수영구 수영동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        서울아쿠아룸(홈플러스 아시아드점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 연제구 거제동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산고양이분양 나비캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 연제구 연산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        제이펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 연제구 연산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개청순한고양이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 연제구 연산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미유펫 강아지고양이 부산본점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 연제구 연산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        로얄수족관
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 연제구 연산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 영도구 동삼동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        이브켄넬클럽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 영도구 봉래동3가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        신아페
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 영도구 영선동1가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        신아채
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 영도구 영선동2가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        광원수족관
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 남포동2가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        삼성애견사
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 남포동5가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프로애견사
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 남포동5가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        한아름애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 남포동5가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        베스트펫 강아지고양이 부산본점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 중앙동2가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        리프패럿 롯데마트 광복점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 중앙동7가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        한강아쿠아 롯데마트 광복점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 중구 중앙동7가
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        유이하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        반송애견샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        제이애견#
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반여동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        서울아쿠아룸
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반여동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        나라애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반여동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        똘이애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반여동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 반여동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        스파트리송정
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 송정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        시바스럽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 송정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피도담
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        일구팔이 독 하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        부산강아지분양 달링하이부산해운대본점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        와이펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        키티앤퍼피
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫시랑
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        로얄 수족관
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        나라애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 우동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)우연컴퍼니
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 재송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피룸
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 재송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Pet 마을
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 재송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)코스모스이펙트
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 재송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우리집 강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 재송동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        슈슈퍼피
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 좌동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        독앤걸즈
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 좌동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        굿독(Good Dog)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 좌동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        엔젤독스애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 좌동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        하비시앙
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        소온
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        24h알프동물메디컬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫코스(Pet-cose)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        견우
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쁘띠몽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개키우는 언니
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)밀레펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>부산광역시 해운대구 중동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            울산
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo"
                                         data-bs-parent="#accordionLocation_02">
                                        <div className="accordion-body">
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        meow meow
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        캐슬앤제이펫살롱
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        달링하이울산
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그랜드
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        울산고양이분양 도레미캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그마루 강아지 고양이 울산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        모나미 네코
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미미펫살롱
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫월드
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        봄날애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        꿈나라 아쿠아펫샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        엔젤인독스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼스트 애견갤러리
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        러브러브
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        그린애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 달동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        상아지네
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 무거동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        꿀강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 무거동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미유펫 강아지고양이 울산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 무거동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        TEAM 1st SHOW ROOM
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 삼산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        B&B(바비브라운 비숑프리제)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 삼산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        나라애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 삼산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)밀레펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 삼산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        뉴웨이브코커
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 삼산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        DOG DOGGY
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마마스미독 강아지분양 울산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        뚱이애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍클레어 강아지분양 울산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        MK CLUB
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫인더파크
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        졸리쇼
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍 클레어
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        큐티애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        덕신 애견 농장
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견스케치
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        대구애견 조류원
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우리애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 신정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        홈플러스 울산남구점 내 수족관
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 야음동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍멍&DOG
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 야음동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쿨펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 야음동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        바비 애견샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 야음동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        옥동정철 동물판매
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 남구 옥동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개인공간
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 동구 동부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        너는 내운명
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 동구 전하동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애완동물원
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 동구 전하동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        폼나개 특별하개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 동구 화정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Star Club
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 대안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쿨펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 상안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)에이플러스 울산북구점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 상안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        너는내운명
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 신천동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        리프패럿 (울산 매곡점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 중산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        와우펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 진장동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        정철동물병원
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 진장동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        롯데마트 진장점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 진장동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        해피데이애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 북구 호계동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마이도그 강아지분양 울산본점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 범서읍 구영리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        울산원예농협하나로마트
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 범서읍 굴화리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        알프경매장
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 삼남면 가천리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        너와 함께 할 개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 삼남읍 교동리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        안녕댕댕쓰
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 삼남읍 교동리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        레스트펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 서생면 위양리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        너와함개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 언양읍 남부리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        남창애견샵 복실강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 온양읍 대안리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        남창애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 온양읍 대안리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        핑크애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 온양읍 운화리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        동산농장
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 웅촌면 고연리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        참 조은 훈이네 강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 울주군 청량면 개곡리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        뷰티펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 남외동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프렌즈 애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 다운동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        다운애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 다운동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        홈플러스 울산중구점 내 수족관
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 복산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍멍아 야옹아 놀자
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 서동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        강아지마을
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        샵펫 강아지분양 울산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아라애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍멍왕자 야옹공주
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        골든캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        뷰티 앤 도그쇼
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        이누애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견사
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아라애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        카라말티즈
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        성남애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견매니아
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        모들카페(퍼피솔루션)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그파우
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 성안동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        포유
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 옥교동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        러브썸퍼피
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 유곡동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        꽃강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 태화동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        쿨펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>울산광역시 중구 학성동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                            경남
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree"
                                         data-bs-parent="#accordionLocation_02">
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
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        닥터김동물의료센터
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 고현동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫앤켓
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 고현동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        거제애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 고현동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        더펫(The Pet)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 상동동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        에덴파크 거제점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 상동동

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫츠아일랜드 수월점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 수월동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피로운
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 옥포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        한강아쿠아 롯데마트(거제점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 옥포동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        리프패럿 거제장평점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 장평동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Pet & Cat
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거제시 장평동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫클럽샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 거창군 거창읍 송정리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Fall in Rags
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 고성군 구만면 효락리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마마스미독 강아지 분양 김해점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        패러그린샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        나비야
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        지오불독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        강아지를 부탁해
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        총각네애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        꽃개하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 관동동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개용실
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 구산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        프린세스 캣
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 내동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        금관대로 애견센터
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 내동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Rolley Pups
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 내동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        유앤미펫 강아지 고양이 분양 김해점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 대성동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        베베몽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 대청동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피가든
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 대청동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        야옹아 멍멍해봐
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 대청동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        롯데마트장유점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 대청동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        주주클럽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 동상동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        내사랑 아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 동상동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        버드펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 봉황동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        품이네 애견방
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 부곡동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        해강아지 달고양이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 부곡동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        위즈펫동물병원
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 부원동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼계동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        러브펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼계동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        DOG&CAT
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼문동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        일등애견분양
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼방동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그어바웃
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼방동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        러브멍멍
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼방동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마린렙타일
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        김해 해피몽
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 삼정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Fabulous Bully Camp
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 상동면 대감리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        봉암켄넬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 상동면 대감리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        코카갤러리 부산
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 상동면 매리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        야베스주사랑켄넬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 생림면 마사리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        폴리애견농장
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 생림면 봉림리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        하이독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 서상동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼스트독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 서상동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        애견전문미용
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 서상동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우쮸쮸
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 외동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        인터펫코리아
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 외동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        똥강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 외동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        탄이네 강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 율하동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        율하냥
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 장유동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        엔젤인독스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 진영읍 여래리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        해피애견하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 진영읍 진영리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        킹덤농장
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 한림면 용덕리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        귀염이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 김해시 한림면 장방리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        똥개애견카페
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 밀양시 교동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        펫코랜드
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 밀양시 내이동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        댕댕
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 밀양시 내이동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        우정진도개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 밀양시 산내면 용전리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        코모네펫하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 밀양시 삼문동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        달링하이 강아지분양 밀양점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 밀양시 삼문동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        마마스미독강아지분양사천점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 사천시 벌리동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        야옹아 멍멍해봐
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 사천시 벌리동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        블루랙돌
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 사천시 사천읍 두량리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        레드아쿠아
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 사천시 사천읍 선인리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        붐
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 사천시 사천읍 선인리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        앨리스코리아켄넬
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 개곡리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        와우펫앤쥬 양산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 금산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        올리스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 금산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        골든아쿠아펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 금산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        고양이살롱
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 금산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        조아애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 금산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        신나개
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 동면 금산리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        Dog.(독점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        고양이이야기
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        맥스펫
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 명동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        강아지분양 고양이분양 헬로브리더
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        CATS&ME(캣츠 앤 미)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        모나미네코 양산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        라이프펫(양산점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        제이엠펫하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        강아지와 나
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        비바펫하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        가온애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 가촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        만배네 애견카페
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 물금리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        퍼피슈가
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 범어리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        멍멍친구 애견샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 범어리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        고양이숲
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 범어리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        로제펫샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 범어리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        해동물병원
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 물금읍 범어리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        도그스타일
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 북부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        견인차
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 삼호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개예쁘다
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 삼호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        냥이친구
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 삼호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미미애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 삼호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        똥강아지 애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 삼호동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개예쁘다 런닝센터
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 용당동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        아롱다롱이네
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 중부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        양산동물메디컬센터
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 중부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        동물농장
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 중부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        행복한강아지 틱독
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 중부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        이마트 양산점
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 중부동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        FALL IN RAGS
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 평산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        스타독스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 평산동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        하얀강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 하북면 순지리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        엔젤스펫(Angels pet)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 양산시 하북면 용연리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        원-헬스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 의령군 가례면 가례리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        천연농장(강영호)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 의령군 유곡면 신촌리
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        이쁜강아지
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 강남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        개와 고양이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 강남동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        런던 애견하우스
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 동성동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        명품애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 망경동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        미소애견샵
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 봉곡동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        서울애견마트
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 봉곡동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        꼬마애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 상대동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        짱구애견
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 수정동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        후니네멍멍이
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 인사동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
                                                        className="bi bi-telephone-fill me-1"></i>전화걸기
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row border py-3 px-1 align-items-center mb-2">
                                                <div className="col-12 col-md-8">
                                                    <div className="fw-bold mb-0">
                                                        (주)밀레펫(이마트진주점)
                                                    </div>
                                                    <div className="fs-6_5 mb-0">
                                                        <div>경상남도 진주시 인사동
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 text-end">
                                                    <button className="btn btn-sm btn-outline-pet btn-call mt-2 mt-md-0"
                                                            href="#"
                                                            role="button" disabled><i
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
                                <button type="button" className="btn btn-secondary w-100 py-3"
                                        data-bs-dismiss="modal">닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </ModalPortal>
    );
}

export default ShopKyoungSangModal;