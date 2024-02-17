export default function Loader() {
  return (
    <>
      <xml version="1.0" encoding="utf-8"/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke-width="6"
          stroke="#096a2e"
          stroke-dasharray="39.269908169872416 39.269908169872416"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.6666666666666666s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </>
  );
}
