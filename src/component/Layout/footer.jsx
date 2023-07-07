function footer(){
    return(
        <footer className="bg-dark text-light mt-auto py-4">
            <div className="container py-4">
                <div className="d-xl-flex justify-content-between">
                    <a className="" href="/" target="_self">
                        <img src="/image/logo/logo_m.svg" className="d-block w-50" alt="..."/>
                    </a>
                    <div className="text-pet mt-xxl-0 mt-3">
                        <div>CUSTOMER CENTER</div>
                        <div className="fs-3">Tel.1877-0117</div>
                    </div>
                </div>
                <div className="d-xl-flex justify-content-between align-items-end fs-6_5">
                    <div className="mt-3 fs-6_5">
                        <div className="mt-1">· 대표 : 김태진</div>
                        <div className="mt-1">· 주소 : 경상남도 진주시 충의로 20-33 5층 502호</div>
                        <div className="mt-1">· 평일 : 10:00~18:00 | 점심시간 : 12:30~13:30 | 주말/공휴일 : 휴무</div>
                        <div className="mt-1">· COPYRIGHT(c) 2023 팻밀리 ALL RIGHTS RESERVED .</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;