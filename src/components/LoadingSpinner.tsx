export default function LoadingSpinner({ size = 20, color }: { size?: number; color?: string }) {
  return (
    <span className="spinner-wrap" style={{ width: size, height: size }}>
      <style>{`
        .spinner-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .spinner-ring {
          animation: spinnerRotate 0.7s linear infinite;
        }
        @keyframes spinnerRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <svg
        className="spinner-ring"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || 'currentColor'}
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 2a10 10 0 0 1 10 10" opacity="1" />
        <path d="M12 2a10 10 0 1 0 10 10" opacity="0.2" />
      </svg>
    </span>
  );
}
