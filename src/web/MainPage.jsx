import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";

function MainPage() {
    const {url} = useParams();
    let info = {};

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('member'));
        info = data;
        if(info != null){
            const hospital_phone = document.getElementById('hospital_phone');
            const hospital_phone_display = document.getElementById('hospital_phone_display');
            const kakao_link = document.getElementById('kakao_main_link');
            const kakao_link_name = document.getElementById('kakao_main_link_name');
            const comment = document.getElementById('comment');
            const maker_name = document.getElementById('maker_name');

            hospital_phone.href = `tel:${info.hospital_phone.replaceAll("-", "")}`;
            hospital_phone_display.innerHTML = info.hospital_phone;
            if(info.kakao_link == null || info.kakao_link == "" || info.kakao_link == undefined){
                kakao_link.style.display = "none";
            }

            kakao_link.href = info.kakao_link;
            kakao_link_name.innerHTML = info.kakao_link_name;
            comment.innerHTML = info.comment;
        }
    }, []);

    const goHome = () => {
        window.location.href = `/${url}`;
    }

    const goSupport = () => {
        window.location.href = `/support/${url}`;
    }

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
                <div id="carouselExampleIndicators_mobile" className="carousel slide border-top border-bottom"
                     data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators_mobile" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators_mobile" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src="/image/slide/slide_01_m.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="/image/slide/slide_02_m.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleIndicators_mobile"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleIndicators_mobile"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="bg-light" style={{backgroundImage:"url(/image/dog.png)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                    <div className="p-3">
                        <div className="fw-bold">Welcome ♡</div>
                        <div className="fs-6_5 px-3 pt-1"><span>"</span>
                            <span id="comment">
                                안녕하세요, 반갑습니다. 저희는 부산 범일동에 위치한 동물병원으로 동물을 아끼고 사랑하는 마음으로 최고의 서비스를 약속 드립니다.
                            </span>
                            <span>"</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <a className="d-flex align-items-center justify-content-center px-3 py-1 w-100" id="hospital_phone" href="tel:18770117">
                        <img src="/image/icons/incuiry_01.svg" className="d-inline-block" alt="..."/>
                            <div>
                                <div className="fs-6_5 ms-2">전화문의</div>
                                <div className="fs-6_5 ms-2" id="hospital_phone_display">051-125-5561</div>
                            </div>
                    </a>
                    <a className="align-items-center justify-content-center px-3 py-1 w-100" style={{display:"flex"}} id="kakao_main_link"
                       href="http://pf.kakao.com/_EMMFxj" target="_blank">
                        <img src="/image/icons/incuiry_02.svg" className="d-inline-block" alt="..."/>
                            <div>
                                <div className="fs-6_5 ms-2">카톡문의</div>
                                <div className="fs-6_5 ms-2" id="kakao_main_link_name">JpetKatoc</div>
                            </div>
                    </a>
                </div>

                <div className="container mt-4">
                    <div className="mb-3">
                        <a onClick={() => goComparison()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3">
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/button_01.svg" className="d-block w-25" alt="..."/>
                                        <div className="w-50 pl-5">
                                            <div className="fw-bold mb-1 fs-5">펫 보험비교</div>
                                            <div className="fs-6_5">각 보험사 펫보험을 한눈에 비교 분석</div>
                                        </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a onClick={() => goClaims()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3">
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/button_04.svg" className="d-block w-25" alt="..."/>
                                        <div className="50 pl-5">
                                            <div className="fw-bold mb-1 fs-5">펫 보험금청구</div>
                                            <div className="fs-6_5">간편한 펫보험 청구</div>
                                        </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a onClick={() => goCard()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3">
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/button_05.svg" className="d-block w-25" alt="..."/>
                                        <div className="w-50 pl-5">
                                            <div className="fw-bold mb-1 fs-5">펫 전용 카드</div>
                                            <div className="fs-6_5">펫을 위한 전용 신용카드</div>
                                        </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a onClick={() => goSupport()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3">
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/button_03.svg" className="d-block w-25" alt="..."/>
                                        <div className="w-50 pl-5">
                                            <div className="fw-bold mb-1 fs-5">펫 입양지원</div>
                                            <div className="fs-6_5">펫 분양비 최대 320만원 지원!</div>
                                        </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="my-4 px-3">
                    <Map center={{ lat: 37.558090961074825, lng: 126.99847210567884 }} style={{ width: "570px", height: "400px" }} draggable={false}>
                        <MapMarker position={{ lat: 37.558090961074825, lng: 126.99847210567884 }}>
                        </MapMarker>
                    </Map>
                        <div className="mt-3 fw-bold"><i className="bi bi-map me-1"></i>찾아오시는 길</div>
                        <div className="mt-1 fs-6_5">부산광역시 동구 범일로102번길 16-3 2층</div>
                        <div className="fs-6_5">제이동물병원</div>
                </div>
            </main>
        </Layout>
    );
}

export default MainPage;