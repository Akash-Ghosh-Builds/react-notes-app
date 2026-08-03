import { useState } from "react"
function CardReadonly({ heading, note, id, onRemove, onEdit }) {
    const [editableHeading, setEditableHeading] = useState(heading)
    const [editableNote, setEditableNote] = useState(note)
    const [isEditing, setIsEditing] = useState(false)

    function handleSave() {
        onEdit(id, editableHeading, editableNote);
        setIsEditing((prev) => !(prev));
             
    }

    function handleCancel (){
        setEditableHeading (heading);
        setEditableNote (note); 
        setIsEditing(false);
    }

    return (
        <>
            <div className='border border-gray-300 p-2 text-white mx-[30px] mt-[30px] rounded-md flex flex-col items-end '>
                <textarea
                    className='field-sizing-content w-full min-h-[40px] resize-none overflow-hidden 
                rounded text-2xl bg-white text-black text-center font-semibold mb-[20px]'
                    value={editableHeading}
                    onChange={(e) => setEditableHeading(e.target.value)}
                    readOnly={!isEditing}
                />
                <textarea
                    className="field-sizing-content w-full min-h-[40px] resize-none overflow-hidden rounded "
                    value={editableNote}
                    onChange={(e) => setEditableNote(e.target.value)}
                    readOnly={!isEditing}
                />
                <div className="flex flex-row ">
                    {!isEditing ?
                        (<>
                            <button
                                className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                    px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400 ml-[50px]'
                                onClick={handleSave}>Edit</button>
                            <button
                                className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                    px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400 ml-[50px]'
                                onClick={() => onRemove(id)}>Remove</button>
                        </>) :
                        (<><button
                            className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                    px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400 ml-[50px]'
                            onClick={handleSave}>Save</button>
                            <button
                                className='bg-blue-600 text-white font-bold text-xl mt-[15px] 
                    px-[15px] py-[5px] rounded-md cursor-pointer hover:bg-blue-400 ml-[50px]'
                                onClick={handleCancel}>Cencel</button>
                        </>)
                    }
                </div>

            </div>
        </>
    )
}
export default CardReadonly