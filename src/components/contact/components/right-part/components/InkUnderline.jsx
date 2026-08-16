export default function InkUnderline({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 12"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
      style={{ overflow: "visible", display: "block" }}
    >
      <path
        d="M2 7 C 18 3, 48 2, 80 5 C 112 8, 148 9, 178 6 C 190 5, 197 6, 198 8"
        stroke="#A6382C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="220"
        strokeDashoffset="220"
        className="transition-[stroke-dashoffset] duration-[450ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:[stroke-dashoffset:0]"
      />
      <path
        d="M4 9.5 C 30 8, 70 10, 110 9 C 145 8, 175 9.5, 196 9"
        stroke="#A6382C"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
        strokeDasharray="200"
        strokeDashoffset="200"
        className="transition-[stroke-dashoffset] duration-[450ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-75 group-hover:[stroke-dashoffset:0]"
      />
    </svg>
  );
}
