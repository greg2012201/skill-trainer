import { twMerge } from 'tailwind-merge';

type Props = { children: string; isEven: boolean };

const STYLES = {
  even: 'bg-zinc-200',
  odd: 'bg-transparent',
};

function ChatMessageItem({ children, isEven = false }: Props): JSX.Element {
  return (
    <li className={twMerge('p-4 text-zinc-900', STYLES[isEven ? 'even' : 'odd'])}>
      {children}
    </li>
  );
}

export default ChatMessageItem;
