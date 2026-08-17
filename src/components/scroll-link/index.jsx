export default function ScrollLink({ to, className, children, onClose }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
      // wait for menu collapse animation (200ms) before scrolling
      setTimeout(() => {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      }, 220);
    } else {
      document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
