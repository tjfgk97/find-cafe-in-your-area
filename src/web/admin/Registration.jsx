import {useEffect, useState} from "react";
import DaumMap from "../../component/DaumMap/Map";
import {Map, MapMarker} from "react-kakao-maps-sdk";

function Registration() {
    const [enroll_company, setEnroll_company] = useState({
        address:'',
        x:'',
        y:''
    });

    const [state, setState] = useState({
        center : {lat: 37.49676871972202, lng: 127.02474726969814},
        marker : {lat: 37.49676871972202, lng: 127.02474726969814}
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }

    const handleSetCompany = (company) => {
        setEnroll_company(company);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }

    useEffect(() => {
        console.log(enroll_company);
        setState({
            center : {lat: parseInt(enroll_company.x), lng: parseInt(enroll_company.y)},
            marker : {lat: parseInt(enroll_company.x), lng: parseInt(enroll_company.y)}
        })
        console.log(state);
    }, [enroll_company])

    const handleSubmit = () => {
        let hospital_name = document.getElementById("hospital_name").value;
        let hospital_phone = document.getElementById("hospital_phone").value;
        let hospital_url = document.getElementById("hospital_url").value;
        let hospital_kakao_link = document.getElementById("hospital_kakao_link").value;
        let hospital_comment = document.getElementById("hospital_comment").value;
        let hospital_image_first = document.getElementById("hospital_image_first");
        let hospital_image_second = document.getElementById("hospital_image_second");
        let hospital_image_third = document.getElementById("hospital_image_third");

    }

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "250px"}}>
                <a href="/" className="d-flex justify-content-center text-white text-decoration-none">
                    <span className="fs-4"><i className="bi bi-house me-2"></i>Pet-mily</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <a href="#" className="nav-link text-white">
                            홈
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            동물병원 / 분양소 리스트
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            삭제내역
                        </a>
                    </li>
                </ul>
                <hr/>
                <div>
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                             className="rounded-circle me-2"/>
                        <div className="fs-6_5">로그아웃</div>
                    </a>
                </div>
            </div>

            <div className="container d-flex flex-column w-100 p-5 vh-100">
                <div className="text-center mb-4">
                    <div className="fs-3 mb-4">동물병원 / 분양소를 등록해보세요.</div>
                </div>

                <div className="d-flex mb-4">
                    <div className="w-100">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>동물병원 / 분양소명<span
                            className="text-danger">*</span></label>
                        <input id="hospital_name" name="hospital_name" value="" className="form-control py-3" type="text"
                               placeholder="ex. 우리첫째분양소"
                               aria-label="default input example" required="required"/>
                    </div>
                    <div className="w-100 mx-5">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>연락처<span
                            className="text-danger">*</span></label>
                        <input id="hospital_phone" name="hospital_phone" value="" className="form-control py-3" type="text"
                               placeholder="ex. 010-0000-0000"
                               aria-label="default input example" required="required"/>
                    </div>
                    <div className="w-100">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>URL주소생성 <span
                            className="fs-6_5">(ex. pet-mily.com/woripet)</span><span
                            className="text-danger">*</span></label>
                        <div className="d-flex align-items-center">
                            <input id="hospital_url" name="hospital_url" value="" className="form-control py-3 me-2" type="text"
                                   placeholder="ex. woripet"
                                   required="required"/>
                            <button id="" name="submitBtn" className="btn btn-outline-primary py-3 fs-6_5 word_break"
                                    type="submit">중복확인
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="w-100 me-4">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>카톡채널 <span
                            className="fs-6_5">(ex. http://pf.kakao.com/_dVwuT)</span></label>
                        <input id="hospital_kakao_link" name="hospital_kakao_link" value="" className="form-control py-3" type="text" placeholder="ex. _dVwuT"
                               aria-label="default input example" required="required"/>
                    </div>
                    <div className="w-100 ms-4">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>코멘트<span
                            className="text-danger">*</span></label>
                        <textarea className="form-control py-3" id="hospital_comment" name="hospital_comment" rows="1"
                                  placeholder="200자 제한"></textarea>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="w-100">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>홈페이지 이미지
                            ①<span className="text-danger">*</span></label>
                        <div className="input-group">
                            <label className="input-group" id="images" name="images" htmlFor="uploadImages">
                                <input id="displayUploadImages" className="form-control py-3"
                                       aria-describedby="basic-addon2"
                                       placeholder="이미지 등록 (※ 정사각형 추천)" type="text"/>
                                <input id="hospital_image_first" name="hospital_image_first" type="file" className="d-none" accept="image/*"/>
                                <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-100 mx-5">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>홈페이지 이미지
                            ②</label>
                        <div className="input-group">
                            <label className="input-group" id="images_two" htmlFor="images_two">
                                <input id="displayUploadImages" className="form-control py-3"
                                       aria-describedby="basic-addon2"
                                       placeholder="이미지 등록 (※ 정사각형 추천)" type="text"/>
                                <input id="hospital_image_second" name="hospital_image_second"  htmlFor="images_two" type="file" className="d-none" accept="image/*"/>
                                <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-100">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>홈페이지
                            이미지③</label>
                        <div className="input-group">
                            <label className="input-group" id="images_three" htmlFor="images_three">
                                <input id="displayUploadImages" className="form-control py-3"
                                       aria-describedby="basic-addon2"
                                       placeholder="이미지 등록 (※ 정사각형 추천)" type="text"/>
                                <input id="hospital_image_third" name="hospital_image_third" type="file" className="d-none" accept="image/*"/>
                                <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="w-100 me-4">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>동물병원 / 분양소 주소<span
                            className="text-danger">*</span></label>
                        <div className="mb-3">
                            <input id="addr_loc_lat" name="addr_loc_lat" defaultValue={enroll_company.x} hidden/>
                            <input id="addr_loc_lng" name="addr_loc_lng" defaultValue={enroll_company.y} hidden/>
                            <div className="mb-2">
                                <div className="input-group mb-2">
                                    <input id="frm_con_addr1" type="text" className="form-control py-3 rounded"
                                           placeholder="주소 검색"
                                           aria-label="주소 검색" aria-describedby="GetConAddrbtn"
                                           value={enroll_company.address}
                                           onChange={handleInput}/>
                                    <button className="btn btn-outline-secondary" type="button" onClick={handleComplete}><i
                                        className="bi bi-search"></i></button>
                                </div>
                                <input id="frm_con_addr2" type="text" className="form-control py-3"
                                       placeholder="나머지 주소"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 ms-4">
                        <label className="form-label text-start w-100" htmlFor="#"><i
                            className="bi bi-check2-circle me-1"></i>주소에 맞는 위치인지
                            확인하세요.</label>
                        <div className="mb-2">
                            <Map center={state.marker} style={{ width: "570px", height: "400px" }} draggable={false}>
                                <MapMarker position={state.marker}>
                                </MapMarker>
                            </Map>
                        </div>
                    </div>
                </div>
                <footer id="footer" className="u-footer--bottom-sticky mt-auto fs-6_5">
                    <div className="row align-items-center">
                        <div className="text-center">
                            <div className="d-block">· COPYRIGHT(c) 2023 팻밀리 ALL RIGHTS RESERVED .</div>
                        </div>
                    </div>
                </footer>
            </div>

            {popup && <DaumMap company={enroll_company} setcompany={setEnroll_company}></DaumMap>}
        </div>

    );
}

export default Registration;