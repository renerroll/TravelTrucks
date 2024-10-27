const Grid3x3 = ({ width = '32px', height = '32px', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 4V8H4V4H8ZM10 28V24C10 23.4696 9.78929 22.9609 9.41421 22.5858C9.03914 22.2107 8.53043 22 8 22H4C3.46957 22 2.96086 22.2107 2.58579 22.5858C2.21071 22.9609 2 23.4696 2 24V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H8C8.53043 30 9.03914 29.7893 9.41421 29.4142C9.78929 29.0391 10 28.5304 10 28ZM10 18V14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H8C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18ZM10 8V4C10 3.46957 9.78929 2.96086 9.41421 2.58579C9.03914 2.21071 8.53043 2 8 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V8C2 8.53043 2.21071 9.03914 2.58579 9.41421C2.96086 9.78929 3.46957 10 4 10H8C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8ZM20 28V24C20 23.4696 19.7893 22.9609 19.4142 22.5858C19.0391 22.2107 18.5304 22 18 22H14C13.4696 22 12.9609 22.2107 12.5858 22.5858C12.2107 22.9609 12 23.4696 12 24V28C12 28.5304 12.2107 29.0391 12.5858 29.4142C12.9609 29.7893 13.4696 30 14 30H18C18.5304 30 19.0391 29.7893 19.4142 29.4142C19.7893 29.0391 20 28.5304 20 28ZM20 18V14C20 13.4696 19.7893 12.9609 19.4142 12.5858C19.0391 12.2107 18.5304 12 18 12H14C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14V18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18ZM20 8V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2H14C13.4696 2 12.9609 2.21071 12.5858 2.58579C12.2107 2.96086 12 3.46957 12 4V8C12 8.53043 12.2107 9.03914 12.5858 9.41421C12.9609 9.78929 13.4696 10 14 10H18C18.5304 10 19.0391 9.78929 19.4142 9.41421C19.7893 9.03914 20 8.53043 20 8ZM18 4V8H14V4H18ZM28 4V8H24V4H28ZM8 14V18H4V14H8ZM18 14V18H14V14H18ZM28 14H24V18H28V14ZM8 24V28H4V24H8ZM18 24V28H14V24H18ZM28 24V28H24V24H28ZM24 2C23.4696 2 22.9609 2.21071 22.5858 2.58579C22.2107 2.96086 22 3.46957 22 4V8C22 8.53043 22.2107 9.03914 22.5858 9.41421C22.9609 9.78929 23.4696 10 24 10H28C28.5304 10 29.0391 9.78929 29.4142 9.41421C29.7893 9.03914 30 8.53043 30 8V4C30 3.46957 29.7893 2.96086 29.4142 2.58579C29.0391 2.21071 28.5304 2 28 2H24ZM22 14C22 13.4696 22.2107 12.9609 22.5858 12.5858C22.9609 12.2107 23.4696 12 24 12H28C28.5304 12 29.0391 12.2107 29.4142 12.5858C29.7893 12.9609 30 13.4696 30 14V18C30 18.5304 29.7893 19.0391 29.4142 19.4142C29.0391 19.7893 28.5304 20 28 20H24C23.4696 20 22.9609 19.7893 22.5858 19.4142C22.2107 19.0391 22 18.5304 22 18V14ZM24 22C23.4696 22 22.9609 22.2107 22.5858 22.5858C22.2107 22.9609 22 23.4696 22 24V28C22 28.5304 22.2107 29.0391 22.5858 29.4142C22.9609 29.7893 23.4696 30 24 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V24C30 23.4696 29.7893 22.9609 29.4142 22.5858C29.0391 22.2107 28.5304 22 28 22H24Z"
      fill="#101828"
    />
  </svg>
);

export default Grid3x3;
