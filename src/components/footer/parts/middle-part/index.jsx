import Bio from "./components/bio";
import Sections from "./components/sections";
import Desk from "./components/desk";
import WireServices from "./components/wires";

export default function FooterMiddle() {
  return (
    <div className="grid grid-cols-1 gap-8 pt-[30px] min-[600px]:grid-cols-[1.6fr_1fr_1fr_1fr]">
      <Bio />
      <Sections />
      <Desk />
      <WireServices />
    </div>
  );
}
