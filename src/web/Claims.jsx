import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Claims() {
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>
                {/* <img src="/image/claims/claims_01.jpg" className="d-block mt-4 mb-5 w-100" alt="..."/> */}
                <div className="container mt-3">
                    <div className="d-xl-flex w-100 me-5 mb-4">
                        {/* <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="" className="d-block w-100" alt="..."/></div> */}

                            <div class="coffee"> 
                            <img src="/image/claims/coffee.jpg"></img>
                            </div>

                        <div class="button" className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">브랜드별 카페 위치 찾기</div>
                            <div>브랜드별로 카페를 찾을 수 있습니다.</div>
                            <button type="button" className="btn btn-outline-pet mt-4 py-3" target="_blank"
                                    onClick="javascript:location.href='https://bocare.co.kr/v2/views/planner/insuranceRequest/agree/index.html?phone=18770117&loc=findfp'">
                                <i
                                    className="bi bi-check2-circle me-1"></i>FIND
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Claims;