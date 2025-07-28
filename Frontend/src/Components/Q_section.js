function Q_section({ data, place, location, year, type, isdarkmode }) {
    return (
        <div className="relative">
            {data && data.length > 0 ? (
                data.map((item, index) => (
                    <div
                        key={index}
                        className={`relative mb-8 ${
                            index % 2 === 0 ? "pr-[55%]" : "pl-[55%]"
                        }`}
                    >
                        <div className={`p-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                            <h3 className="font-Poppins font-semibold text-lg mb-2">{item}</h3>
                            <p className={`font-Poppins text-sm mb-1 ${isdarkmode ? "text-gray-300" : "text-gray-600"}`}>
                                {place[index]}, {location[index]}
                            </p>
                            <p className={`font-Poppins text-sm ${isdarkmode ? "text-gray-400" : "text-gray-500"}`}>
                                {year[index]}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-8">
                    <p className={`${isdarkmode ? "text-gray-400" : "text-gray-500"}`}>
                        No {type.toLowerCase()} data available.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Q_section;
