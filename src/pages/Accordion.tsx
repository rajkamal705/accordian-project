import { useEffect, useState } from 'react'
import AccordianModal from '../components/AccordianModal';
import type { AccordianItem } from '../components/AccordianModal';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [accordianData, setAccordianData] = useState<AccordianItem[]>([]);

    // get Item:
    useEffect(() => {
        const storedData = localStorage.getItem('accordianData');
        if (storedData) {
            setAccordianData(JSON.parse(storedData));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('accordianData', JSON.stringify(accordianData));
    }, [accordianData]);

    function handleAddItem() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function toggleAccordion(index: number) {
        if (activeIndex === index) {
            setActiveIndex(null); // collapse
        } else {
            setActiveIndex(index); // open
        }
    }

    function handleDeleteItem() {
        
    }

    return (
        <div>
            <div className='flex justify-end mb-6'>
                <div className='flex flex-col'>
                    <label>Add/Edit/Delete</label>
                    <select id='accordian' name='accordian' className='border-1 bg-white px-6 py-2 rounded-md'>
                        <option onClick={handleAddItem} className='bg-green-600 hover:cursor-pointer hover:bg-green-800 rounded-md px-6 py-3 text-white font-[500]'>Add Item</option>
                        <option onClick={handleDeleteItem} className='bg-green-600 hover:cursor-pointer hover:bg-green-800 rounded-md px-6 py-3 text-white font-[500]'>Delete Item</option>
                    </select>
                </div>
            </div>

            {isModalOpen && (
                <div className='absolute top-1/3 left-1/2 right-1/2'>
                    <AccordianModal handleClose={handleCloseModal} setAccordianData={setAccordianData} />
                </div>
            )}

            <div className='flex flex-col gap-2'>
                {accordianData.map((item, index) => (
                    <div key={index} className='flex gap-2'>
                        <div className='flex justify-between p-8 bg-white rounded-xl shadow-md w-full'>
                            <div>
                                <div>Q: {item.question}</div>
                                {activeIndex === index && (
                                    <div className='font-bold'>ans: {item.answer}</div>
                                )}
                            </div>

                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={() => { toggleAccordion(index) }}
                                    className='flex justify-center items-center w-10 h-10 text-2xl bg-black text-white rounded-full hover:cursor-pointer'
                                >
                                    {activeIndex === index ? '-' : '+'}
                                </button>
                            </div>
                        </div>

                        <div>
                            <input type='checkbox' className='w-4 h-4' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion
