import Button from '@/components/Button';

function TaskGenerator() {
  return (
    <div className='flex space-x-2 pb-1'>
      <Button
        handleOnClick={() => {
          console.log('Generate');
        }}
      >
        generate task
      </Button>
    </div>
  );
}

export default TaskGenerator;
