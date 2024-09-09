import {memo} from 'react';

function Loading(){
  return (
    <div className='flex grow justify-center items-center'>
      <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full flex items-center justify-center animate-spin">
        <div className="w-5 h-5 bg-white rounded-full"></div>
      </div>
    </div>
  )
}

const newLoader = memo(Loading);
export default newLoader;