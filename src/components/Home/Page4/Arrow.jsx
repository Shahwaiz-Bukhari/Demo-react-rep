export default function SwipeLeftHint() {
  return (
    <div className="swipe-hint">
      <span>Swipe</span>
      <div className="arrow">&larr;</div>

      <style jsx="true">{`
        .swipe-hint {
          position: absolute;
          bottom: 13%;
          left: 84%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          color: #ffffffcc;
          z-index: 1000;
          opacity: 0.9;
        }

        .arrow {
          display: inline-block;
          font-size: 1.5rem;
          animation: moveArrow 1.2s ease-in-out infinite;
        }

        @keyframes moveArrow {
          0% {
            transform: translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-8px);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 0.6;
          }
        }
          @media (min-width: 697px) {
          .swipe-hint {
          display: none;
          }
          }

        @media (max-width: 696px) {
          .swipe-hint {
            font-size: 1.3rem;
          }

          .arrow {
            font-size: 1.9rem;
          }
        }
          @media (max-width: 480px){
          .swipe-hint {
           bottom: 13%;
          }
        }
      `}</style>
    </div>
  );
}
