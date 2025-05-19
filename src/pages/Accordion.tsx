import { useEffect, useState } from 'react'
import AccordianModal from '../components/AccordianModal';
import type { AccordianItem } from '../components/AccordianModal';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [accordianData, setAccordianData] = useState<AccordianItem[]>([
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces, particularly single-page applications."
        },
        {
            question: "Why use TypeScript?",
            answer: "TypeScript adds static typing to JavaScript, improving code quality and developer productivity."
        }
    ]);

    // Load from localStorage
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

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleDelete = () => {
        const updatedData = accordianData.filter((_, idx) => !selectedItems.includes(idx));
        setAccordianData(updatedData);
        setSelectedItems([]);
        setDeleteMode(false);
    };

    const toggleSelection = (index: number) => {
        setSelectedItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Accordian</h1>

            <div className="max-w-3xl mx-auto p-6">
                <div className="flex justify-end mb-8">
                    <div className="flex gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                            Add Item
                        </button>
                        <button
                            onClick={() => setDeleteMode(!deleteMode)}
                            className={`px-6 py-2 ${deleteMode ? 'bg-rose-600' : 'bg-gray-600'} text-white rounded-lg hover:opacity-90 transition-opacity`}
                        >
                            {deleteMode ? 'Cancel Delete' : 'Delete Items'}
                        </button>
                        {deleteMode && (
                            <button
                                onClick={handleDelete}
                                disabled={selectedItems.length === 0}
                                className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 disabled:opacity-50 transition-colors"
                            >
                                Confirm Delete
                            </button>
                        )}
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50">
                        <AccordianModal
                            handleClose={() => setIsModalOpen(false)}
                            setAccordianData={setAccordianData}
                        />
                    </div>
                )}

                <div className="space-y-4">
                    {accordianData.map((item, index) => (
                        <div
                            key={index}
                            className="relative group transition-all"
                        >
                            {deleteMode && (
                                <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(index)}
                                        onChange={() => toggleSelection(index)}
                                        className="w-5 h-5 accent-rose-500 cursor-pointer"
                                    />
                                </div>
                            )}

                            <div className={`p-6 rounded-xl shadow-lg transition-colors ${activeIndex === index
                                ? 'bg-gradient-to-br from-blue-50 to-purple-50'
                                : 'bg-white hover:bg-gray-50'
                                }`}>
                                <div className="flex justify-between items-center">
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.question}
                                        </h3>
                                        {activeIndex === index && (
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                                    >
                                        {activeIndex === index ? '−' : '+'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordion