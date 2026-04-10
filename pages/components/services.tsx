import Image from "next/image";
import { Building2, House, Store, MapPinned, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Residential",
    description: "Villas, Apartments, Luxury Residences",
    image: "/images/residential.jpg",
    icon: House,
  },
  {
    title: "Commercial",
    description: "Offices, Corporate Spaces, Retail Spaces",
    image: "/images/commercial.jpg",
    icon: Building2,
  },
  {
    title: "Retail",
    description: "Shopping, Dining, Entertainment",
    image: "/images/retail.jpg",
    icon: Store,
  },
  {
    title: "Township",
    description: "Integrated Communities, Schools, Parks & Living",
    image: "/images/t2.jpg",
    icon: MapPinned,
  },
];

export default function Services() {
  return (
    <section className="services-one home-services-box relative bg-transparent pt-0 pb-8 md:pb-12">
      <div className="container">
        <div className="row gutter-y-30">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay={`${100 + index * 200}ms`}
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: `${100 + index * 200}ms`,
                  animationName: "fadeInUp",
                }}
              >
                <div className="group relative flex h-[320px] flex-col rounded-[24px] border border-[#eadcc7] bg-[#f7f1e8]/95 shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  
                  {/* subtle golden edge ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-[#f3dfb5]/60" />

                  {/* ✅ PERFECT bottom border shine */}
                  <div className="pointer-events-none absolute left-[20px] right-[20px] bottom-0 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#e3cfad] to-transparent opacity-90" />
                  <div className="pointer-events-none absolute left-[30px] right-[30px] bottom-0 h-[5px] rounded-full bg-gradient-to-r from-transparent via-[#d6bc8c]/18 to-transparent blur-[3px]" />

                  {/* inner content */}
                  <div className="flex h-full flex-col overflow-hidden rounded-[24px]">
                    
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        priority
                        fetchPriority="high"
                        width={420}
                        height={220}
                        className="h-[120px] w-full object-cover"
                      />

                      {/* gradient icon */}
                      <div className="absolute left-1/2 top-full z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f4ddb0_0%,#ddb46f_48%,#bb8746_100%)] text-white shadow-[0_8px_18px_rgba(185,131,63,0.35)] ring-4 ring-[#f7f1e8]">
                          <Icon size={20} strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex flex-1 flex-col justify-center px-4 pt-8 text-center">
                      <h4 className="text-[24px] font-semibold leading-none text-[#231f1a] md:text-[26px]">
                        {item.title}
                      </h4>

                      <p className="mx-auto max-w-[220px] text-[14px] leading-6 text-[#5f5348]">
                        {item.description}
                      </p>
                    </div>

                    {/* footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-[#eadfce] bg-[#efe2cf] px-4 py-3 text-[#a97838]">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#c89b5b]">
                          <ArrowUpRight size={12} />
                        </span>
                        <span className="text-sm font-medium">
                          Explore Properties
                        </span>
                      </div>

                      <ArrowUpRight size={16} />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}