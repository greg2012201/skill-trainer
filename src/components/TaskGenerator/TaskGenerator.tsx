import Button from '@/components/Button';

function TaskGenerator() {
  return (
    <div className='flex space-x-2 pb-1'>
      <Button
        handleOnClick={() => {
          console.log('Generate task');
        }}
      >
        Generate task
      </Button>
      <Button
        colorVariant='orange'
        handleOnClick={() => {
          console.log('Generate hint');
        }}
      >
        Give me a hint
      </Button>
      <Button
        colorVariant='red'
        handleOnClick={() => {
          console.log(`I don't know`);
        }}
      >
        I don't know
      </Button>
    </div>
  );
}

export default TaskGenerator;
