import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Card() {
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>

                <div className="container mt-3">
                    {/* <div>
                        <img src="/image/pet_card/pet_card_01.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pet_card_02.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pet_card_03.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pet_card_04.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pet_card_05.jpg" className="d-block w-100"
                             alt="..."/>
                        <img src="/image/pet_card/pet_card_06.jpg" className="d-block w-100"
                             alt="..."/>
                        <img src="/image/pet_card/pet_card_07.jpg" className="d-block w-100"
                             alt="..."/>
                        <img src="/image/pet_card/pet_card_08.jpg"
                             className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pet_card_09.jpg"
                             className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pet_card_010.jpg"
                             className="d-block w-100" alt="..."/>
                    </div> */}

                       <br></br> <img class="coffeetree" src="/image/pet_card/coffeetree.png"></img>

                    <div className="d-xl-flex w-100 me-5 mb-4">
                        {/* <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/pet_02.jpg" className="d-block w-100" alt="..."/></div> */}
                        <div className="d-flex flex-column justify-content-center w-100">
                            <br></br><div className="fs-4 mb-1 text-pet">커피의 품종</div>
                            <div>원두의 품종에 대해 알아봐요.</div>
                          <br></br>  <button type="button" className="btn btn-outline-pet mt-4 py-3" target="_blank"
                                    onClick="javascript:location.href='https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1773&alncmpC=GP007465&affcode=GP007465'">
                                <i className="bi bi-check2-circle me-1"></i>알아보기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Card;