import React, { useState } from 'react'

export interface AccordianItem {
    question: string;
    answer: string;
}

interface AccordianModalProps {
    handleClose: () => void;
    setAccordianData: React.Dispatch<React.SetStateAction<AccordianItem[]>>;
}

function AccordianModal({ handleClose, setAccordianData }: AccordianModalProps,) {
    const [modalData, setModalData] = useState({
        question: "",
        answer: ""
    })

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        setAccordianData(prev => [...prev, modalData]);
        handleClose();
    }

    return (
        <div className=''>
            <div className='bg-black w-96 h-80 rounded-md p-4'>
                <div className='flex justify-end'>
                    <button onClick={handleClose} className='bg-white h-10 w-10 rounded-full p-2 hover:cursor-pointer'>x</button>
                </div>

                <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 mt-4'>
                    <textarea value={modalData.question} onChange={(e) => setModalData({ ...modalData, 'question': e.target.value })} placeholder='Question' className='px-4 py-2 border border-gray-300 rounded-md bg-white' />
                    <textarea value={modalData.answer} onChange={(e) => setModalData({ ...modalData, 'answer': e.target.value })} placeholder='Answer' className='px-4 py-2  border border-gray-300 rounded-md bg-white' />
                    <button type='submit' className='bg-blue-500 rounded-md py-2 text-white font-semibold'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AccordianModal
