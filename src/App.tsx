import CreateStoryWrapper from './components/CreateStoryWrapper';

function App() {
  return (
    <div className="h-full min-h-[100vh] w-full">
      <div className="h-[80px] w-full bg-[#efedfb]" />
      <div
        id="prototype-body"
        className="flex h-full w-full flex-col items-center justify-center gap-[20px] p-5"
      >
        <CreateStoryWrapper />
      </div>
    </div>
  );
}

export default App;
