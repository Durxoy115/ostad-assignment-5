import React, { useState } from 'react';

const Contents = () => {
    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const handleClick = () => {
        setDisplayedText(text);
      };
      const handleChange = (event) => {
        setText(event.target.value);
        
      };
    return (
        <div>
            <div>
            <label className="relative block m-6" value={text} onChange={handleChange}>
  
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">

  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Your Text..." type="text" name=""/>
</label>
            </div>
            <div className='flex justify-center items-center'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Show Text</button>

            </div>
            <div className='flex justify-center items-center font-bold'>
                {displayedText}
                
            </div>
        </div>
    );
};

export default Contents;