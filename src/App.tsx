import English from './english/English';

function App() {
  return (
    <div className='item-center flex flex-col content-center space-y-8 pt-6'>
      <h1 className='text-center text-4xl'>English trainer</h1>
      <div className='ml-auto mr-auto flex w-1/2 flex-col'>
        <English />
      </div>
    </div>
  );
}

export default App;
