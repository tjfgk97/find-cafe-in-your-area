import Layout from "../component/Layout/Layout";

function MainPage() {
    return (
        <Layout>
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
                            <a href="./support.html" target="_self">
                                <img src="/image/slide/slide_01_m.jpg" className="d-block w-100" alt="..."/>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="./claims.html" target="_self">
                                <img src="/image/slide/slide_02_m.jpg" className="d-block w-100" alt="..."/>
                            </a>
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
                            안녕하세요, 반갑습니다. 저희는 부산 범일동에 위치한 동물병원으로 동물을 아끼고 사랑하는 마음으로 최고의 서비스를 약속 드립니다.
                            <span>"</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <a className="d-flex align-items-center justify-content-center px-3 py-1 w-100" href="tel:18770117">
                        <img src="/image/icons/incuiry_01.svg" className="d-inline-block" alt="..."/>
                            <div>
                                <div className="fs-6_5 ms-2">전화문의</div>
                                <div className="fs-6_5 ms-2">051-125-5561</div>
                            </div>
                    </a>
                    <a className="d-flex align-items-center justify-content-center px-3 py-1 w-100"
                       href="http://pf.kakao.com/_EMMFxj" target="_blank">
                        <img src="/image/icons/incuiry_02.svg" className="d-inline-block" alt="..."/>
                            <div>
                                <div className="fs-6_5 ms-2">카톡문의</div>
                                <div className="fs-6_5 ms-2">JpetKatoc</div>
                            </div>
                    </a>
                </div>

                <div className="container mt-4">
                    <div className="mb-3">
                        <a href="./comparison.html" target="_self">
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
                        <a href="./claims.html" target="_self">
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
                        <a href="./card.html" target="_self">
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
                        <a href="./support.html" target="_self">
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
                    <img className="img-fluid" src="img/map.jpg" alt="Image Description"/>
                        <div className="mt-3 fw-bold"><i className="bi bi-map me-1"></i>찾아오시는 길</div>
                        <div className="mt-1 fs-6_5">부산광역시 동구 범일로102번길 16-3 2층</div>
                        <div className="fs-6_5">제이동물병원</div>
                </div>
            </main>
        </Layout>
    );
}

export default MainPage;