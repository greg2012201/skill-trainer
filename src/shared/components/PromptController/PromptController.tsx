type Props = Record<'answerForm' | 'taskGenerator', JSX.Element>;

function PromptController({ answerForm, taskGenerator }: Props): JSX.Element {
  return (
    <div className='relative flex w-full flex-col pt-1'>
      {taskGenerator}
      {answerForm}
    </div>
  );
}

export default PromptController;
