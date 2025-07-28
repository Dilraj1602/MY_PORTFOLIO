import React from 'react';
import "../App.css";

function Skills_section({ languages, img1, frameworks, img2, tools, img3, rate1, rate2, rate3, rate4 }) {
    return (
        <div className='w-[90%] sm:w-full ' >
            {/* Languages */}
            {languages && languages.map((language, index) => (
                <div key={index} className="flex flex-col space-y-1">
                    <div className='flex items-center justify-between px-2 mt-3'>
                        <div className="mr-2">
                            {/* Set the size for icons */}
                            {React.cloneElement(img1[index], { size: '2rem' })}
                        </div>
                        <span className=' font-Poppins font-[500] text-xl'>{language}</span>
                    </div>
                    {/* Set the progress bar width dynamically based on rate1 */}
                    <div className='bg-[var(--first-color)] h-[6px] rounded-lg'
                        style={{ width: `${(rate1[index] / 5) * 100}%` }}></div>
                </div>
            ))}

            {/* Frameworks */}
            {frameworks && frameworks.map((framework, index) => (
                <div key={index} className="flex flex-col space-y-1">
                    <div className='flex items-center justify-between px-2 mt-3'>
                        <div className="mr-2">
                            {/* Set the size for icons */}
                            {React.cloneElement(img2[index], { size: '2rem' })}
                        </div>
                        <span className='font-Poppins font-[500] text-xl'>{framework}</span>
                    </div>
                    {/* Set the progress bar width dynamically based on rate2 */}
                    <div className='bg-[var(--first-color)] h-[6px] w-full rounded-lg'
                        style={{ width: `${(rate2[index] / 5) * 100}%` }}></div>
                </div>
            ))}

            {/* Tools */}
            {tools && tools.map((tool, index) => (
                <div key={index} className="flex flex-col space-y-1">
                    <div className='flex items-center justify-between px-2 mt-3'>
                        <div className="mr-2">
                            {/* Set the size for icons */}
                            {React.cloneElement(img3[index], { size: '2rem' })}
                        </div>
                        <span className='font-Poppins font-[500] text-xl'>{tool}</span>
                    </div>
                    {/* Set the progress bar width dynamically based on rate3 */}
                    <div className='bg-[var(--first-color)] h-[6px] w-full border-blue-50 rounded-lg'
                        style={{ width: `${(rate3[index] / 5) * 100}%` }  }></div>
                </div>
            ))}

            
        </div>
    );
}

export default Skills_section;
