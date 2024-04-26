"use client";

const QuizIcon = ({ stroke }: { stroke: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.14648 7.07361C7.31728 6.54732 7.63015 6.07896 8.05078 5.71948C8.47141 5.36001 8.9838 5.12378 9.53027 5.03708C10.0768 4.95038 10.6362 5.0164 11.1475 5.22803C11.6587 5.43966 12.1014 5.78875 12.4268 6.23633C12.7521 6.68391 12.9469 7.21256 12.9904 7.76416C13.0339 8.31576 12.9238 8.86879 12.6727 9.36182C12.4215 9.85484 12.0394 10.2685 11.5676 10.5576C11.0958 10.8467 10.5533 10.9998 10 10.9998V12.0002M10.0498 15V15.1L9.9502 15.1002V15H10.0498ZM1 15.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V15.8036C19 16.9215 19 17.4805 18.7822 17.9079C18.5905 18.2842 18.2837 18.5905 17.9074 18.7822C17.48 19 16.921 19 15.8031 19H4.19691C3.07899 19 2.5192 19 2.0918 18.7822C1.71547 18.5905 1.40973 18.2842 1.21799 17.9079C1 17.4801 1 16.9203 1 15.8002Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuizIcon;
