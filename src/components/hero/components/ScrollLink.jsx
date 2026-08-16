export default function ScrollLink({ to, className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
