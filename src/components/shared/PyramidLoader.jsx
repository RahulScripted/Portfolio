export default function PyramidLoader({ className = "" }) {
  return (
    <div
      className={"flex w-full items-center justify-center " + className}
      role="status"
      aria-label="Loading"
    >
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
      </div>
    </div>
  );
}
