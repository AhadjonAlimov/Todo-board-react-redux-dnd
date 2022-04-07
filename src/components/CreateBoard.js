import React from 'react'

function CreateBoard() {
    return (
        <>
            <div className="boardPage createBoardSpace relative flex">
                <div className="createBoard1 block lg1:hidden">
                    <button className="createBoard flex items-center justify-center space-x-2 text-blue-400 p-5 border border-dashed rounded-xl border-blue-400 self-start m-2 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="font-medium">CREATE NEW BOARD</span>
                    </button>
                </div>
                <div>
                    <button className="createBoard createBoardHide flex items-center justify-center space-x-2 text-blue-400 p-5 border border-dashed rounded-xl border-blue-400 self-start mx-3 my-2 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="font-medium">CREATE NEW BOARD</span>
                    </button>
                </div>
            </div>

        </>

    )
}

export default CreateBoard
