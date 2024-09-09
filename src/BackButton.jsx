import { useNavigate,Link } from 'react-router-dom';
import { memo } from 'react';

const BackButton = () => {
  // const navigate = useNavigate();

  return (
    <Link
      to='/'
      className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      aria-label="Go back to the previous page"
    >
      Back
    </Link>
  );
};

const MemoizedBackButton = memo(BackButton);

export default MemoizedBackButton;