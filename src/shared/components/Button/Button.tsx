import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  handleOnClick(e: MouseEvent<HTMLButtonElement>): void;
  children: JSX.Element | string;
  className?: string;
  icon?: JSX.Element;
  colorVariant?: 'green' | 'orange' | 'red';
};

const COLOR_VARIANTS = {
  green: 'bg-green-400 hover:bg-green-300',
  orange: 'bg-orange-400 hover:bg-orange-300',
  red: 'bg-red-500 hover:bg-red-400',
};

function Button({
  handleOnClick,
  children,
  className,
  icon,
  colorVariant = 'green',
}: Props): JSX.Element {
  return (
    <button
      type='button'
      onClick={handleOnClick}
      className={twMerge(
        'flex items-center rounded-md bg-green-400 p-1 text-sm text-white transition-all duration-300 hover:bg-green-300',
        className,
        COLOR_VARIANTS[colorVariant],
      )}
    >
      {icon && icon}
      {children}
    </button>
  );
}

export default Button;
