import { useState, useEffect, useCallback, useRef } from 'react'


function CardInput({onAddNote}) {

    const [heading, setHeading] = useState("");
    const [notes, setNotes] = useState("");

    function handleSave() {
        const newNote = {
            id: Date.now(),
            heading: heading,
            note: notes
        };
        onAddNote(newNote);
        setHeading("");
        setNotes("");
    }
    return (
        <>
            <div className='border border-gray-300 p-2 text-white mx-[30px] mt-[30px] rounded-md flex flex-col items-end'>
                <textarea
                    className='field-sizing-content w-full min-h-[40px] resize-none overflow-hidden 
        rounded text-2xl bg-white text-black text-center font-semibold mb-[20px]'
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    placeholder='Heading'></textarea>


                <textarea
                    className="field-sizing-content w-full min-h-[40px] resize-none overflow-hidden rounded"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes...."></textarea>
                <button className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400'
                    onClick={handleSave}>Save</button>
            </div>
        </>
    )
}
export default CardInput