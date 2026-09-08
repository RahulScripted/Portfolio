import FooterHeader from "./parts/upper-part";
import FooterMiddle from "./parts/middle-part";
import FooterBottom from "./parts/bottom-part";
export default function Footer() {
  return (
    <footer className="border-t-[6px] border-ink bg-ink pb-[30px] pt-14 text-paper px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
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
