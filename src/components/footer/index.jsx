import FooterHeader from "./parts/upper-part";
import FooterMiddle from "./parts/middle-part";
import FooterBottom from "./parts/bottom-part";
import Ballpit from "@components/shared/Ballpit";
import SafeBoundary from "@components/shared/SafeBoundary";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-[6px] border-ink bg-ink pb-[30px] pt-14 text-paper px-3 sm:px-5">
      {/* Full-bleed interactive ballpit — sits behind all footer content */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <SafeBoundary>
          <Ballpit
            className="pointer-events-auto"
            count={90}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={true}
            colors={[0xef6e5f, 0xa6382c, 0xf5f0e8, 0xe8e0d0]}
            ambientColor={0xfbfaf5}
            ambientIntensity={1}
            lightIntensity={220}
            minSize={0.4}
            maxSize={0.9}
          />
        </SafeBoundary>
      </div>

      {/* Scrim: darkens the balls behind the text so the menu stays readable */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-ink/55"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto">
        <FooterHeader />
        <FooterMiddle />

        {/* Case Closed stamp */}
        <div className="mt-12 flex justify-center">
          <div className="relative inline-block -rotate-3" aria-label="End of record">
            <span
              aria-hidden="true"
              className="absolute inset-0 border-4"
              style={{ filter: "url(#rough-stamp)", borderColor: "#EF6E5F" }}
            />
            <span
              className="relative z-[1] px-6 py-2 font-gothic text-[14px] font-black uppercase tracking-[0.28em] inline-block"
              style={{ color: "#EF6E5F" }}
            >
              Still Building
            </span>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
