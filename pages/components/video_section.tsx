import React from 'react';
import { Shield, Droplets, Zap, Flame, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const video_section = () => {
  const amenities = [
    { title: 'Security (CCTV, guard)', icon: <Shield /> },
    { title: 'Water supply', icon: <Droplets /> },
    { title: 'Power backup', icon: <Zap /> },
    { title: 'Fire safety', icon: <Flame /> },
  ];

  return (
    <section className="relative w-full overflow-hidden h-[620px] sm:h-[680px] lg:h-[760px] xl:h-[640px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/your-landscape-image.jpg')` }}
      />

      <div className="absolute inset-0 bg-[rgba(243,231,216,0.15)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_22%,rgba(72,49,29,0.02)_58%,rgba(72,49,29,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,90,58,0.04)_0%,rgba(0,0,0,0)_44%,rgba(237,191,118,0.07)_100%)]" />

      {/* cropped cards from section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[168px] bg-[rgba(234,224,210,0.46)] backdrop-blur-[1.2px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[168px] h-[56px] bg-[linear-gradient(180deg,rgba(214,198,181,0.22)_0%,rgba(214,198,181,0.08)_54%,rgba(214,198,181,0)_100%)]" />

      <div className="relative z-10 mx-auto h-full w-full max-w-[1920px] px-[24px] sm:px-[32px] lg:px-[48px] xl:px-0">
        <div className="relative h-full w-full">
          <div className="absolute left-[24px] top-[52px] max-w-[330px] sm:left-[44px] sm:top-[76px] sm:max-w-[410px] lg:left-[160px] lg:top-[92px] lg:max-w-[540px] xl:left-[466px] xl:top-[70px] xl:max-w-[520px]">
            <h1
              className="font-serif text-[44px] font-normal leading-[0.99] tracking-[-0.035em] text-[#403229] sm:text-[58px] lg:text-[74px] xl:text-[66px] xl:leading-[0.98] xl:tracking-[-0.03em]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Get Ready For Your
              <br />
              Lifetime Journey!
            </h1>

            <p className="mt-[14px] text-[15px] font-normal leading-[1.15] tracking-[-0.02em] text-[#41352d] sm:text-[18px] lg:mt-[16px] lg:text-[20px] xl:mt-[6px] xl:text-[16px] xl:leading-[20px] xl:tracking-[-0.01em]">
              wherer homes, coreser and liststple meet
            </p>

            <button className="mt-[18px] inline-flex h-[42px] items-center gap-[10px] rounded-full border border-[rgba(101,83,69,0.18)] bg-[rgba(255,255,255,0.76)] px-[20px] text-[14px] font-semibold leading-none text-[#3f332b] shadow-[0_4px_12px_rgba(73,56,39,0.14)] backdrop-blur-[1.5px] sm:h-[46px] sm:px-[24px] sm:text-[16px] lg:mt-[20px] lg:h-[50px] lg:px-[28px] lg:text-[17px] xl:mt-[10px] xl:h-[42px] xl:gap-[8px] xl:px-[22px] xl:text-[15px] xl:shadow-[0_3px_8px_rgba(73,56,39,0.12)]">
              <Rocket className="h-[15px] w-[15px] text-[#c49b68] sm:h-[16px] sm:w-[16px] xl:h-[14px] xl:w-[14px]" strokeWidth={1.9} />
              Explore Amenities
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-[74px] flex justify-center sm:bottom-[82px] lg:bottom-[86px] xl:bottom-[88px]">
            <div className="grid grid-cols-2 gap-[14px] sm:gap-[18px] lg:grid-cols-4 lg:gap-[24px] xl:gap-[38px]">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="relative flex h-[168px] w-[156px] flex-col items-center overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.34)] bg-[rgba(255,255,255,0.055)] px-[14px] pt-[26px] text-center shadow-[0_8px_20px_rgba(72,51,31,0.10)] backdrop-blur-[2.4px] sm:h-[214px] sm:w-[194px] sm:rounded-[24px] sm:px-[16px] sm:pt-[30px] lg:h-[246px] lg:w-[226px] lg:rounded-[25px] lg:px-[18px] lg:pt-[30px] xl:h-[268px] xl:w-[214px] xl:rounded-[24px] xl:border-[rgba(255,255,255,0.34)] xl:px-[18px] xl:pt-[36px] xl:shadow-[0_10px_24px_rgba(72,51,31,0.06)] xl:backdrop-blur-[2.2px]"
                >
                  <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.05)_34%,rgba(255,255,255,0.015)_100%)]" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.04)]" />

                  <div className="relative mb-[18px] flex h-[42px] items-center justify-center sm:mb-[22px] sm:h-[56px] lg:mb-[24px] lg:h-[68px] xl:mb-[22px] xl:h-[82px]">
                    {React.cloneElement(item.icon, {
                      className:
                        'h-[34px] w-[34px] text-[#ead6b2] sm:h-[44px] sm:w-[44px] lg:h-[56px] lg:w-[56px] xl:h-[78px] xl:w-[78px]',
                      strokeWidth: 1.18,
                    })}
                  </div>

                  <h3 className="relative max-w-[122px] text-[12px] font-normal leading-[1.22] tracking-[-0.015em] text-white sm:max-w-[138px] sm:text-[16px] lg:max-w-[160px] lg:text-[20px] xl:max-w-[184px] xl:text-[26px] xl:leading-[33px] xl:tracking-[-0.01em]">
                    {item.title}
                  </h3>

                  <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[52px] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(230,192,123,0)_0%,rgba(230,192,123,0.95)_50%,rgba(230,192,123,0)_100%)] sm:w-[64px] lg:w-[78px] xl:w-[104px]" />
                  <div className="pointer-events-none absolute bottom-[-2px] left-1/2 h-[7px] w-[62px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(230,192,123,0.33)_0%,rgba(230,192,123,0.13)_42%,rgba(230,192,123,0)_76%)] blur-[3.5px] sm:h-[8px] sm:w-[76px] lg:h-[9px] lg:w-[92px] xl:h-[10px] xl:w-[122px] xl:blur-[5px]" />
                  <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[20px] -translate-x-1/2 bg-[#ffe9b3] opacity-95 sm:w-[24px] lg:w-[28px] xl:w-[36px]" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-[24px] flex items-center justify-center gap-[8px] sm:bottom-[28px] lg:bottom-[30px] xl:bottom-[34px] xl:gap-[10px]">
            <button className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] border border-[rgba(255,255,255,0.22)] bg-[rgba(121,104,84,0.42)] text-white shadow-[0_4px_10px_rgba(52,38,24,0.10)] backdrop-blur-[2px] sm:h-[24px] sm:w-[24px] xl:h-[42px] xl:w-[42px] xl:rounded-[6px] xl:shadow-[0_3px_8px_rgba(52,38,24,0.08)]">
              <ChevronLeft className="h-[12px] w-[12px] xl:h-[16px] xl:w-[16px]" strokeWidth={2.1} />
            </button>

            <button className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] border border-[rgba(255,255,255,0.24)] bg-[rgba(212,186,150,0.72)] text-white shadow-[0_4px_10px_rgba(52,38,24,0.10)] backdrop-blur-[2px] sm:h-[24px] sm:w-[24px] xl:h-[42px] xl:w-[42px] xl:rounded-[6px] xl:shadow-[0_3px_8px_rgba(52,38,24,0.08)]">
              <div className="h-[4px] w-[4px] rounded-full bg-white xl:h-[5px] xl:w-[5px]" />
            </button>

            <button className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] border border-[rgba(255,255,255,0.22)] bg-[rgba(121,104,84,0.42)] text-white shadow-[0_4px_10px_rgba(52,38,24,0.10)] backdrop-blur-[2px] sm:h-[24px] sm:w-[24px] xl:h-[42px] xl:w-[42px] xl:rounded-[6px] xl:shadow-[0_3px_8px_rgba(52,38,24,0.08)]">
              <ChevronRight className="h-[12px] w-[12px] xl:h-[16px] xl:w-[16px]" strokeWidth={2.1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default video_section;