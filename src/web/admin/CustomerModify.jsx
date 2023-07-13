import {useParams} from "react-router-dom";
import {useEffect} from "react";

function CustomerModify(){
    const {customerIdx} = useParams();

    useEffect(()=>{
        console.log(customerIdx);
    },[]);

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

                            <div id="ConMap" className="w-100"
                                 style="height: 300px; position: relative; overflow: hidden; background: url(&quot;https://t1.daumcdn.net/mapjsapi/images/bg_tile.png&quot;);">
                                <div
                                    style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; touch-action: none; cursor: url(&quot;https://t1.daumcdn.net/mapjsapi/images/cursor/openhand.cur.ico&quot;) 7 5, url(&quot;https://t1.daumcdn.net/mapjsapi/images/cursor/openhand.cur.ico&quot;), default;">
                                    <div style="position: absolute;">
                                        <div style="position: absolute; z-index: 0;"></div>
                                        <div style="position: absolute; z-index: 1; left: 0px; top: 0px;"><img
                                            src="https://map1.daumcdn.net/map_2d/2306uwn/L4/485/825.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: -233px; top: 114px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map2.daumcdn.net/map_2d/2306uwn/L4/485/826.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 23px; top: 114px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map3.daumcdn.net/map_2d/2306uwn/L4/485/827.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 279px; top: 114px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map0.daumcdn.net/map_2d/2306uwn/L4/485/828.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 535px; top: 114px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map1.daumcdn.net/map_2d/2306uwn/L4/486/825.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: -233px; top: -142px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map2.daumcdn.net/map_2d/2306uwn/L4/486/826.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 23px; top: -142px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map3.daumcdn.net/map_2d/2306uwn/L4/486/827.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 279px; top: -142px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map0.daumcdn.net/map_2d/2306uwn/L4/486/828.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 535px; top: -142px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map1.daumcdn.net/map_2d/2306uwn/L4/487/825.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: -233px; top: -398px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map2.daumcdn.net/map_2d/2306uwn/L4/487/826.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 23px; top: -398px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map3.daumcdn.net/map_2d/2306uwn/L4/487/827.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 279px; top: -398px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/><img
                                            src="https://map0.daumcdn.net/map_2d/2306uwn/L4/487/828.png" alt=""
                                            role="presentation" draggable="false"
                                            style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 535px; top: -398px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"/>
                                        </div>
                                        <div style="position: absolute; z-index: 1;"></div>
                                        <div style="width: 755px; height: 300px; position: absolute; z-index: 1;"></div>
                                        <div style="position: absolute; z-index: 1;">
                                            <svg version="1.1"
                                                 style="stroke: none; stroke-dashoffset: 0.5; stroke-linejoin: round; fill: none; transform: translateZ(0px); position: absolute; width: 3775px; height: 1500px; left: -1510px; top: -600px;"
                                                 viewBox="0 0 3775 1500">
                                                <defs></defs>
                                            </svg>
                                        </div>
                                        <div
                                            style="position: absolute; z-index: 1; width: 100%; height: 0px; transform: translateZ(0px);">
                                            <div
                                                style="position: absolute; margin: -39px 0px 0px -14px; z-index: 0; left: 377px; top: 150px;">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style="position: absolute; cursor: default; z-index: 1; margin: 0px 6px; height: 19px; line-height: 14px; left: 0px; bottom: 0px; color: rgb(0, 0, 0);">
                                    <div style="color: rgb(0, 0, 0); text-align: center; font-size: 10px; float: left;">
                                        <div
                                            style="float: left; margin: 2px 3px 0px 4px; height: 6px; transition: width 0.1s ease 0s; border-top: none rgb(0, 0, 0); border-right: 2px solid rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); border-left: 2px solid rgb(0, 0, 0); border-image: initial; width: 46px;">
                                        </div>
                                        <div
                                            style="float: left; margin: 0px 4px 0px 0px; font-family: AppleSDGothicNeo-Regular, 돋움, dotum, sans-serif; font-weight: bold; color: rgb(0, 0, 0);">
                                            100m
                                        </div>
                                    </div>
                                    <div style="margin: 0px 4px; float: left;"><a target="_blank"
                                                                                  href="http://map.kakao.com/"
                                                                                  title="Kakao 지도로 보시려면 클릭하세요."
                                                                                  style="float: left; width: 32px; height: 10px;"><img
                                        src="https://t1.daumcdn.net/mapjsapi/images/m_bi_b.png" alt="Kakao 지도로 이동"
                                        style="float: left; width: 32px; height: 10px; border: none;"/></a>
                                        <div
                                            style="font: 11px / 11px Arial, Tahoma, Dotum, sans-serif; float: left;"></div>
                                    </div>
                                </div>
                                <div style="cursor: auto; position: absolute; z-index: 2; left: 0px; top: 0px;"></div>
                            </div>
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