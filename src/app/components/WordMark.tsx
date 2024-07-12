// src/components/WordMark.tsx

export default function WordMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={200} height={36} fill="none">
      <path
        fill="#FFD057"
        fillRule="evenodd"
        d="M36.35 20.05c.86-1.48.86-3.3 0-4.78L29.5 3.39A4.79 4.79 0 0025.35 1h-13.7c-1.72 0-3.3.91-4.15 2.4L.64 15.26a4.79 4.79 0 000 4.78L7.5 31.93a4.79 4.79 0 004.14 2.39h13.71c1.71 0 3.3-.91 4.15-2.4l6.85-11.87zM18.12 6.48a.81.81 0 00-.3.39l-.77 2.11a12.14 12.14 0 01-7.23 7.23L7.7 17a.81.81 0 000 1.52l2.12.78a12.14 12.14 0 017.23 7.23l.77 2.11a.81.81 0 001.53 0l.77-2.11a12.14 12.14 0 017.23-7.23l2.12-.78a.8.8 0 000-1.52l-2.12-.78a12.14 12.14 0 01-7.23-7.23l-.77-2.11a.81.81 0 00-1.23-.39z"
        clipRule="evenodd"
      />

      <text x="43" y="25" fontFamily="Arial" fontSize="20" fill="white">
        Connect Planning
      </text>
    </svg>
  );
}
