export default function ScrollLink({ to, className, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    onClick?.();
  };
  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
