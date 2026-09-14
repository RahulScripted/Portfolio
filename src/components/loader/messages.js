export const LUFFY_LINES = [
  { jp: "は！？マジかよ！", en: "Wait, WHAT?!" },
  { jp: "しゃーはっはっは！おもしれー！", en: "Shishishi! That's hilarious!" },
  { jp: "うおおお、すげーじゃん！", en: "Whoa, no way, that's awesome!" },
  { jp: "えぇぇぇ！？なんだそれ！", en: "Ehhh?! What even is that!" },
  { jp: "お前、おもしろいな！", en: "You're funny, I like you!" },
  { jp: "うそだろ！？やるじゃん！", en: "No way! You actually did it!" },
  { jp: "ちょ、待てまてww", en: "Wait, hold on lol" },
  { jp: "目ん玉飛び出るかと思った！", en: "My eyes almost popped out!" },
  { jp: "何だそれ、天才かよ！", en: "What is that, are you a genius or what!" },
  { jp: "ぎゃはは！最高！", en: "Gyahaha! That's the best!" },
];

export const randomLuffyLine = () =>
  LUFFY_LINES[Math.floor(Math.random() * LUFFY_LINES.length)];
