import {useEffect, useState} from "react";
import axios from "axios";

function Header(props) {
    const handleMemberData = async () =>{
        const response = await axios.post("/api/getHospitalInfoByUrl", {
            url: props.url
        });

        sessionStorage.setItem('member', JSON.stringify(response.data.HospitalInfo));
        sessionStorage.setItem('memberThumbnail', JSON.stringify(response.data.HospitalInfoThumbnail));

        const hospital_name = document.getElementById('hospital_name');
        const hospital_phone = document.getElementById('hospital_phone');
        const kakao_link = document.getElementById('kakao_link');

        hospital_name.innerHTML = response.data.HospitalInfo.hospital_name;
        hospital_phone.href = `tel:${response.data.HospitalInfo.hospital_phone.replaceAll("-", "")}`;
        if(response.data.HospitalInfo.kakao_link == null || response.data.HospitalInfo.kakao_link == "" || response.data.HospitalInfo.kakao_link == undefined){
            kakao_link.parentElement.style.display = "none";
        }
        kakao_link.href = response.data.HospitalInfo.kakao_link;
    }
    useEffect(() => {
        handleMemberData();
    }, []);

    const goHome = () => {
        window.location.href = `/${props.url}`;
    }

    const goSupport = () => {
        window.location.href = `/support/${props.url}`;
    }

    const goComparison = () => {
        window.location.href = `/comparison/${props.url}`;
    }

    const goCard = () => {
        window.location.href = `/card/${props.url}`;
    }

    const goShopList = () => {
        window.location.href = `/shopList/${props.url}`;
    }

    const goClaims = () => {
        window.location.href = `/claims/${props.url}`;
    }

    return (
        <header className="navbar navbar-expand-md navbar-dark bg-pet bd-navbar">
            <nav className="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
                <a className="navbar-brand p-0 me-5" id="goHome" onClick={() => goHome()}>
                    <i className="bi bi-hospital me-2"></i><span id="hospital_name"></span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar"
                        aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                        </path>
                    </svg>
                </button>
                <div className="navbar-collapse collapse" id="bdNavbar">
                    <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" onClick={() => goSupport()}>
                                <i className="bi bi-clipboard-check me-2"></i>펫입양지원
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" aria-current="true" onClick={() => goCard()}>
                                <i className="bi bi-postcard-heart me-2"></i>펫전용카드
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" onClick={() => goComparison()}>
                                <i className="bi bi-arrow-through-heart me-2"></i>펫보험비교</a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" onClick={() => goClaims()}>
                                <i className="me-2 bi bi-pen"></i>펫보험금청구
                            </a>
                        </li>
                    </ul>
                    <hr className="d-md-none text-white-50"/>
                    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                        <li className="nav-item col-6 col-md-auto">
                            <a id="hospital_phone" className="text-light" href="">
                                <img src="/image/icons/incuiry_01.svg" className="d-inline-block me-1" width="25px"
                                     alt="..."/>
                                고객센터
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a id="kakao_link" className="text-light" href="" target="_blank">
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

export default Header;