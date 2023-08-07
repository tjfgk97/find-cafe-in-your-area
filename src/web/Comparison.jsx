import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";

function Comparison(){
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>
                    <div className="container mt-3">
                        <div className="row">
                            {/* <div className="mb-5 w-100">
                                <img src="/image/pet_comparison/pet_comparison_hy_01.jpg" className="d-block mb-2 w-100"
                                     alt="..."/>
                                    <button type="button" className="btn btn-dark mt-0 mt-xxl-4 py-3 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#hyundai_modal">
                                        <i className="bi bi-check2-circle me-1"></i>자세히 보기
                                    </button>
                            </div>
                            <div className="mb-5 w-100">
                                <img src="/image/pet_comparison/pet_comparison_sam_01.jpg" className="d-block mb-2 w-100"
                                     alt="..."/>
                                    <button type="button" className="btn btn-dark mt-0 mt-xxl-4 py-3 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#samsung_modal">
                                        <i className="bi bi-check2-circle me-1"></i>자세히 보기
                                    </button>
                            </div>
                            <div className="mb-5 w-100">
                                <img src="/image/pet_comparison/pet_comparison_meritz_01.jpg"
                                     className="d-block mb-2 w-100"
                                     alt="..."/>
                                    <button type="button" className="btn btn-dark mt-0 mt-xxl-4 py-3 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#meritz_modal">
                                        <i className="bi bi-check2-circle me-1"></i>자세히 보기
                                    </button>
                            </div> */}

                                <img class="cafe_bar" src="/image/pet_comparison/cafe_bar.jpg"></img>
                            
                        </div>
                        <div className="d-xl-flex w-100 me-5 mb-4">
                            {/* <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                                src="/image/icons/pet_01.jpg" className="d-block w-100" alt="..."/></div> */}
                            <div className="d-flex flex-column justify-content-center w-100">
                                <div className="fs-4 mb-1 text-pet"><br></br>주변 카페 찾기</div>
                                <div>현위치를 중심으로 주변에 위치한 카페를 찾을 수 있도록 도와드립니다.</div>
                                <button type="button" className="btn btn-outline-pet mt-4 py-3" data-bs-toggle="modal"
                                        data-bs-target="#comparison_modal">
                                    <i className="bi bi-check2-circle me-1"></i>FIND
                                </button>
                            </div>
                        </div>
                    </div>
            </main>
        </Layout>
    );
}

export default Comparison;