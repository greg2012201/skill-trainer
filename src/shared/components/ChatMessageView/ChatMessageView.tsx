type Props = { items: JSX.Element[] };

function ChatMessageView({ items }: Props): JSX.Element {
  return (
    <ul className='border-1 flex max-h-[450px] min-h-[450px] w-full flex-col-reverse overflow-y-auto rounded-md border bg-zinc-100'>
      {items}
    </ul>
  );
}

export default ChatMessageView;
