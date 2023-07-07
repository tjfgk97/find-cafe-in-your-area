import {useEffect, useState} from "react";

function header(url) {
    const hospitalUrl = url;
    const [member, setMember] = useState({});
    const hospital_name = document.getElementById('hospital_name');
    const hospital_phone = document.getElementById('hospital_phone');
    const kakao_link = document.getElementById('kakao_link');

    const handleMemberData = async() => {

    }

    useEffect(() => {
        //데이터 불러오기
    }, []);

    return (
        <header className="navbar navbar-expand-md navbar-dark bg-pet bd-navbar">
            <nav className="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
                <a className="navbar-brand p-0 me-5" href="/">
                    <i className="bi bi-hospital me-2"></i><span id="hospital_name">제이동물병원</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar"
                        aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                        </path>
                    </svg>
                </button>
                <div className="navbar-collapse collapse" id="bdNavbar" style="">
                    <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="./support.html">
                                <i className="bi bi-clipboard-check me-2"></i>펫입양지원
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" aria-current="true" href="./card.html">
                                <i className="bi bi-postcard-heart me-2"></i>펫전용카드
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="./comparison.html">
                                <i className="bi bi-arrow-through-heart me-2"></i>펫보험비교</a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="./claims.html">
                                <i className="me-2 bi bi-pen"></i>펫보험금청구
                            </a>
                        </li>
                    </ul>
                    <hr className="d-md-none text-white-50"/>
                    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                        <li className="nav-item col-6 col-md-auto">
                            <a id="hospital_phone" className="text-light" href="tel:18770117" target="_blank">
                                <img src="/image/icons/incuiry_01.svg" className="d-inline-block me-1" width="25px"
                                     alt="..."/>
                                고객센터
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a id="kakao_link" className="text-light" href="http://pf.kakao.com/_EMMFxj" target="_blank">
                                <img src="/image/icons/incuiry_02.svg" className="d-inline-block me-1" width="25px"
                                     alt="..."/>
                                카카오톡
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default header;