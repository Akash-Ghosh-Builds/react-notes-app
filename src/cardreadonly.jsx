function CardReadonly({heading, note}) {

    return (
        <>
            <div className='border border-gray-300 p-2 text-white mx-[30px] mt-[30px] rounded-md flex flex-col items-end '>
                <h2
                className='field-sizing-content w-full min-h-[40px] resize-none overflow-hidden 
                rounded text-2xl bg-white text-black text-center font-semibold mb-[20px]'

                >{heading}</h2>
                <p
                className="field-sizing-content w-full min-h-[40px] resize-none overflow-hidden rounded "
                >{note}</p>
                <div className="flex flex-row ">
                    <button 
                    className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                    px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400 ml-[50px]'>Edit</button>
                    <button 
                    className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                    px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400 ml-[50px]'>Remove</button>
                </div>

            </div>
        </>
    )
}
export default CardReadonly