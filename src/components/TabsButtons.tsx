import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";

const TabsButtons = (props: any) => {
  return (
    <Tabs defaultValue="portfolio" className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl">

        {/* Tabs header */}
        <TabsList className="w-full px-4 py-5 flex rounded-t-2xl mt-3 mx-auto max-w-3xl gap-3" style={{ background: "var(--color-bg-surface)" }}>
          
          {/* Portfolio Tab */}
          <TabsTrigger
            className="group w-full py-4 text-lg font-semibold rounded-lg border transition-all duration-200
                       data-[state=active]:text-white data-[state=active]:border-transparent
                       data-[state=inactive]:border-white/10 data-[state=inactive]:bg-white/[0.03] data-[state=inactive]:text-gray-300
                       hover:border-white/20 hover:bg-white/10"
            value="portfolio"
          >
            <span
              className="inline-block transition-all duration-300 ease-[cubic-bezier(0.3,1.2,0.3,1)] transition-delay-75
           group-hover:scale-110 group-hover:text-white group-hover:brightness-125
           group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"

            >
              Portfolio
            </span>
          </TabsTrigger>

          {/* About Tab */}
          <TabsTrigger
            className="group w-full py-4 text-lg font-semibold rounded-lg border transition-all duration-200
                       data-[state=active]:text-white data-[state=active]:border-transparent
                       data-[state=inactive]:border-white/10 data-[state=inactive]:bg-white/[0.03] data-[state=inactive]:text-gray-300
                       hover:border-white/20 hover:bg-white/10"
            value="about"
          >
            <span
              className="inline-block transition-all duration-300 ease-[cubic-bezier(0.3,1.2,0.3,1)] transition-delay-75
           group-hover:scale-110 group-hover:text-white group-hover:brightness-125
           group-hover:drop-shadow-[0_0_6px_rgba(173,216,230,0.25)]"
            >
              About
            </span>
          </TabsTrigger>

        </TabsList>

        {/* Tabs content */}
        <div className="px-6 md:px-12 py-4">
          <TabsContent value="portfolio">
            <div className="section-wrapper section-wrapper-dark rounded-none shadow-none">
              {props.portfolio}
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="w-full max-w-5xl">
              {props.about}
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default TabsButtons;
