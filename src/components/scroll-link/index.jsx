export default function ScrollLink({ to, className, children, onClose }) {
  const go = () => {
    // Ask any deferred section with this id to mount before we scroll.
    window.dispatchEvent(new CustomEvent("defermount:show", { detail: to }));
    // Scroll on the next frame so a just-mounted section has a layout box.
    requestAnimationFrame(() => {
      document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
      // wait for menu collapse animation (200ms) before scrolling
      setTimeout(go, 220);
    } else {
      go();
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
