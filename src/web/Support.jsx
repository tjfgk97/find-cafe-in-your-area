import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";

function Support() {
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>
                <div className="container mt-3">
                    {/* <div className="d-block row">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide"
                             data-bs-ride="carousel"
                             data-bs-interval="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                                        aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                                        aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6"
                                        aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7"
                                        aria-label="Slide 8"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/image/support/TY웰컴케어 소개 (1).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (2).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (3).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개3"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (4).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개4"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (5).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개5"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (6).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개6"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (7).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개7"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/TY웰컴케어 소개 (8).jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개8"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 mb-2">
                        <img src="/image/support/NDP100_all.jpg" className="d-block w-100" alt="TY웰컴케어소개6"/>
                    </div> */}


                        <br></br><img class="kind" src="/image/support/kind.jpg"></img>

                    <div className="d-xl-flex w-100 me-5 mb-4">
                        {/* <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/pet_05.jpg" className="d-block w-100" alt="..."/></div> */}
                        <div className="d-flex flex-column justify-content-center w-100">
                            <br></br><div className="fs-4 mb-1 text-pet">커피의 종류</div>
                            <div>커피의 종류에 대해 알려드려요.</div>
                            <button type="button" className="btn btn-outline-pet mt-4 py-3" data-bs-toggle="modal"
                                    data-bs-target="#comparison_modal">
                                <i className="bi bi-check2-circle me-1"></i>알아보기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Support;