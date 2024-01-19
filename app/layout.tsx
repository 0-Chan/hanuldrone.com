import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';

import { SiteHeader } from '@/components/layouts/site-header';

import { fontMono, pretendard } from '@/lib/font';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '한울드론 | 화재 감시 드론 & 의약품 배송 드론',
  description: '실/내외 시설 점검과 실시간 관제 기술로 세상을 널리 이롭게 합니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sansSerif min-h-screen antialiased',
          'bg-gray-1100 overflow-y-scroll bg-[url("/pattern.svg")] pb-36',
          fontMono.variable,
          pretendard.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
