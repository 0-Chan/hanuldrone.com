export const siteConfig = {
  name: '한울드론',
  mainMenus: [
    {
      title: '메인',
      href: '/',
      submenus: [
        {
          title: '회사 소개',
          description: '한울드론의 미션과 가치',
          href: '/#company',
        },
        {
          title: '비전',
          description: '한울드론이 추구하는 미래',
          href: '/#vision',
        },
        {
          title: '연혁',
          description: '한울드론의 성장 스토리',
          href: '/#history',
        },
      ],
    },
    {
      title: '솔루션',
      href: '/solutions',
      submenus: [
        {
          title: '물류 배송 드론',
          description:
            '도서 산간 지역 배송, 긴급 의약품 배송, 라스트마일 배송 등 다양한 물류 분야에 최적화된 드론 솔루션',
          href: '/solutions#logistics',
        },
        {
          title: '군용 드론',
          description:
            '정찰, 감시, 통신 중계, 전술 작전 지원 등 국방 분야의 다양한 임무에 맞게 설계된 고성능 드론 솔루션',
          href: '/solutions#defense',
        },
      ],
    },
    {
      title: '리소스',
      href: '/resources',
      submenus: [
        {
          title: '뉴스',
          description: '한울드론의 소식과 최신 기술 정보',
          href: '/blog',
        },
        {
          title: '블로그',
          description: '드론 산업의 최신 트렌드와 한울드론의 소식',
          href: '/blog',
        },
      ],
    },
  ],
  landingPage: {
    solutionsInfo: [
      {
        imgSrc: '/image/solution0.jpg',
        imgText: 'logistics',
        title: '물류 배송 드론',
        description:
          '도서 산간 지역 배송, 긴급 의약품 배송, 라스트마일 배송 등 다양한 물류 분야에 최적화된 드론 솔루션',
      },
      {
        imgSrc: '/image/solution1.jpg',
        imgText: 'defense',
        title: '군용 드론',
        description:
          '정찰, 감시, 통신 중계, 전술 작전 지원 등 국방 분야의 다양한 임무에 맞게 설계된 고성능 드론 솔루션',
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
    values: [
      {
        icon: 'CrownIcon',
        title: '도전',
        description:
          '두려움 없이 어려운 목표에 뛰어들어 미지의 영역을 개척합니다.',
      },
      {
        icon: 'SunriseIcon',
        title: '혁신',
        description: '끊임없는 기술 혁신으로 한계를 넘어 갑니다.',
      },
      {
        icon: 'LightbulbIcon',
        title: '창의',
        description: '창의적 사고로 남들이 풀지 못한 문제를 해결합니다.',
      },
      {
        icon: 'ShieldUserIcon',
        title: '책임감',
        description: '맡은 바 역할과 결과에 끝까지 책임감을 가집니다.',
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
  },
  footer: {
    ceo: '엄송근',
    address: '충청남도 태안군 남면 곰섬로 236-49, 216호(창업2관)',
    email: 'hanuldrone3@hanuldrone.com',
    foundedYear: 2023,
  },
};
