export const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 500 150"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="50%"
      y="60%"
      dominantBaseline="middle"
      textAnchor="middle"
      style={{
        fontSize: '72px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      BerriBucket
    </text>
    <text
      x="50%"
      y="85%"
      dominantBaseline="middle"
      textAnchor="middle"
      style={{
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      Style Uniquely Yours
    </text>
  </svg>
) 