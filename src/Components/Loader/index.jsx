export const Loader = () => {
  return (
    <>
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="love">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="love"
            />
            <feBlend in="SourceGraphic" in2="love" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
