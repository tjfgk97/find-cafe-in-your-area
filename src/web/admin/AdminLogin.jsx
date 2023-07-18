import './Style/AdminPageCommon.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

function AdminLogin() {
    const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);
    const [isRemember, setIsRemember] = useState(false);
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(cookies.userInfo !== undefined){
            document.getElementById("remember").checked = true;
            setAccount(cookies.userInfo);
            setIsRemember(true);
        }
    },[]);

    const handleOnChange = (e) => {
        setIsRemember(e.target.checked);
        setCookie("userInfo", account, {path: "/admin"})
        if (!e.target.checked) {
            removeCookie("userInfo");
        }
    };

    const Auth = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/api/login', {
                account:account,
                password:password
            });

            navigate("/admin/main");
        }catch (error){
            alert("로그인에 실패하였습니다. 다시 시도하여 주세요.");
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="form-signin text-center bg-light d-flex"
             style={{minHeight: "100vh", minWidth: "100%", fontFamily: "Noto Sans KR, sans-serif"}}>
            <form className="align-self-center justify-content-center mx-auto" style={{minWidth: "350px"}}
                  onSubmit={Auth}><img
                className="mb-4"
                src="/image/logo/logo.svg" alt="펫밀리로고"/>
                <div className="fs-2 mb-3">로그인</div>
                <div className="form-floating mb-1"><input type="text" className="form-control" id="account"
                                                           placeholder="아이디 입력"
                                                           name="account" value={account} onChange={(e) => setAccount(e.target.value)} /><label>아이디</label></div>
                <div className="form-floating"><input type="password" className="form-control" id="password"
                                                      placeholder="Password"
                                                      name="비밀번호 입력"  value={password} onChange={(e) => setPassword(e.target.value)}/><label>비밀번호</label></div>
                <div className="checkbox mb-3"><label><input id="remember" type="checkbox" value="remember-me" onChange={handleOnChange}/> 아이디 저장</label></div>
                <button
                    className="w-100 btn btn-lg btn-primary" type="submit" id="login">로그인
                </button>
                <p className="mt-5 mb-3 text-muted">BOCARE 고객센터 1566-4875</p>
            </form>
        </div>
    );
}

export default AdminLogin;