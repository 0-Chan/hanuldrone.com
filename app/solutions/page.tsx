import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/layouts/site-footer';
import { Button } from '@/components/ui/button';

import { siteConfig } from '@/config/site';

const solutionDetails: {
  [key: string]: {
    pageDescription: string;
    mainSolutionDescription: string;
    features: { icon: JSX.Element; title: string; description: string }[];
    coreTechnologies?: {
      icon: JSX.Element;
      title: string;
      description: string;
    }[];
    applicationAreas?: { title: string; description: string }[];
    examples?: {
      icon: JSX.Element;
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
    }[];
  };
} = {
  '물류 배송 드론': {
    pageDescription:
      '물류 및 배송 분야에 최적화된 고성능 드론 솔루션을 제공합니다.',
    mainSolutionDescription:
      '(주)한울드론의 물류 배송 드론 솔루션은 도서 산간 지역 배송, 긴급 의약품 배송, 라스트마일 배송 등 다양한 물류 분야에서 효율성과 접근성을 높이는 첨단 기술을 제공합니다. 고객의 요구에 맞는 맞춤형 드론과 소프트웨어로 물류 프로세스를 혁신합니다.',
    features: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M12 18v-6" />
            <path d="M8 18v-1" />
            <path d="M16 18v-3" />
          </svg>
        ),
        title: 'AI기반 실시간 비행 데이터 분석',
        description:
          '고급 AI 알고리즘을 활용한 실시간 비행 데이터 분석으로 기체 안정성을 확보합니다. 기상 조건, 배터리 상태, 모터 성능 등을 지속적으로 모니터링하여 최적의 비행 경로와 안전성을 보장합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        title: '경로 최적화',
        description:
          '실시간 교통 데이터와 머신러닝을 활용한 배송 경로 최적화 솔루션으로 배송 시간을 단축하고 연료 비용을 절감합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <path d="m13 7 4 -4 4 4" />
            <path d="m13 7 4 4 4 -4" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        ),
        title: '실시간 장애물 회피',
        description:
          '첨단 센서와 컴퓨터 비전 기술을 활용한 실시간 장애물 감지 및 회피 시스템으로 도심 환경과 복잡한 지형에서도 안전한 비행을 보장합니다. 예측할 수 없는 장애물에도 즉각 대응하여 충돌을 방지합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2v8" />
            <path d="m4.93 10.93 1.41 1.41" />
            <path d="M2 18h2" />
            <path d="M20 18h2" />
            <path d="m19.07 10.93-1.41 1.41" />
            <path d="M22 22H2" />
            <path d="m16 6-4 4-4-4" />
            <path d="M16 18a4 4 0 0 0-8 0" />
          </svg>
        ),
        title: '자율 배송 시스템',
        description:
          '자율주행 차량 및 드론을 활용한 첨단 배송 시스템으로 라스트 마일 배송의 효율성과 속도를 높입니다.',
      },
    ],
    examples: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-blue-600"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        title: '서산시 드론 물류 배송 실증사업',
        subtitle: '국토교통부 주관 드론 실증도시 구축사업',
        description:
          '서산시와 협력하여 도서 지역 의약품 배송 실증사업을 성공적으로 수행했습니다. VTOL(수직이착륙) 드론을 활용하여 접근성이 낮은 지역에 필수 의약품을 신속하게 배송함으로써 지역 주민의 의료 접근성을 크게 향상시켰습니다.',
        highlights: [
          '의약품 배송 시간 70% 단축',
          '도서 지역 의료 접근성 개선',
          '2023년 4월부터 실증 운영 중',
        ],
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-blue-600"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        title: '보령시 디지털 물류서비스 실증사업',
        subtitle: '국토교통부 주관 디지털 물류서비스 실증 사업',
        description:
          '보령시와 함께 진행한 디지털 물류서비스 실증사업에서 드론을 활용한 도서 지역 생필품 배송 시스템을 구축했습니다. 기상 조건에 영향을 적게 받는 안정적인 드론 운영으로 섬 지역 주민들에게 정기적인 물류 서비스를 제공하고 있습니다.',
        highlights: [
          '생필품 정기 배송 서비스 구축',
          '악천후 상황에서도 85% 이상의 운영 안정성',
          '2025년 3월부터 정식 서비스 예정',
        ],
      },
    ],
  },
  '군용 드론': {
    pageDescription:
      '국방 및 안보 분야에 최적화된 고성능 군용 드론 솔루션을 제공합니다.',
    mainSolutionDescription:
      '(주)한울드론의 군용 드론은 정찰, 감시, 통신 중계, 전술 작전 지원 등 국방 분야의 다양한 임무에 맞게 설계된 고성능 솔루션입니다. 극한 환경에서도 안정적인 성능을 발휘하며 국가 안보를 위한 중요한 임무를 수행합니다.',
    features: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m12 8 4 4" />
            <path d="m8 12 4 4" />
            <path d="m16 8-8 8" />
          </svg>
        ),
        title: '군용 물류 배송 드론',
        description:
          '모듈형 멀티콥터 설계로 양방향로드 페이로드를 지원하는 고성능 드론입니다. 최대 적재 10kg, 비행거리 30km의 성능을 갖추고 있으며, 이중 GNSS + RTK 적용으로 ±25 cm급 위치 정확도를 제공합니다. GNSS 불가 환경 대응을 위한 INS + LiDAR SLAM 기술을 탑재했습니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
        ),
        title: '직충돌 무력화 드론',
        description:
          'Fan-in-Body VTOL 구조로 수직이착륙 후 고속 전진이 가능한 하이브리드 드론입니다. GNSS 불가 환경 대응을 위한 INS + LiDAR SLAM 기술을 탑재했으며, 직접틸(Kinetic framing) 조작으로 틸트 없이 기체 자세 유지가 가능합니다. 자율 군집 비행 기능을 갖추어 1:N 타겟 → 다중 분산 운영이 가능합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
          </svg>
        ),
        title: '자율 편대비행 및 충돌회피 플랫폼',
        description:
          '여러 기체 동시 관제(i-V Line 등 형상) 자동 유지 기능을 제공합니다. 3D 지형 데이터 기반 실시간 경로 생성 및 재계획이 가능하며, 확률론적 안전거리 알고리즘 확보기술로 다중 충돌 위험을 최소화합니다. 기상 시뮬레이션 연동으로 임무 시나리오 사전 검증 및 AI 학습 지원 기능을 제공합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        title: '실시간 비행데이터 분석 및 이상 탐지 플랫폼',
        description:
          'PX4/MAVLink 텔레메트리 지원으로 주요 전장(모터, 컨트롤러, 배터리 상태)을 실시간 모니터링합니다. 모터 ESC, IMU 등 주요 센서 이상 1sec 내 실시간 탐지가 가능하며, 예측 데이터 - 실시간 데이터 간 오차 그래프 위험 등급 시각화 기능을 제공합니다. 예측변수(PvM) 모델로 기체별 부품 수명 추정 과제 수행 기능을 갖추고 있습니다.',
      },
    ],
    coreTechnologies: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        title: '모듈형 멀티콥터 설계',
        description:
          '양방향로드 페이로드를 지원하는 모듈형 설계로 다양한 임무 장비를 신속하게 교체하고 장착할 수 있습니다. 최대 적재 10kg, 비행거리 30km의 성능으로 다양한 군사 작전을 지원합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        title: 'GNSS 불가 환경 대응 기술',
        description:
          'INS(관성항법장치) + LiDAR SLAM 기술을 통해 GPS 신호가 차단된 환경에서도 정확한 위치 파악과 자율 비행이 가능합니다. 이중 GNSS + RTK 적용으로 ±25 cm급의 높은 위치 정확도를 제공합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        title: 'Fan-in-Body VTOL 구조',
        description:
          '수직이착륙 후 고속 전진이 가능한 하이브리드 드론 기술로, 직접틸(Kinetic framing) 조작을 통해 틸트 없이 기체 자세를 유지할 수 있습니다. 자율 군집 비행 기능으로 1:N 타겟에 대한 다중 분산 운영이 가능합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        title: '실시간 비행데이터 분석',
        description:
          'PX4/MAVLink 텔레메트리 지원으로 모터, ESC, IMU 등 주요 센서의 이상을 1초 내에 감지하고, 예측 데이터와 실시간 데이터 간 오차를 그래프로 시각화하여 위험 등급을 표시합니다. 예측변수(PvM) 모델을 통해 기체별 부품 수명을 추정하는 기능을 제공합니다.',
      },
    ],
    applicationAreas: [
      {
        title: '국경 보안',
        description:
          '첨단 감시 시스템 및 자율 순찰 로봇으로 국경 보안을 강화합니다.',
      },
      {
        title: '군사 작전',
        description:
          '정보 수집, 분석, 의사결정 지원 시스템으로 작전 효율성을 높입니다.',
      },
      {
        title: '재난 대응',
        description:
          '자연 재해 및 인공 재난 상황에서의 신속한 대응 및 구조 작업을 지원합니다.',
      },
      {
        title: '중요 인프라 보호',
        description:
          '국가 중요 시설 및 인프라에 대한 물리적, 사이버 보안을 강화합니다.',
      },
    ],
    examples: [],
  },
};

export default function Solutions() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {siteConfig.landingPage.solutionsInfo.map((solution, index) => {
        const details = solutionDetails[solution.title];
        return (
          <React.Fragment key={index}>
            <section className="bg-blue-900 py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                  <h1
                    id={solution.imgText}
                    className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
                  >
                    {solution.title}
                  </h1>
                  <p className="text-lg text-blue-100 md:text-xl">
                    {details?.pageDescription || solution.description}
                  </p>
                </div>
              </div>
            </section>

            <section className="py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl">
                  <div className="mb-12 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-blue-950">
                      {solution.title}{' '}
                      {solution.title.includes('드론') ? '기술' : '솔루션'}
                    </h2>
                    <p className="text-lg text-blue-700">
                      {details?.mainSolutionDescription ||
                        `(주)한울드론의 ${solution.title} 솔루션은 다양한 분야에서 효율성과 접근성을 높이는 첨단 기술을 제공합니다. 고객의 요구에 맞는 맞춤형 드론과 소프트웨어로 프로세스를 혁신합니다.`}
                    </p>
                    <div className="aspect-video overflow-hidden rounded-lg bg-blue-100">
                      <Image
                        src={solution.imgSrc}
                        alt={solution.imgText}
                        width={1280}
                        height={720}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {details?.features && details.features.length > 0 && (
                    <div className="mb-12">
                      <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950">
                        주요 솔루션
                      </h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        {details.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
                          >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                              {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-blue-950">
                              {feature.title}
                            </h3>
                            <p className="text-blue-700">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* eslint-disable indent */}
                  {details?.coreTechnologies &&
                    details.coreTechnologies.length > 0 && (
                      <div className="mb-12">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950">
                          핵심 기술
                        </h2>
                        <div className="space-y-4">
                          {details.coreTechnologies.map((tech, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="mr-4 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                {tech.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-blue-950">
                                  {tech.title}
                                </h3>
                                <p className="text-blue-700">
                                  {tech.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {details?.applicationAreas &&
                    details.applicationAreas.length > 0 && (
                      <div className="mb-12">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950">
                          적용 분야
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2">
                          {details.applicationAreas.map((area, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-blue-50 p-4"
                            >
                              <h3 className="mb-2 font-bold text-blue-950">
                                {area.title}
                              </h3>
                              <p className="text-sm text-blue-700">
                                {area.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  {/* eslint-enable indent */}

                  {details?.examples && details.examples.length > 0 && (
                    <div className="mb-12">
                      <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950">
                        지자체 실증 사례
                      </h2>
                      <div className="space-y-6">
                        {details.examples.map((example, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
                          >
                            <div className="mb-4 flex items-center">
                              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                {example.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-blue-950">
                                  {example.title}
                                </h3>
                                <p className="text-blue-700">
                                  {example.subtitle}
                                </p>
                              </div>
                            </div>
                            <p className="mb-4 text-blue-700">
                              {example.description}
                            </p>
                            <div className="space-y-2 text-blue-700">
                              {example.highlights.map((highlight, hIdx) => (
                                <p key={hIdx} className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-5 w-5 text-blue-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  {highlight}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
      <SiteFooter />
    </div>
  );
}
