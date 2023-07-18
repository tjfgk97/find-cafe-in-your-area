import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

function CustomerList() {
    const [account, setAccount] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const [hospitalList, setHospitalList] = useState([]);
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        refreshToken();
        getUsers();
        getHospitalList();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('/api/token');
            setToken(response.data.accessToken);

            const decoded = jwtDecode(response.data.accessToken);
            setAccount(decoded.account);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/admin");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('/api/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setAccount(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('/api/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    const getHospitalList = async () => {
        const response = await axiosJWT.get('/api/getHospitalList', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setSearchList(response.data);
        setHospitalList(response.data);
    }

    const deleteHospital = async (id) => {
        try {
            await axios.post('/api/deleteHospital', {id: id}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            alert("삭제되었습니다.");
            getHospitalList();
        } catch (error) {
            console.log(error);
        }
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

    const handleSearch = () => {
        const searchValue = document.getElementById("searchData").value;
        const filtered = hospitalList.filter((hospital) => {
            return hospital.hospital_name.indexOf(searchValue) > -1;
        });
        setSearchList(filtered);
    }

    return (
        <main className="d-flex form-signin text-center bg-light"
              style={{minHeight: "100vh", minWidth: "100%", fontFamily: "Noto Sans KR, sans-serif"}}>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <a href="/admin/main" className="d-flex justify-content-center text-white text-decoration-none">
                    <span className="fs-4"><i className="bi bi-house me-2"></i>Pet-mily</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <a href="/admin/main" className="nav-link text-white">
                            홈
                        </a>
                    </li>
                    <li>
                        <a href="/admin/main" className="nav-link text-white">
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

            <div className="d-flex flex-column w-100 p-5 vh-100">
                <div className="d-flex align-items-center mb-4">
                    <div className="fs-3">반갑습니다, 펫밀리님.</div>
                    <a href="/admin/customer/register" className="btn btn-primary ms-auto">동물병원 / 분양소 리스트 등록</a>
                </div>

                <div className="input-group mb-5">
                    <input type="hidden" name="" id="" value="title"/>
                    <input onChange={() => handleSearch()} id="searchData" type="text" className="form-control py-3" placeholder="동물병원 / 분양소명을 입력하세요."
                           aria-label="동물병원 / 분양소명을 입력하세요."
                           aria-describedby="searchButton"/>
                    <button id="searchButton" className="btn btn-outline-secondary" type="button"><i
                        className="bi bi-search"></i></button>
                </div>
                <div className="table-responsive">
                    <table className="table u-table--v3" role="grid">
                        <thead className="thead-light">
                        <tr role="row">
                            <th className="text-center">동물병원 / 분양소명</th>
                            <th className="text-center">연락처</th>
                            <th className="text-center">URL주소</th>
                            <th className="text-center">주소</th>
                            <th className="text-center">추가주소</th>
                            <th className="text-center">카톡채널</th>
                            <th className="text-center">코멘트</th>
                            <th className="text-center"></th>
                        </tr>
                        </thead>
                        <tbody className="fs-6_5">
                        {
                            searchList.map((hospital, index) => (
                                <tr className="text-center" key={index}>
                                    <td className="py-3"><a
                                        href={`/admin/customer/modify/${hospital.id}`}>{hospital.hospital_name}</a></td>
                                    <td className="py-3">{hospital.hospital_phone}</td>
                                    <td className="py-3"><a className="" href="#" target="_blank">{hospital.url}</a>
                                    </td>
                                    <td className="py-3">{hospital.address}</td>
                                    <td className="py-3">{hospital.address_detail}</td>
                                    <td className="py-3">{hospital.kakao_link}</td>
                                    <td className="py-3">{hospital.comment}</td>
                                    <td className="py-3"><a onClick={() => deleteHospital(hospital.id)}
                                                            target="_self">병원삭제</a></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <footer id="footer" className="u-footer--bottom-sticky mt-auto fs-6_5">
                    <div className="row align-items-center">
                        <div className="text-center">
                            <div className="d-block">· COPYRIGHT(c) 2023 팻밀리 ALL RIGHTS RESERVED .</div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>);
}

export default CustomerList;