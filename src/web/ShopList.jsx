import {useParams} from "react-router-dom";
import Layout from "../component/Layout/Layout";
import {useState} from "react";
import ModalPortal from "../component/Layout/ModalPortal";
import HospitalSeoulModal from "./Modal/HospitalSeoulModal";
import HospitalKyoungSangModal from "./Modal/HospitalKyoungSangModal";
import ShopSeoulModal from "./Modal/ShopSeoulModal";
import ShopKyoungSangModal from "./Modal/ShopKyoungSangModal";

function ShopList() {
    const {url} = useParams();
    const [seoulModalOpen, setSeoulModalOpen] = useState();
    const [kyoungSangModalOpen, setKyoungSangModalOpen] = useState();

    const HandleSeoulModalShow = () => {
        setSeoulModalOpen(false);
    };

    const HandleKyoungSangModalShow = () => {
        setKyoungSangModalOpen(false);
    };

    return (
        <Layout url={url}>
            <main>
                <div className="container d-block d-xl-none">
                    <div className="d-xxl-flex mt-3 mt-xxl-0 mb-5">
                        <div className="d-flex">
                            <button className="btn btn-outline-dark p-3 px-xl-5 me-xxl-2 w-100"
                                    onClick="javascript:location.href='./comparison.html'"><i
                                className="bi bi-clipboard-check me-2"></i>펫보험비교
                            </button>
                            <button className="btn btn-outline-dark p-3 px-xl-5 me-xxl-2 w-100"
                                    onClick="javascript:location.href='./card.html'"><i
                                className="bi bi-postcard-heart me-2"></i>펫전용카드
                            </button>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark p-3 px-xl-5 me-xxl-2 w-100"
                                    onClick="javascript:location.href='./shop_list.html'"><i
                                className="bi bi-arrow-through-heart me-2"></i>펫입양소
                            </button>
                            <button className="btn btn-outline-dark p-3 px-xl-5 w-100"
                                    onClick="javascript:location.href='./claims.html'"><i
                                className="me-2 bi bi-pen"></i>펫보험금청구
                            </button>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark p-3 px-xl-5 w-100"
                                    onClick="javascript:location.href='./hospital_list.html'"><i
                                className="bi bi-hospital me-2"></i>동물병원 예약
                            </button>

                        </div>
                    </div>
                </div>
                <hr className="bg-secondary my-0"/>
                <div className="container py-xxl-5 py-0">
                    <div className="d-xl-flex w-100 me-5 mb-4">
                        <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/pet_05.jpg"
                            className="d-block w-100" alt="..."/></div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">펫 입양소</div>
                            <div>전국 반려동물 입양소를 소개합니다.</div>
                            <div className="border rounded p-5 mt-3">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="w-100 btn btn-outline-pet"
                                                data-bs-toggle="modal"
                                                data-bs-target="#location_01_Modal">
                                            서울
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="w-100 btn btn-outline-pet"
                                                data-bs-toggle="modal"
                                                data-bs-target="#location_02_Modal">
                                            부산/울산/경남
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {seoulModalOpen && (
                    <ModalPortal>
                        <ShopSeoulModal onClose={HandleSeoulModalShow} isOpen={true}/>
                    </ModalPortal>
                )}
                {kyoungSangModalOpen && (
                    <ModalPortal>
                        <ShopKyoungSangModal onClose={HandleKyoungSangModalShow} isOpen={true}/>
                    </ModalPortal>
                )}
            </main>
        </Layout>
    );
}

export default ShopList;