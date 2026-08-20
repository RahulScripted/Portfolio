import reactSvg   from "@assets/svgs/reactjs.svg";
import nextSvg    from "@assets/svgs/nextjs.svg";
import tsSvg      from "@assets/svgs/typescript.svg";
import twSvg      from "@assets/svgs/tailwind.svg";
import reduxSvg   from "@assets/svgs/redux.svg";
import rnSvg      from "@assets/svgs/react-native.svg";
import querySvg   from "@assets/svgs/tanstack-query.svg";
import nodeSvg    from "@assets/svgs/nodejs.svg";
import mongoSvg   from "@assets/svgs/mongodb.svg";
import expressSvg from "@assets/svgs/express-light.svg";
import gsapSvg    from "@assets/svgs/gsap.svg";
import githubSvg  from "@assets/svgs/github.svg";
import cppSvg     from "@assets/svgs/cplusplus.svg";
import jsSvg      from "@assets/svgs/javascript.svg";
import mysqlSvg   from "@assets/svgs/mysql.svg";

export const nodes = [
  { id: "react",   name: "React",         code: "RCT", badge: "PRIMARY TOOL", icon: reactSvg,    pos: { left: "13%", top: "23%" }, r: "-3deg", note: "Core UI library. Used across every dashboard and storefront I've shipped — the one constant." },
  { id: "next",    name: "Next.js",        code: "NXT", badge: "PRIMARY TOOL", icon: nextSvg,     pos: { left: "28%", top: "16%" }, r: "2deg",  note: "App routing, SSR, and API routes. Backbone of every production build I own end to end." },
  { id: "ts",      name: "TypeScript",     code: "TS",  badge: "CORE",         icon: tsSvg,       pos: { left: "45%", top: "18%" }, r: "-2deg", note: "Typed everything after one too many runtime surprises made it into production." },
  { id: "tw",      name: "Tailwind CSS",   code: "TWX", badge: "UI",           icon: twSvg,       pos: { left: "64%", top: "16%" }, r: "3deg",  note: "Utility-first styling. Fastest path from a design file to pixel-accurate markup." },
  { id: "redux",   name: "Redux Toolkit",  code: "RTK", badge: "STATE",        icon: reduxSvg,    pos: { left: "82%", top: "28%" }, r: "-4deg", note: "Brought in the moment app state outgrew useState and Context — worth the boilerplate." },
  { id: "rn",      name: "React Native",   code: "RNX", badge: "MOBILE",       icon: rnSvg,       pos: { left: "16%", top: "51%" }, r: "3deg",  note: "Cross-platform mobile. Reused most of the web app's logic to ship iOS and Android together." },
  { id: "query",   name: "TanStack Query", code: "TSQ", badge: "DATA",         icon: querySvg,    pos: { left: "32%", top: "61%" }, r: "-3deg", note: "Handles caching, refetching, and sync for anything that talks to a server." },
  { id: "node",    name: "Node.js",        code: "NOD", badge: "SERVER",       icon: nodeSvg,     pos: { left: "68%", top: "56%" }, r: "2deg",  note: "Runtime behind every API this stack calls. Where the backend actually lives." },
  { id: "mongo",   name: "MongoDB",        code: "MDB", badge: "DATA",         icon: mongoSvg,    pos: { left: "84%", top: "70%" }, r: "-3deg", note: "Flexible schema for early-stage products that are still finding their shape." },
  { id: "express", name: "Express.js",     code: "EXP", badge: "API",          icon: expressSvg,  pos: { left: "47%", top: "82%" }, r: "4deg",  note: "Lightweight routing layer for REST endpoints — no more than the project needs." },
  { id: "gsap",    name: "GSAP",           code: "GSP", badge: "MOTION",       icon: gsapSvg,     pos: { left: "22%", top: "83%" }, r: "-4deg", note: "Animation engine for anything Framer Motion can't handle — timelines, scroll triggers." },
  { id: "github",  name: "GitHub",         code: "GIT", badge: "SHIP",         icon: githubSvg,   pos: { left: "73%", top: "86%" }, r: "3deg",  note: "Every project lives here. CI, code review, and the paper trail of every decision." },
  { id: "cpp",     name: "C++",            code: "CPP", badge: "CORE",         icon: cppSvg,      pos: { left: "93%", top: "52%" }, r: "-2deg", note: "Systems programming and competitive coding. The language that taught me how memory works." },
  { id: "js",      name: "JavaScript",     code: "JS",  badge: "CORE",         icon: jsSvg,       pos: { left: "4%",  top: "42%" }, r: "2deg",  note: "The language of the web. Powers everything from quick scripts to full-stack applications." },
  { id: "mysql",   name: "MySQL",          code: "SQL", badge: "DATA",         icon: mysqlSvg,    pos: { left: "60%", top: "80%" }, r: "3deg",  note: "Relational database for structured data. SQL queries, joins, and transactions done right." },
];
