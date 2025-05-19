import React, { useState } from 'react'

export interface AccordianItem {
    question: string;
    answer: string;
}

interface AccordianModalProps {
    handleClose: () => void;
    setAccordianData: React.Dispatch<React.SetStateAction<AccordianItem[]>>;
}

function AccordianModal({ handleClose, setAccordianData }: AccordianModalProps) {
    const [modalData, setModalData] = useState({
        question: "",
        answer: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (modalData.question.trim() && modalData.answer.trim()) {
            setAccordianData(prev => [...prev, {
                question: modalData.question.trim(),
                answer: modalData.answer.trim()
            }]);
            handleClose();
        }
    };

    return (
        <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Add New FAQ</h2>
                <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                    ✕
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question
                    </label>
                    <textarea
                        value={modalData.question}
                        onChange={(e) => setModalData(prev => ({ ...prev, question: e.target.value }))}
                        placeholder="Enter your question..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                        autoFocus
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Answer
                    </label>
                    <textarea
                        value={modalData.answer}
                        onChange={(e) => setModalData(prev => ({ ...prev, answer: e.target.value }))}
                        placeholder="Enter the answer..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={4}
                    />
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add FAQ
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AccordianModal