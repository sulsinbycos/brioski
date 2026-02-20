import { useState, useEffect } from "react"
import { getWordOfTheDay, getWordMeaning } from "../api"

function WordWidget() {
    const [word, setWord] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        loadWord()
    }, [])

    const loadWord = async () => {
        const todaysWord = getWordOfTheDay()
        const meaning = await getWordMeaning(todaysWord)
        setWord(meaning)
        setLoading(false)
    }

    if (loading) return null

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/25"
            >
                📖
            </button>

            {isOpen && (
                <div className="fixed bottom-20 right-6 z-50 w-80 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-blue-400">
                            📖 Word of the Day
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-white transition"
                        >
                            ✕
                        </button>
                    </div>

                    {word && (
                        <>
                            <h2 className="text-2xl font-bold mb-1">
                                {word.word}
                            </h2>

                            {word.phonetic && (
                                <p className="text-gray-500 text-sm mb-3">
                                    {word.phonetic}
                                </p>
                            )}

                            {word.meanings?.[0] && (
                                <>
                                    <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full mb-3">
                                        {word.meanings[0].partOfSpeech}
                                    </span>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                        {word.meanings[0].definitions[0].definition}
                                    </p>

                                    {word.meanings[0].definitions[0].example && (
                                        <p className="text-gray-500 text-sm italic">
                                            "{word.meanings[0].definitions[0].example}"
                                        </p>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default WordWidget