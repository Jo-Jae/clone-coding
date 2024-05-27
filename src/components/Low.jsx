const Low = () => {
  return (
    <div className="bg-black m-0 ">
      <section className=" pt-11 max-w-[1080px] mx-auto text-[16px]">
        <div className="flex justify-between items-start">
          <img
            className="h-[27px]"
            src="/images/logo-white.svg"
            alt="zigbang_white_logo"
          />
          <nav className="flex flex-col text-[#cccccc]">
            <button className="mb-3 text-left text-white font-semibold">
              직방 소개
            </button>
            <button className="text-left">기업 소개</button>
            <button className="text-left">직방 부동산 서비스</button>
            <button className="text-left">직방 우리집 서비스</button>
            <button className="text-left">직방 스마트홈</button>
            <button className="text-left">Soma</button>
            <button className="text-left">뉴스룸</button>
            <button className="text-left">채용</button>
            <button className="text-left">ESG Report</button>
            <button className="text-left">Zigbang.com</button>
          </nav>
          <nav className="flex flex-col text-[#cccccc]">
            <button className="mb-3 text-left text-white font-semibold">
              직방 브랜트 파트너스
            </button>
            <button className="text-left">직방 파트너스</button>
            <button className="text-left">호갱노노</button>
            <button className="text-left">네모</button>
            <button className="text-left">온하우스</button>
            <button className="text-left">우주</button>
            <button className="text-left">브리즈인베스트먼트</button>
            <button className="text-left">소마</button>
          </nav>
          <nav className="flex flex-col text-[#cccccc]">
            <button className="mb-3 text-left text-white font-semibold">
              고객센터
            </button>
            <button className="text-left">TEL 02-568-4909</button>
            <button className="text-left">FAX 02-568-4908</button>
            <button className="text-left">
              <span className="font-semibold">EMAIL</span> <br />
              contact@zigbang.com
            </button>
            <button className="text-left">
              <span className="font-semibold">중개사무소 가입 및 광고문의</span>
              <br /> 1661-8734
            </button>
            <button className="text-left">
              <span className="font-semibold">직방 스마트홈 문의</span>
              1588-4141
            </button>
            <button className="text-left">
              <span className="font-semibold">직방 모빌 문의</span> 1899-6527
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Low;
