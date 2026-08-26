const Icon = ({ children, size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const ArchitectureIcon = ({ size, className }) => (
  <Icon size={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </Icon>
);

export const PerformanceIcon = ({ size, className }) => (
  <Icon size={size} className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </Icon>
);

export const ReliabilityIcon = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Icon>
);

export const AccessibilityIcon = ({ size, className }) => (
  <Icon size={size} className={className}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v6" />
    <path d="M8 8l4 2 4-2" />
    <path d="M9 18l3-6 3 6" />
  </Icon>
);

export const TestingIcon = ({ size, className }) => (
  <Icon size={size} className={className}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </Icon>
);

export const MaintainabilityIcon = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Icon>
);

export const ICONS = {
  architecture: ArchitectureIcon,
  performance: PerformanceIcon,
  reliability: ReliabilityIcon,
  accessibility: AccessibilityIcon,
  testing: TestingIcon,
  maintainability: MaintainabilityIcon,
};

export default ICONS;
