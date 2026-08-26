export const philosophyEntries = [
  {
    id: "01",
    title: "Architecture",
    body: "Build systems that are easy to understand, extend, and reason about. I define clear component boundaries, data flow, and responsibilities before writing code — separating UI from business logic and keeping complexity manageable as the app grows.",
    icon: "architecture",
    principle: "Good architecture should reduce complexity, not introduce it.",
  },
  {
    id: "02",
    title: "Performance",
    body: "Make the interface feel fast, not just score well on a benchmark. I treat performance as part of UX from day one — considering what loads immediately, what defers, how much JS ships, and optimizing actual bottlenecks over premature abstractions.",
    icon: "performance",
    principle: "Optimize the bottlenecks that users actually experience.",
  },
  {
    id: "03",
    title: "Reliability",
    body: "Design for failure, not just the happy path. APIs fail, networks lag, sessions expire. I give every important state a deliberate experience — loading, empty, error, retry — instead of assuming every request succeeds.",
    icon: "reliability",
    principle: "A feature isn't complete until its failure states are designed.",
  },
  {
    id: "04",
    title: "Accessibility",
    body: "Build interfaces that work beyond the default interaction path. I use semantic HTML first, consider keyboard navigation, focus management, screen readers, and contrast — making ARIA the fallback, not the default.",
    icon: "accessibility",
    principle: "If an interaction only works with a mouse, it isn't finished.",
  },
  {
    id: "05",
    title: "Testing",
    body: "Test behavior and user outcomes, not implementation details. I focus on how features behave from a user's perspective — protecting critical workflows while staying resilient when internals change.",
    icon: "testing",
    principle: "Test what users depend on, not how the implementation happens to work today.",
  },
  {
    id: "06",
    title: "Maintainability",
    body: "Write code another engineer can confidently change six months later. I prefer clear naming, predictable patterns, composable components, and focused abstractions over clever implementations that are hard to follow.",
    icon: "maintainability",
    principle: "Optimize for the engineer who has to maintain the code after you.",
  },
];
