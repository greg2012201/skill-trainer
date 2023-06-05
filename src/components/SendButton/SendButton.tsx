import { MdOutlineSend } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

type Props = { className?: string };

function SendButton({ className, ...rest }: Props): JSX.Element {
  return (
    <button
      type='submit'
      className={twMerge(
        'transition-bg flex h-6 w-7 justify-center rounded-md bg-green-300 p-1 text-green-800 duration-200 hover:bg-green-200 hover:text-green-700',
        className,
      )}
      {...rest}
    >
      <MdOutlineSend size={16} />
    </button>
  );
}

export default SendButton;
