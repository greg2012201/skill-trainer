import TextAreaField from '@/components/TextAreaField/';
import SendButton from '@/components//SendButton/SendButton';

function PromptController() {
  return (
    <form className='relative ml-auto mr-auto flex w-1/2 flex-col pt-8 '>
      <TextAreaField id='answer' name='answer' className='pr-6' />
      <div className='flex-start flex w-full'>
        <SendButton className='absolute bottom-2 right-3.5' />
      </div>
    </form>
  );
}

export default PromptController;
