function Footer(){
    return(
        <footer className="bg-bright text-dark mt-auto py-4">
            <div className="container py-4">
                <div className="d-xl-flex justify-content-between">
                    <a className="" href="/" target="_self">
                        <img src="/image/logo/logo_coffee.png" className="d-block w-50" alt="..."/>
                        <a href="https://kr.freepik.com/free-vector/coffee-icons-outline_993369.htm#query=coffee%20logo&position=15&from_view=search&track=ais">작가 0melapics</a> 출처 Freepik
                    </a>
                    <div className="text-pet mt-xxl-0 mt-3">
                        <div>☎ CUSTOMER CENTER</div>
                        <div className="fs-3">Tel.1234-5678</div>
                    </div>
                </div>
                <div className="d-xl-flex justify-content-between align-items-end fs-6_5">
                    <div className="mt-3 fs-6_5">
                        <div className="mt-1">· 대표 : 문설하</div>
                        <div className="mt-1">· 주소 : 인천광역시 미추홀구 매소홀로488번길 6-32 태승빌딩 5층 </div>
                        <div className="mt-1">· 연중무휴 </div>
                        <div className="mt-1">· COPYRIGHT(c) 2023 find cafe in your area ALL RIGHTS RESERVED .</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;