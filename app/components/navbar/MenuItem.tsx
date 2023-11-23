'use client';

interface MenuItemProps {
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      className='px-4 py-3 hover:bg-secondary transition font-semibold text-background'
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
