export const siteConfig = {
  name: '한울드론',
  mainMenus: [
    {
      title: '메인',
      href: '/',
      items: [],
    },
    {
      title: '솔루션',
      href: '/solutions',
      items: [],
    },
    {
      title: '소식',
      href: '/blog',
      items: [],
    },
  ],
  landingPage: {
    solutionsInfo: [
      {
        imgSrc: '/image/solution0.jpg',
        imgText: '시설물 안전 점검',
        title: '물류 배송 드론',
        description:
          '도서 산간 지역 배송, 긴급 의약품 배송, 라스트마일 배송 등 다양한 물류 분야에 최적화된 드론 솔루션',
      },
      {
        imgSrc: '/image/solution1.jpg',
        imgText: '의약품 배송',
        title: '군용 드론',
        description:
          '정찰, 감시, 통신 중계, 전술 작전 지원 등 국방 분야의 다양한 임무에 맞게 설계된 고성능 드론 솔루션',
      },
      {
        imgSrc: '/image/solution3.jpg',
        imgText: '화재 감시 및 진압',
        title: '맞춤형 드론 솔루션',
        description:
          '다양한 산업 분야에 맞춘 특화된 드론 솔루션으로 고객의 요구사항을 충족한 솔루션 제공',
      },
    ],
    vision: [
      {
        imgSrc: '/image/icon0.png',
        style: 'bg-teal-200/50 px-4 py-3',
        title: '목표 지향',
        description:
          '신속, 정확하게 이동하여 안전하고 완벽하게 임무를 달성합니다.',
      },
      {
        imgSrc: '/image/icon1.png',
        style: 'ml-3 bg-amber-400/40',
        title: '창의와 혁신',
        description:
          '창의적이고 혁신적인 아이디어를 위해 다양한 방법을 모색합니다.',
      },
      {
        imgSrc: '/image/icon2.png',
        style: 'bg-red-500/40 p-4',
        title: '협동과 소통',
        description:
          '가장 큰 임팩트를 낼 수 있는 목표를 향해 자유롭게 소통하며 몰입합니다.',
      },
    ],
    history: [
      {
        dateTime: '2024-04',
        label: '국방벤처기업 인증',
        description: '국방기술진흥연구소 주관',
      },
      {
        dateTime: '2024-03',
        label: '디지털 물류서비스 실증 사업',
        description: 'VTOL 의약품 배송 분야\n국토교통부 주관',
      },
      {
        dateTime: '2024-03',
        label: '드론 실증 도시 구축 사업(서산)',
        description: '물품 배송 분야 사업자 선정',
      },
      {
        dateTime: '2023-12',
        label: '벤처기업 인증',
        description: '중소벤처기업부',
      },
      {
        dateTime: '2023-04',
        label: '드론 실증도시 구축 사업(서산, 태안)',
        description: '초기 화재 감시 및 진압 분야\nVTOL 의약품 배송 분야',
      },
      {
        dateTime: '2023-03',
        label: '청년창업사관학교 기업 선정',
        description: '중소벤처기업부',
      },
      { dateTime: '2022-12', label: '한울드론 법인 설립' },
    ],
    membersInfo: [
      {
        imgSrc: '/image/member-ceo.png',
        name: '엄송근',
        position: 'Founder & CEO',
        introduction:
          '한서대 항공시스템공학 석사 학위를 취득하고, 한울드론을 공동창업 하였습니다. 인공지능 기술을 연구 하였습니다.',
      },
      {
        imgSrc: '/image/member-cto.png',
        name: '김정훈',
        position: 'Co-Founder & CTO',
        introduction:
          '한서대 항공시스템공학 석사 학위를 취득하고, 한울드론을 공동창업 하였습니다. 편대비행 및 충돌회피 기술을 연구 하였으며 다양한 실증에 참여한 이력이 있습니다.',
      },
    ],
  },
  footer: {
    ceo: '엄송근',
    address: '충청남도 태안군 남면 곰섬로 236-49, 216호(창업2관)',
    email: 'hanuldrone3@hanuldrone.com',
    foundedYear: 2023,
  },
};
