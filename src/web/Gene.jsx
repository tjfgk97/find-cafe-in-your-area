import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Gene() {
    const {url} = useParams();

    const goComparison = () => {
        window.location.href = `/comparison/${url}`;
    }

    const goCard = () => {
        window.location.href = `/card/${url}`;
    }

    const goShopList = () => {
        window.location.href = `/shopList/${url}`;
    }

    const goClaims = () => {
        window.location.href = `/claims/${url}`;
    }

    return (
        <Layout url={url}>
            <main>
                <div className="container d-block d-xl-none">
                    <div className="d-xxl-flex mt-3 mt-xxl-0 mb-5">
                        <div className="d-flex">
                            <button id="pet_ins_compare" className="btn btn-outline-dark p-3 px-xl-5 me-xxl-2 w-100" onClick={() => goComparison()}><i
                                className="bi bi-clipboard-check me-2"></i>펫보험비교
                            </button>
                            <button id="pet_card" className="btn btn-outline-dark p-3 px-xl-5 me-xxl-2 w-100" onClick={() => goCard()}><i
                                className="bi bi-postcard-heart me-2"></i>펫전용카드
                            </button>
                        </div>
                        <div className="d-flex">
                            <button id="pet_give" className="btn btn-outline-dark p-3 px-xl-5 me-xxl-2 w-100" onClick={() => goShopList()}><i
                                className="bi bi-arrow-through-heart me-2"></i>펫입양소
                            </button>
                            <button id="pet_ins_req" className="btn btn-outline-dark p-3 px-xl-5 w-100" onClick={() => goClaims()}><i
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
                            src="/image/icons/pet_03.jpg" className="d-block w-100" alt="..."/></div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">펫 유전자 검사</div>
                            <div>나의 가족 반려동물의 유전자를 검사하여 반려동물의 삶의 질을 향상시켜 보세요.</div>
                            <div className="border rounded p-5 mt-3"><span className="text-pet">상품 준비중</span>입니다.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Gene;