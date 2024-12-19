import React from 'react';

function Skills_section_1({ languages1, img4, rate4 }) {
    return (
        <div className='pt-[6px]'>
            {languages1.map((language, index) => (
                <div key={index} className="flex flex-col space-y-1">
                    {/* Make sure you use the index to match the correct image */}
                    <div className='flex items-center justify-between mt-3 px-2'>
                        <img src={img4[index]} alt={`${language} logo`} className="w-6 h-6 mr-2" />
                        <span className='font-Poppins font-[500] text-xl'>{language}</span>
                    </div>
                    {/* Calculate width dynamically based on rate4 value */}
                    <div
                        className='bg-[var(--first-color)] h-[6px] w-full rounded-lg'
                        style={{ width: `${(rate4 / 5) * 100}%` }} // Dynamically calculate width
                    ></div>
                </div>
            ))}
        </div>
    );
}

export default Skills_section_1;
