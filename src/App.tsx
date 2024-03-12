import { ThemeProvider } from '@/components/theme-provider';

import { ModeToggle } from './components/ui/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex flex-col justify-between items-center w-full min-h-screen max-w-screen'>
        {/* HEADER */}
        <div className='flex justify-between w-full py-4 px-10'>
          <h1 className='font-semibold text-2xl'>
            PUP LABORATORY UNIT TRACKER
          </h1>
          <ModeToggle />
        </div>

        <div className='w-[52rem] h-[52rem] grid grid-cols-8 grid-rows-9 gap-1 bg-neutral-900'>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-500'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-800'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-200'></div>
          <div className='bg-neutral-800'></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
