export const threads = [
  { d: "M155 160 L336 112 L540 126 L768 112 L984 196", dashed: false },
  { d: "M155 160 L192 357 L384 427 L540 126",          dashed: false },
  { d: "M336 112 L384 427 L564 574 L816 392 L984 196", dashed: false },
  { d: "M768 112 L816 392 L984 490",                   dashed: false },
  { d: "M192 357 L264 581 L384 427 L984 490",          dashed: false },
  { d: "M540 126 L816 392 L564 574 L264 581",          dashed: true  },
  { d: "M384 427 L984 196",                            dashed: false },
  { d: "M564 574 L876 602 L984 490",                   dashed: false },
  { d: "M816 392 L876 602",                            dashed: true  },
  // JS connections (x≈48, y≈294)
  { d: "M48 294 L155 160",                             dashed: false },
  { d: "M48 294 L192 357",                             dashed: false },
  { d: "M48 294 L540 126",                             dashed: true  },
  // C++ connections (x≈1116, y≈364)
  { d: "M1116 364 L984 196",                           dashed: false },
  { d: "M1116 364 L816 392",                           dashed: false },
  { d: "M1116 364 L984 490",                           dashed: true  },
  // MySQL connections (x≈672, y≈476)
  { d: "M672 476 L816 392",                            dashed: false },
  { d: "M672 476 L984 490",                            dashed: false },
  { d: "M672 476 L564 574",                            dashed: true  },
];
