function Q_section({ data, place, location, year, type }) {
    return (
        <div className="mt-10 flex flex-col space-y-6 pl-[4%] ">
            {data && data.length > 0 ? (
                data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col space-y-2 w-[44%] ${
                            index % 2 === 0 ? "mr-auto" : "ml-auto"
                        }`}
                    >
                        <h1 className="font-Poppins font-[500] text-[1.2rem]">{item}</h1>
                        <h1 className="font-Poppins text-[1rem] text-gray-500">
                            {place[index]}, {location[index]} 
                        </h1>
                        <h1 className="font-Poppins text-[1rem] text-gray-500">{year[index]}</h1>
                    </div>
                ))
            ) : (
                <p>No {type.toLowerCase()} data available.</p>
            )}
        </div>
    );
}

export default Q_section;
