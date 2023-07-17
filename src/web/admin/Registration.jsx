import {useEffect, useState} from "react";
import DaumMap from "../../component/DaumMap/Map";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [enroll_company, setEnroll_company] = useState({
        address: '',
        lng: '128.148190498094',
        lat: '35.1758875643309'
    });

    const [popup, setPopup] = useState(false);
    const [urlDulipcate, setUrlDulipcate] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        console.log(enroll_company);
    }, [enroll_company]);

    const handleComplete = (data) => {
        setPopup(!popup);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let hospital_name = document.getElementById("hospital_name").value;
        let hospital_phone = document.getElementById("hospital_phone").value;
        let hospital_url = document.getElementById("hospital_url").value;
        let hospital_kakao_link = document.getElementById("hospital_kakao_link").value;
        let hospital_comment = document.getElementById("hospital_comment").value;
        let hospital_image_first = document.getElementById("hospital_image_first");
        let hospital_image_second = document.getElementById("hospital_image_second");
        let hospital_image_third = document.getElementById("hospital_image_third");
        let hospital_image = document.getElementsByName("hospital_image");

        let hospital_address = document.getElementById("hospital_address").value;
        let hospital_address_detail = document.getElementById("hospital_address_detail").value;
        let hospital_address_lat = document.getElementById("hospital_address_lat").value;
        let hospital_address_lng = document.getElementById("hospital_address_lng").value;

        if (hospital_name === "") {
            alert("동물병원 / 분양소명을 입력해주세요.");
            return false;
        }

        if (hospital_phone === "") {
            alert("연락처를 입력해주세요.");
            return false;
        }

        if (hospital_url === "") {
            alert("URL주소생성을 입력해주세요.");
            return false;
        }

        if(urlDulipcate === false){
            alert("url 중복체크를 해주세요.");
            return false;
        }

        if (hospital_kakao_link === "") {
            alert("카톡채널을 입력해주세요.");
            return false;
        }

        if (hospital_comment === "") {
            alert("한줄소개를 입력해주세요.");
            return false;
        }

        if (hospital_address === "") {
            alert("주소를 선택해주세요.");
            return false;
        }

        if (hospital_address_detail === "") {
            alert("상세주소를 입력해주세요.");
            return false;
        }

        if (hospital_image_first.files.length === 0) {
            alert("대표이미지를 입력해주세요.");
            return false;
        }

        //서버로 데이터 보내기
        const formData = new FormData();
        formData.append("name", hospital_name);
        formData.append("phone", hospital_phone);
        formData.append("url", hospital_url);
        formData.append("kakao_link", hospital_kakao_link);
        formData.append("comment", hospital_comment);
        formData.append("address", hospital_address);
        formData.append("address_detail", hospital_address_detail);
        formData.append("address_lat", hospital_address_lat);
        formData.append("address_lng", hospital_address_lng);

        hospital_image.forEach((file) => {
            formData.append("image", file.files[0]);
        });

        await axios.post("/api/registrationHospital", formData,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })

        alert("등록이 완료돠었습니다.");

        navigate("/admin/main");
    }

    const urlDulipcateCheck = () => {
        let hospital_url = document.getElementById("hospital_url").value;

        if(hospital_url === ""){
            alert("url을 입력하여주세요.");
            return;
        }

        axios.post("/api/urlCheck", {
            url : hospital_url
        }).then((res) => {
            console.log(res.data);
            if (res.data === "possible") {
                setUrlDulipcate(true);
                alert("사용가능한 URL입니다.");
            } else {
                setUrlDulipcate(false);
                hospital_url = "";
                alert("중복된 URL입니다.");
            }
        })
    }

    const handleFileChange = (originId, tagId) => {
        let imageFile = document.getElementById(originId).files[0];
        console.log(imageFile);
        let inputFileName = document.getElementById(tagId);
        console.log(inputFileName);

        inputFileName.value = imageFile.name;
    }

    //로그아웃 기능
    const Logout = async () => {
        try {
            await axios.delete('/api/logout');
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form encType='multipart/form-data'>
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
                    </ul>
                    <hr/>
                    <div>
                        <a onClick={() => Logout()} className="d-flex align-items-center text-white text-decoration-none">
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
                            <label className="form-label text-start w-100"><i
                                className="bi bi-check2-circle me-1"></i>동물병원 / 분양소명<span
                                className="text-danger">*</span></label>
                            <input id="hospital_name" name="hospital_name" className="form-control py-3"
                                   type="text"
                                   placeholder="ex. 우리첫째분양소"/>
                        </div>
                        <div className="w-100 mx-5">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>연락처<span
                                className="text-danger">*</span></label>
                            <input id="hospital_phone" name="hospital_phone" className="form-control py-3"
                                   type="text"
                                   placeholder="ex. 010-0000-0000"
                                   aria-label="default input example"/>
                        </div>
                        <div className="w-100">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>URL주소생성 <span
                                className="fs-6_5">(ex. pet-mily.com/woripet)</span><span
                                className="text-danger">*</span></label>
                            <div className="d-flex align-items-center">
                                <input id="hospital_url" name="hospital_url" className="form-control py-3 me-2"
                                       type="text"
                                       placeholder="ex. woripet"/>
                                <button className="btn btn-outline-primary py-3 fs-6_5 word_break"
                                        type="button" onClick={() => urlDulipcateCheck()}>중복확인
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-4">
                        <div className="w-100 me-4">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>카톡채널 <span
                                className="fs-6_5">(ex. http://pf.kakao.com/_dVwuT)</span></label>
                            <input id="hospital_kakao_link" name="hospital_kakao_link"
                                   className="form-control py-3" type="text" placeholder="ex. _dVwuT"
                                   aria-label="default input example"/>
                        </div>
                        <div className="w-100 ms-4">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>코멘트<span
                                className="text-danger">*</span></label>
                            <textarea className="form-control py-3" id="hospital_comment" name="hospital_comment"
                                      rows="1"
                                      placeholder="200자 제한"></textarea>
                        </div>
                    </div>
                    <div className="d-flex mb-4">
                        <div className="w-100">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>홈페이지 이미지
                                ①<span className="text-danger">*</span></label>
                            <div className="input-group">
                                <label className="input-group" id="images" htmlFor="hospital_image_first">
                                    <input id="hospital_image_first_name" className="form-control py-3"
                                           aria-describedby="basic-addon2"
                                           placeholder="이미지 등록 (※ 정사각형 추천)" type="text" readOnly={true}/>
                                    <input id="hospital_image_first" name="hospital_image" type="file"
                                           className="d-none" accept="image/*" onChange={() => handleFileChange('hospital_image_first', 'hospital_image_first_name')}/>
                                    <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                                </label>
                            </div>
                        </div>
                        <div className="w-100 mx-5">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>홈페이지 이미지
                                ②</label>
                            <div className="input-group">
                                <label className="input-group" id="images_two" htmlFor="hospital_image_second">
                                    <input id="hospital_image_second_name" className="form-control py-3"
                                           aria-describedby="basic-addon2"
                                           placeholder="이미지 등록 (※ 정사각형 추천)" type="text" readOnly={true}/>
                                    <input id="hospital_image_second" name="hospital_image" htmlFor="images_two"
                                           type="file" className="d-none" accept="image/*" onChange={() => handleFileChange('hospital_image_second', 'hospital_image_second_name')}/>
                                    <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                                </label>
                            </div>
                        </div>
                        <div className="w-100">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>홈페이지
                                이미지③</label>
                            <div className="input-group">
                                <label className="input-group" id="images_three" htmlFor="hospital_image_third">
                                    <input id="hospital_image_third_name" className="form-control py-3"
                                           aria-describedby="basic-addon2"
                                           placeholder="이미지 등록 (※ 정사각형 추천)" type="text" readOnly={true}/>
                                    <input id="hospital_image_third" name="hospital_image" type="file"
                                           className="d-none" accept="image/*" onChange={() => handleFileChange('hospital_image_third', 'hospital_image_third_name')}/>
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
                                <input id="hospital_address_lat" name="hospital_address_lat" defaultValue={enroll_company.lat} hidden/>
                                <input id="hospital_address_lng" name="hospital_address_lng" defaultValue={enroll_company.lng} hidden/>
                                <div className="mb-2">
                                    <div className="input-group mb-2">
                                        <input id="hospital_address" type="text" className="form-control py-3 rounded"
                                               placeholder="주소 검색"
                                               aria-label="주소 검색" aria-describedby="GetConAddrbtn"
                                               value={enroll_company.address}
                                               onChange={handleInput}/>
                                        <button className="btn btn-outline-secondary" type="button"
                                                onClick={handleComplete}><i
                                            className="bi bi-search"></i></button>
                                    </div>
                                    <input id="hospital_address_detail" type="text" className="form-control py-3"
                                           placeholder="나머지 주소"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 ms-4">
                            <label className="form-label text-start w-100" htmlFor="#"><i
                                className="bi bi-check2-circle me-1"></i>주소에 맞는 위치인지
                                확인하세요.</label>
                            <div className="mb-2">
                                <Map center={{lng: enroll_company.lng, lat: enroll_company.lat}}
                                     style={{width: "570px", height: "400px"}} draggable={false}>
                                    <MapMarker position={{lng: enroll_company.lng, lat: enroll_company.lat}}>
                                    </MapMarker>
                                </Map>
                            </div>
                        </div>
                        <button type="button" onClick={handleSubmit}>등록</button>
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
            </form>
        </div>
    );
}

export default Registration;