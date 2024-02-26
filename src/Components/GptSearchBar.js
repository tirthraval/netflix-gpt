import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant';

const GptSearchBar = () => {
    const selectLang = useSelector(store => store?.config?.lang);
    
    
  return (
    <div className='pt-[15%] flex justify-center'>
        <form className='bg-black grid grid-cols-12 w-1/2 '>
            <input className='border p-4 m-3 col-span-9 border-black' placeholder= {lang[selectLang].gptSearchPlaceholder}></input>
            <button className='bg-red-700 p-4 m-3 col-span-3 rounded-lg'>{lang[selectLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar