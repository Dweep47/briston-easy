'use client';

import React, { useMemo, useState } from 'react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type StatItem = {
  key: string;
  Icon: IconComponent;
  value: string;
  label: string;
  valueClass: string;
};

type StatCardProps = {
  Icon: IconComponent;
  value: string;
  label: string;
  valueClass: string;
};

export default function AboutSection() {
  const [activeCategory, setActiveCategory] = useState('Overview');

  const categories = useMemo(
    () => ['Overview', 'Location', 'Features', 'Gallery', 'Contact'],
    []
  );

  const stats: StatItem[] = [
    {
      key: 'residences',
      Icon: HouseIcon,
      value: '375+',
      label: 'Luxury Residences',
      valueClass:
        'text-[34px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] leading-none tracking-[-0.045em] font-medium',
    },
    {
      key: 'bedrooms',
      Icon: BedIcon,
      value: '1–5',
      label: 'Br Floors',
      valueClass:
        'text-[34px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] leading-none tracking-[-0.045em] font-medium',
    },
    {
      key: 'location',
      Icon: ScenicPinIcon,
      value: 'Top Location',
      label: 'Exclusive Sites',
      valueClass:
        'text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[44px] leading-[1.06] tracking-[-0.04em] font-medium',
    },
    {
      key: 'amenities',
      Icon: StarArcIcon,
      value: '50+',
      label: 'World Class Amenities',
      valueClass:
        'text-[34px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] leading-none tracking-[-0.045em] font-medium',
    },
  ];

  return (
    <section className="relative min-h-[980px] w-full overflow-hidden bg-[#ece4da] sm:min-h-[1080px] lg:min-h-[1240px] xl:min-h-[1380px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img/final background.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,239,233,0.58)_0%,rgba(243,235,228,0.36)_42%,rgba(239,228,217,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[#f3ece4] via-[#f3ece4]/84 to-transparent sm:h-[220px] lg:h-[260px]" />
      </div>

      <div className="absolute inset-0 hidden">
        {categories.map((cat) => (
          <button key={cat} type="button" onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
        <span>{activeCategory}</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[980px] w-full max-w-[1600px] flex-col px-4 pb-16 pt-10 sm:min-h-[1080px] sm:px-6 sm:pb-20 sm:pt-14 lg:min-h-[1240px] lg:px-8 lg:pb-24 lg:pt-16 xl:min-h-[1380px] xl:px-10 xl:pt-10">
        <div className="mx-auto w-full max-w-[300px] text-center sm:max-w-[420px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px]">
          <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#171411] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[40px]">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-[1.75] text-[#5b524b]/85 sm:mt-4 sm:text-[14px] md:text-[15px] lg:text-[16px]">
            Experience world-class living at Briston Residences, luxury township, 1-Harmony
            offers elegant nature, secret scenic paths. Flowing seamlessly into the spacious
            steps of commercial corridor, and residences providing calm as your routine life.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[340px] grid-cols-1 gap-y-5 sm:mt-16 sm:max-w-[475px] sm:grid-cols-1 sm:gap-y-6 md:mt-20 md:max-w-[980px] md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:mt-24 lg:max-w-[1010px] lg:gap-x-8 lg:gap-y-10 xl:mt-[140px] xl:max-w-[1010px] xl:gap-x-[60px] xl:gap-y-[64px]">
          {stats.map((item) => (
            <StatCard
              key={item.key}
              Icon={item.Icon}
              value={item.value}
              label={item.label}
              valueClass={item.valueClass}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 md:mt-14 lg:mt-16 xl:mt-auto xl:pb-[78px]">
          <button
            type="button"
            className="inline-flex h-[44px] min-w-[220px] items-center justify-center gap-[6px] rounded-[2px] bg-[#c89d61] px-[18px] text-[14px] font-medium text-white shadow-[0_6px_18px_rgba(121,89,46,0.18)] sm:h-[46px] sm:min-w-[240px] sm:px-[20px] sm:text-[15px] lg:h-[48px] lg:min-w-[260px] lg:px-[22px] lg:text-[16px]"
          >
            <span>View Testimonials</span>
            <span className="text-[16px] leading-none sm:text-[17px] lg:text-[18px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCard({ Icon, value, label, valueClass }: StatCardProps) {
  return (
    <div className="relative h-[190px] w-full overflow-hidden rounded-[16px] border border-[rgba(223,228,232,0.95)] bg-[rgba(248,244,240,0.72)] shadow-[0_1px_0_rgba(255,255,255,0.72)_inset,0_10px_18px_rgba(109,87,60,0.035),0_24px_44px_rgba(109,87,60,0.045)] backdrop-blur-[8px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[240px] xl:w-[475px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.16)_28%,rgba(247,242,237,0.10)_58%,rgba(238,231,224,0.14)_100%)]" />
      <div className="absolute inset-[1px] rounded-[15px] border border-white/35 xl:rounded-[17px]" />
      <div className="absolute inset-x-[22px] top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent sm:inset-x-[24px] md:inset-x-[26px]" />
      <div className="absolute left-[20px] right-[20px] top-[18px] h-[56px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_72%)] blur-[18px] sm:left-[24px] sm:right-[24px] sm:top-[22px] sm:h-[64px]" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 pb-3 pt-4 text-center sm:px-6 sm:pb-3 sm:pt-4 md:px-7 md:pb-[10px] md:pt-[16px] xl:px-[28px]">
        <div className="mb-3 text-[#c89c61] sm:mb-4 md:mb-[18px]">
          <Icon className="h-[16px] w-[16px] sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px]" />
        </div>

        <div className={`${valueClass} text-[#74563c]`}>{value}</div>

        <p className="mt-3 text-[14px] font-normal leading-[1.2] tracking-[0.01em] text-[#756f69] sm:mt-4 sm:text-[15px] md:mt-[18px] md:text-[16px]">
          {label}
        </p>
      </div>
    </div>
  );
}

function HouseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.75 10 12 4.5 19.25 10" />
      <path d="M6.75 9.5V19h10.5V9.5" />
      <path d="M10.25 19v-4.5h3.5V19" />
    </svg>
  );
}

function BedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.25 6.5V18" />
      <path d="M4.25 13h14.5A1.25 1.25 0 0 1 20 14.25V18" />
      <path d="M6.75 13V10a1.25 1.25 0 0 1 1.25-1.25h2.5A2 2 0 0 1 12.5 10.75V13" />
      <path d="M12.5 10.5h4.25a2 2 0 0 1 2 2V13" />
    </svg>
  );
}

function ScenicPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20.25s5.5-4.75 5.5-9.75a5.5 5.5 0 1 0-11 0c0 5 5.5 9.75 5.5 9.75Z" />
      <circle cx="12" cy="10.5" r="1.9" />
    </svg>
  );
}

function StarArcIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 5.5 1.2 2.45 2.7.39-1.95 1.9.46 2.7L12 11.64l-2.41 1.3.46-2.7-1.95-1.9 2.7-.39L12 5.5Z" />
      <path d="M5.25 10c.82-.75 1.78-1.2 3.03-1.42" />
      <path d="M18.75 10c-.82-.75-1.78-1.2-3.03-1.42" />
    </svg>
  );
}