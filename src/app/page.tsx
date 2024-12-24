import AvatarGroup from "@/components/AvatarGroup";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./img4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
      </div>

      <Navigation />

      <main className="relative z-10 min-h-screen flex flex-col justify-center px-8">
        <div className="max-w-4xl mx-auto w-full pt-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-white/80 text-sm px-4 py-1 rounded-full border borer-white/20">
              WE HAVE AN OFFER FOR YOU !!
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-10">
            A dream residence <br />
            at our{" "}
            <span className="relative inline-block">
              <span className="text-lime-400 font-title relative z-10">
                Jungle House
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-6 -left-1 sm:-left-2 md:-left-3 lg:-left-4 w-[calc(100%+8px)] sm:w-[calc(100%+16px)] md:w-[calc(100%+24px)] lg:w-[calc(100%+32px)] h-6 sm:h-7 md:h-8 lg:h-10">
                <svg
                  className="w-full h-full text-lime-400"
                  viewBox="0 0 140 40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5,20 Q35,5 70,25 T135,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </div>
            </span>
          </h1>

          <p className="text-white/80 max-w-lg mb-8">
            Our experts help you find your dream homes or investment properties
            by understanding your needs and preferences and then searching for
            suitable options.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <SearchBar />
            <Button
              className="text-white hover:text-white ease-linear group hover:border hover:bg-transparent"
              variant={"ghost"}
            >
              Explore More{" "}
              <span className="inline-block ml-2 transform group-hover:translate-y-1 transition-transform">
                ↓
              </span>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-white/80">Trusted by 10k + customers</p>
            <AvatarGroup />
          </div>
        </div>
      </main>
    </div>
  );
}
