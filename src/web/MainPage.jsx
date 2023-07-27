import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainPage() {
    const {url} = useParams();
    let info = {};
    const [member, setMember] = useState({});

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000
    };

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('member'));
        const thumbnail = JSON.parse(sessionStorage.getItem('memberThumbnail'));
        setMember(data);
        info = data;
        if (info != null) {
            const hospital_phone = document.getElementById('hospital_phone');
            const hospital_phone_display = document.getElementById('hospital_phone_display');
            const kakao_link = document.getElementById('kakao_main_link');
            const kakao_link_name = document.getElementById('kakao_main_link_name');
            const comment = document.getElementById('comment');
            const maker_name = document.getElementById('maker_name');
            const address = document.getElementById('address');
            const address_detail = document.getElementById('address_detail');
            const address_construct_name = document.getElementById('address_construct_name');

            let imageDiv = document.getElementById('imageDiv');
            imageDiv.innerHTML = "";

            hospital_phone.href = `tel:${info.hospital_phone.replaceAll("-", "")}`;
            hospital_phone_display.innerHTML = info.hospital_phone;
            if (info.kakao_link == null || info.kakao_link == "" || info.kakao_link == undefined) {
                kakao_link.style.display = "none";
            }

            kakao_link.href = info.kakao_link;
            kakao_link_name.innerHTML = info.hospital_name;
            comment.innerHTML = info.comment;
            address.innerHTML = info.address;
            address_detail.innerHTML = info.address_detail;
            address_construct_name.innerHTML = info.hospital_name;

            for (let i = 0; i < thumbnail.length; i++) {
                let divElement = document.createElement('div');
                let imgElement = document.createElement('img');
                if (i === 0) {
                    divElement.className = "carousel-item active";
                    imgElement.src = process.env.REACT_APP_API_IMAGE_ORIGIN + thumbnail[i].file_path;
                    imgElement.className = "d-block w-100";
                    divElement.appendChild(imgElement);
                } else {
                    divElement.className = "carousel-item";
                    imgElement.src = process.env.REACT_APP_API_IMAGE_ORIGIN + thumbnail[i].file_path;
                    imgElement.className = "d-block w-100";
                    divElement.appendChild(imgElement);
                }
                imageDiv.appendChild(divElement);
            }
        }
    }, [url]);

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
                    <div className="carousel">
                        <Slider {...settings}>
                           <div id="imageDiv">

                           </div>
                        </Slider>
                    </div>
                </div>

                <div className="bg-light" style={{
                    backgroundImage: "url(/image/dog.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    <div className="p-3">
                        <div className="fw-bold">Welcome ♡</div>
                        <div className="fs-6_5 px-3 pt-1"><span>"</span>
                            <span id="comment">
                                "안녕하세요, 저희는 고객님 주변에 있는 카페의 위치 정보를 알려드리는 서비스를 제공합니다."
                            </span>
                            <span>"</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <a className="d-flex align-items-center justify-content-center px-3 py-1 w-100" id="hospital_phone"
                       href="tel:18770117">
                        <img src="/image/icons/incuiry_01.svg" className="d-inline-block" alt="..."/>
                        <div>
                            <div className="fs-6_5 ms-2">전화문의</div>
                            <div className="fs-6_5 ms-2" id="hospital_phone_display">010-1234-5678</div>
                        </div>
                    </a>
                    <a className="align-items-center justify-content-center px-3 py-1 w-100" style={{display: "flex"}}
                       id="kakao_main_link"
                       href="https://open.kakao.com/o/s8ihnOxf" target="_blank">
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
                                        <div className="fw-bold mb-1 fs-5">내 주변 카페 찾기</div>
                                        <div className="fs-6_5">주변에 있는 카페를 찾아보세요.</div>
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
                                        <div className="fw-bold mb-1 fs-5">브랜드별 카페 찾기</div>
                                        <div className="fs-6_5">브랜드별 카페의 위치를 찾아보세요.</div>
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
                                        <div className="fw-bold mb-1 fs-5">카페 위치 비교하기</div>
                                        <div className="fs-6_5">가고 싶은 카페의 위치를 비교해보세요.</div>
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
                                        <div className="fw-bold mb-1 fs-5">길찾기</div>
                                        <div className="fs-6_5">해당 서비스를 이용해 효율적인 동선으로 이동하세요.</div>
                                    </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="my-4 px-3">
                    <Map center={{lat: member.loc_lat, lng: member.loc_lng}}
                         style={{width: "570px", height: "400px"}} draggable={false}>
                        <MapMarker position={{lat: member.loc_lat, lng: member.loc_lng}}>
                        </MapMarker>
                    </Map>
                    <div className="mt-3 fw-bold"><i className="bi bi-map me-1"></i>찾아오시는 길</div>
                    <div className="mt-1 fs-6_5"><span id="address">인천 미추홀루 매소홀로 488번길 6-32 (학익동) 태승빌딩 5층</span> <span id="address_detail">2층</span></div>
                    <div className="fs-6_5" id="address_construct_name">find cafe in your area</div>
                </div>
            </main>
        </Layout>
    );
}

export default MainPage;