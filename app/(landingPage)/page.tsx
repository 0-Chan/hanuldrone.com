'use client';

import React from 'react';
import { useRef, useState, useEffect, useMemo } from 'react';

import { motion } from 'framer-motion';

import Balancer from 'react-wrap-balancer';
import { ScrollWrapper } from './scrollSections/scroll-wrapper';

import { SiteFooter } from '@/components/layouts/site-footer';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { ArrowDownIcon, ArrowRight } from 'lucide-react';

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState('hero');

  // 섹션 ID 배열을 useMemo로 감싸기
  const sections = useMemo(
    () => ['hero', 'solutions', 'vision', 'team', 'partners'],
    [],
  );

  // 파트너 로고 데이터
  const partnerLogos = useMemo(
    () => [
      { src: '/image/logo4.jpg', alt: '국방부', width: 200, height: 75 },
      { src: '/image/logo3.jpg', alt: '한서대학교', width: 200, height: 55 },
      { src: '/image/logo0.jpg', alt: '국토부', width: 194, height: 72 },
      { src: '/image/logo1.png', alt: '서산시', width: 200, height: 50 },
      { src: '/image/logo2.jpg', alt: '태안군', width: 140, height: 80 },
      { src: '/image/logo4.jpg', alt: '국방부', width: 240, height: 100 },
      { src: '/image/logo3.jpg', alt: '한서대학교', width: 200, height: 55 },
      { src: '/image/logo0.jpg', alt: '국토부', width: 194, height: 72 },
      { src: '/image/logo1.png', alt: '서산시', width: 200, height: 50 },
      { src: '/image/logo2.jpg', alt: '태안군', width: 140, height: 80 },
    ],
    [],
  );

  // 섹션 이동 함수
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  // 현재 활성화된 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (
          currentPosition >= top - 450 &&
          currentPosition < top + height - 400
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <main className="overflow-x-hidden">
      <div className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'scale-125 bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`스크롤 ${section} 섹션으로 이동`}
          />
        ))}
      </div>

      <ScrollWrapper ref={ref} className="h-full" id="hero">
        <div className="w-full">
          <div className="relative w-full bg-gradient-to-b from-blue-500 to-blue-700 pb-[56.25%]">
            <div className="absolute inset-0 z-0">
              <VideoPlayer
                src="/video/CES_HanulDrone_homepage_muted.mp4"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex justify-center">
            <ArrowDownIcon className="size-8 absolute -top-10 left-1/2 -translate-x-1/3 animate-bounce text-white md:-top-20" />
          </div>
        </div>
      </ScrollWrapper>

      <ScrollWrapper ref={ref} id="solutions" className="bg-gray-50 py-20">
        <div className="relative mx-10 h-[43%] lg:h-3/4 lg:w-3/4">
          <div className="mb-12 text-center">
            <h2
              id="solutions"
              className="mb-4 text-3xl font-bold tracking-tight text-blue-950"
            >
              핵심 서비스
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              <span className="block">
                한울드론은 첨단 기술과 혁신적인 솔루션으로
              </span>
              <span className="block">
                다양한 산업 분야에 최적화된 드론 서비스를 제공합니다.
              </span>
            </p>
          </div>
          <div className={cn('grid gap-8 md:grid-cols-3')}>
            {siteConfig.landingPage.solutionsInfo.map((solution, index) => {
              return (
                <div
                  key={index}
                  className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-blue-600">
                    <Image
                      src={solution.imgSrc}
                      alt={solution.imgText}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {solution.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                  <Link
                    href={`/solutions/${solution.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    className="flex items-center text-sm font-medium text-blue-600 hover:underline"
                  >
                    자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollWrapper>

      <ScrollWrapper id="company" className="py-20">
        <div className="container mx-10 px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="company"
                className="mb-6 text-3xl font-bold tracking-tight text-blue-950"
              >
                회사 소개
              </h2>
              <p className="mb-6 text-lg text-blue-900">
                (주)한울드론은 2022년에 설립된 기술 혁신 기업으로, 첨단 드론
                기술을 활용하여 다양한 산업 분야의 문제를 해결하고 있습니다.
                우리는 고객의 비즈니스 성장과 발전을 위한 최적의 솔루션을
                제공하기 위해 끊임없이 연구하고 개발합니다.
              </p>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950">
                      혁신적인 기술
                    </h3>
                    <p className="text-gray-700">
                      최신 기술을 활용한 드론 솔루션으로 산업 현장의 효율성과
                      안전성을 높입니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950">
                      전문 인력
                    </h3>
                    <p className="text-gray-700">
                      드론 기술 분야의 전문가들이 모여 최고의 솔루션을
                      개발합니다.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/main/company">더 알아보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollWrapper>

      <ScrollWrapper id="vision" className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2
              id="vision"
              className="mb-4 text-3xl font-bold tracking-tight text-blue-950"
            >
              비전 및 미션
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-700">
              한울드론이 추구하는 가치와 목표를 소개합니다.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {/* 비전 */}
            <div className="rounded-lg border border-blue-100 bg-white p-8 shadow-sm">
              <div className="mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 py-2 text-center">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  VISION
                </h3>
              </div>
              <div className="mb-6 text-center">
                <p className="text-lg font-medium text-blue-700">
                  지능형 드론 기술로 사람과 지역사회를 연결하고,
                  <br />
                  지속 가능한 사회적 가치를 창출합니다.
                </p>
              </div>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <div className="mr-2 min-w-[120px] font-bold text-blue-950">
                    지능형 드론 기술:
                  </div>
                  <div className="text-gray-700">
                    AI시간 자율비행, 군집비행, 장애물 회피 등 첨단기술을 보유
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 min-w-[120px] font-bold text-blue-950">
                    사람과 지역사회 연결:
                  </div>
                  <div className="text-gray-700">
                    도서지역 물류, 재난 대응, 공공안수 등의의 상생
                  </div>
                </div>
              </div>
            </div>

            {/* 미션 */}
            <div className="rounded-lg border border-blue-100 bg-white p-8 shadow-sm">
              <div className="mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 py-2 text-center">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  MISSION
                </h3>
              </div>
              <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-6">
                <p className="font-medium text-blue-700">
                  &ldquo;우리는 자율비행 기반의 드론 솔루션을 통해 국방 안보를
                  강화하고, 지역 사회의 공공안전 및 물류 접근성을 개선하여
                  기술로 사회적 불균형을 해소합니다.&rdquo;
                </p>
              </div>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <div className="mr-2 min-w-[120px] font-bold text-blue-950">
                    자율비행 기반 솔루션:
                  </div>
                  <div className="text-gray-700">
                    한울드론만의 개발 중인 핵심 기술 집중
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 min-w-[120px] font-bold text-blue-950">
                    국방 안보:
                  </div>
                  <div className="text-gray-700">
                    방산 전문의 전략적 방향 반영
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-8 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/main/vision">비전 자세히 보기</Link>
            </Button>
          </div> */}
        </div>
      </ScrollWrapper>

      <ScrollWrapper
        ref={ref}
        id="history"
        className="bg-gray-50 py-16 md:py-24"
      >
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2
              id="history"
              className="mb-4 text-3xl font-bold tracking-tight text-blue-950"
            >
              주요 연혁
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-700">
              (주)한울드론의 성장 과정과 주요 이정표를 소개합니다.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute bottom-0 left-16 top-0 w-1 bg-blue-200"></div>

              {/* 2022년 */}
              <div className="relative mb-8 pl-24">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2022
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                  <p className="font-medium text-red-500">
                    • (주) 한울드론 법인 설립
                  </p>
                </div>
              </div>

              {/* 2023년 */}
              <div className="relative mb-8 pl-24">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2023
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-blue-700">
                    • 청년창업사관학교 기업 선정 (중소벤처기업부 주관)
                  </p>
                  <p className="mb-2 text-blue-700">
                    • 드론 실증도시 구축 사업 VTOL 의약품 배송 분야 사업자 선정
                  </p>
                  <p className="mb-2 font-medium text-red-500">
                    • 기업부설 연구소 등록
                  </p>
                  <p className="font-medium text-red-500">• 벤처기업 인증</p>
                </div>
              </div>

              {/* 2024년 */}
              <div className="relative mb-8 pl-24">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2024
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-blue-700">
                    • 드론 실증도시 구축사업 물품 배송 분야 사업자 선정
                  </p>
                  <p className="mb-2 text-blue-700">
                    • 디지털 물류서비스 실증 사업 VTOL 의약품 배송 분야 사업자
                    선정
                  </p>
                  <p className="mb-2 font-medium text-red-500">
                    • 연구개발기업 인증
                  </p>
                  <p className="text-blue-700">
                    • 육해공 무인이동체 챌린지 우수상 수상
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/main/history">연혁 자세히 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollWrapper>
      <ScrollWrapper ref={ref} id="team">
        <div className="relative h-1/3 w-3/4 space-y-4 md:space-y-12">
          <div
            className={cn(
              'relative z-[-1] flex place-items-center after:absolute after:-z-20',
              'before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""] before:lg:h-[360px]',
              'after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[""]',
            )}
          >
            <Balancer
              as="h1"
              className={cn(
                'relative text-xl font-extrabold',
                'sm:text-3xl md:text-4xl lg:text-5xl',
              )}
            >
              한울드론 팀 구성
            </Balancer>
          </div>
          <motion.div
            variants={fadeIn({
              direction: 'up',
              type: 'tween',
              delay: 0.2,
              duration: 0.5,
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Balancer
              as="h2"
              className={cn(
                'text-md max-w-[42rem] leading-normal text-muted-foreground',
                'sm:text-lg md:text-xl lg:text-2xl',
              )}
            >
              무인항공기 하나만 바라본 전문가들이 만듭니다.
            </Balancer>
          </motion.div>
          <div>
            <div className="flex space-x-4">
              {siteConfig.landingPage.membersInfo.map((member, index) => {
                return (
                  <div key={index} className="flex basis-1/2 backdrop-blur-sm">
                    <div>
                      <Image
                        src={member.imgSrc}
                        alt={'caricature of member'}
                        width={360}
                        height={360}
                      />
                    </div>
                    <div>
                      <p
                        className={cn(
                          'whitespace-nowrap text-sm font-bold',
                          'sm:text-lg md:text-xl lg:text-2xl',
                        )}
                      >
                        {member.name}
                      </p>
                      <p
                        className={cn(
                          'text-sm text-stone-600',
                          'sm:text-md md:text-lg lg:text-xl',
                        )}
                      >
                        {member.position}
                      </p>
                      <p
                        className={cn(
                          'mt-4 text-sm',
                          'md:text-md sm:text-sm lg:text-xl',
                        )}
                      >
                        {member.introduction}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollWrapper>

      <div className="snap-end" id="partners">
        <div className="mx-auto my-8 text-center lg:w-3/4">
          <div className="mt-36 text-center lg:mt-32">
            <span
              id="partners"
              className="text-lg font-semibold tracking-wider text-stone-600 dark:text-white"
            >
              PARTNERS
            </span>
            <div className="slider">
              <div
                className={cn(
                  'slide-track-5 hover:pause mt-6 grid grid-cols-3 items-center justify-around gap-16',
                  'sm:grid-cols-4 md:grid-cols-5',
                )}
              >
                {partnerLogos.map((logo, index) => (
                  <div key={index}>
                    <div className="flex items-center text-lg font-semibold hover:scale-110">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </main>
  );
}

// 비디오 플레이어 컴포넌트 추가
function VideoPlayer({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      loop
      playsInline
    />
  );
}
