import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

function CustomerModify(){
    const {customerIdx} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(customerIdx);
    },[]);

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
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "250px"}}>
                <a href="/admin/main" className="d-flex justify-content-center text-white text-decoration-none">
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
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>동물병원 / 분양소명<span
                            className="text-danger">*</span></label>
                        <input id="" name="" value="" className="form-control py-3" type="text"
                               placeholder="ex. 우리첫째분양소"
                               aria-label="default input example" required="required"/>
                    </div>
                    <div className="w-100 mx-5">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>연락처<span
                            className="text-danger">*</span></label>
                        <input id="" name="" value="" className="form-control py-3" type="text"
                               placeholder="ex. 010-0000-0000"
                               aria-label="default input example" required="required"/>
                    </div>
                    <div className="w-100">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>URL주소생성 <span
                            className="fs-6_5">(ex. pet-mily.com/woripet)</span><span
                            className="text-danger">*</span></label>
                        <div className="d-flex align-items-center">
                            <input id="" name="" value="" className="form-control py-3 me-2" type="text"
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
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>카톡채널 <span
                            className="fs-6_5">(ex. http://pf.kakao.com/_dVwuT)</span></label>
                        <input id="" name="" value="" className="form-control py-3" type="text" placeholder="ex. _dVwuT"
                               aria-label="default input example" required="required"/>
                    </div>
                    <div className="w-100 ms-4">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>코멘트<span
                            className="text-danger">*</span></label>
                        <textarea className="form-control py-3" id="frm_proc_memo" rows="1"
                                  placeholder="200자 제한"></textarea>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="w-100">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>홈페이지 이미지
                            ①<span className="text-danger">*</span></label>
                        <div className="input-group">
                            <label className="input-group" id="images" name="images" for="uploadImages">
                                <input id="displayUploadImages" className="form-control py-3"
                                       aria-describedby="basic-addon2"
                                       placeholder="이미지 등록 (※ 정사각형 추천)" type="text" for="uploadImages" readonly=""/>
                                <input id="uploadImages" type="file" className="d-none" accept="image/*" multiple=""/>
                                <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-100 mx-5">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>홈페이지 이미지
                            ②</label>
                        <div className="input-group">
                            <label className="input-group" id="images" name="images" for="uploadImages">
                                <input id="displayUploadImages" className="form-control py-3"
                                       aria-describedby="basic-addon2"
                                       placeholder="이미지 등록 (※ 정사각형 추천)" type="text" for="uploadImages" readonly=""/>
                                <input id="uploadImages" type="file" className="d-none" accept="image/*" multiple=""/>
                                <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-100">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>홈페이지
                            이미지③</label>
                        <div className="input-group">
                            <label className="input-group" id="images" name="images" for="uploadImages">
                                <input id="displayUploadImages" className="form-control py-3"
                                       aria-describedby="basic-addon2"
                                       placeholder="이미지 등록 (※ 정사각형 추천)" type="text" for="uploadImages" readonly=""/>
                                <input id="uploadImages" type="file" className="d-none" accept="image/*" multiple=""/>
                                <span className="btn btn-outline-primary py-3" id="basic-addon2">파일 선택</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="w-100 me-4">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>동물병원 / 분양소 주소<span
                            className="text-danger">*</span></label>
                        <div className="mb-3">
                            <input type="hidden" id="frm_con_loc_lat" value="35.1766444250604"/>
                            <input type="hidden" id="frm_con_loc_lng" value="129.12540818123"/>
                            <div className="mb-2">
                                <div className="input-group mb-2">
                                    <input id="frm_con_addr1" type="text" className="form-control py-3 rounded"
                                           placeholder="주소 검색"
                                           aria-label="주소 검색" aria-describedby="GetConAddrbtn"
                                           onclick="execDaumPostcode('frm_con_addr')" readonly=""/>
                                    <button className="btn btn-outline-secondary d-none" type="button"
                                            id="GetConAddrbtn"><i
                                        className="bi bi-search"></i></button>
                                </div>
                                <input id="frm_con_addr2" type="text" className="form-control py-3"
                                       placeholder="나머지 주소"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 ms-4">
                        <label className="form-label text-start w-100" for="#"><i
                            className="bi bi-check2-circle me-1"></i>주소에 맞는 위치인지
                            확인하세요.</label>
                        <div className="mb-2">


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
        </div>
    );
}

export default CustomerModify;