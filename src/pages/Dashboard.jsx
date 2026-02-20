import { useState, useEffect } from "react"
import { getWordOfTheDay, getWordMeaning } from "../api"
import { db } from "../firebase"
import {
    collection,
    addDoc,
    deleteDoc,
    query,
    where,
    onSnapshot,
    getDocs,
} from "firebase/firestore"

function Dashboard({ user }) {
    const [word, setWord] = useState(null)
    const [loading, setLoading] = useState(true)
    const [savedWords, setSavedWords] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [searchResult, setSearchResult] = useState(null)
    const [searching, setSearching] = useState(false)

    // Load Word of the Day
    useEffect(() => {
        const loadWord = async () => {
            const todaysWord = getWordOfTheDay()
            const meaning = await getWordMeaning(todaysWord)
            setWord(meaning)
            setLoading(false)
        }
        loadWord()
    }, [])

    // Load saved words from Firestore
    useEffect(() => {
        if (!user) return

        const q = query(
            collection(db, "saved_words"),
            where("userId", "==", user.uid)
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const words = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data(),
            }))
            setSavedWords(words)
        })

        return () => unsubscribe()
    }, [user])

    // Save a word
    const saveWord = async (wordData) => {
        if (!user) return

        const q = query(
            collection(db, "saved_words"),
            where("userId", "==", user.uid),
            where("word", "==", wordData.word)
        )
        const snapshot = await getDocs(q)

        if (snapshot.empty) {
            await addDoc(collection(db, "saved_words"), {
                userId: user.uid,
                word: wordData.word,
                phonetic: wordData.phonetic || "",
                partOfSpeech: wordData.meanings?.[0]?.partOfSpeech || "",
                definition: wordData.meanings?.[0]?.definitions?.[0]?.definition || "",
                savedAt: new Date(),
            })
        }
    }

    // Remove a word
    const removeWord = async (docId) => {
        await deleteDoc(collection(db, "saved_words").doc ? 
            doc(db, "saved_words", docId) : 
            null
        )
    }

    // Fix removeWord with correct import
    const handleRemove = async (docId) => {
        const { doc } = await import("firebase/firestore")
        await deleteDoc(doc(db, "saved_words", docId))
    }

    // Search a word
    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchInput.trim()) return

        setSearching(true)
        try {
            const meaning = await getWordMeaning(searchInput.toLowerCase())
            setSearchResult(meaning)
        } catch {
            setSearchResult(null)
        }
        setSearching(false)
    }

    const isWordSaved = (wordText) => {
        return savedWords.some((w) => w.word === wordText)
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-400">Please sign in to access dashboard</p>
            </div>
        )
    }

    return (
        <div className="pt-24 px-6 max-w-6xl mx-auto pb-12">
            {/* Welcome */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Welcome back, {user.displayName?.split(" ")[0]}! 👋
                </h1>
                <p className="text-gray-400 mt-1">Here's your daily dashboard</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Word of the Day */}
                <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h2 className="text-sm font-semibold text-blue-400 mb-4">
                        📖 Word of the Day
                    </h2>

                    {loading ? (
                        <div className="flex justify-center p-8">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : word ? (
                        <>
                            <h2 className="text-4xl font-bold mb-2">{word.word}</h2>

                            {word.phonetic && (
                                <p className="text-gray-500 mb-3">{word.phonetic}</p>
                            )}

                            {word.meanings?.[0] && (
                                <>
                                    <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full mb-4">
                                        {word.meanings[0].partOfSpeech}
                                    </span>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                        {word.meanings[0].definitions[0].definition}
                                    </p>

                                    {word.meanings[0].definitions[0].example && (
                                        <p className="text-gray-500 italic mb-4">
                                            "{word.meanings[0].definitions[0].example}"
                                        </p>
                                    )}
                                </>
                            )}

                            <button
                                onClick={() => saveWord(word)}
                                disabled={isWordSaved(word.word)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                    isWordSaved(word.word)
                                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                }`}
                            >
                                {isWordSaved(word.word) ? "✓ Saved" : "Save Word 🔖"}
                            </button>
                        </>
                    ) : (
                        <p className="text-gray-500">Could not load word</p>
                    )}
                </div>

                {/* Search */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h2 className="text-sm font-semibold text-blue-400 mb-4">
                        🔍 Search Any Word
                    </h2>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Type a word..."
                            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                        >
                            {searching ? "Searching..." : "Search"}
                        </button>
                    </form>

                    {searchResult && (
                        <div className="mt-4 pt-4 border-t border-gray-800">
                            <h3 className="text-xl font-bold mb-1">{searchResult.word}</h3>

                            {searchResult.phonetic && (
                                <p className="text-gray-500 text-sm mb-2">{searchResult.phonetic}</p>
                            )}

                            {searchResult.meanings?.[0] && (
                                <>
                                    <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full mb-2">
                                        {searchResult.meanings[0].partOfSpeech}
                                    </span>
                                    <p className="text-gray-300 text-sm">
                                        {searchResult.meanings[0].definitions[0].definition}
                                    </p>
                                </>
                            )}

                            <button
                                onClick={() => saveWord(searchResult)}
                                disabled={isWordSaved(searchResult.word)}
                                className={`mt-3 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                                    isWordSaved(searchResult.word)
                                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                }`}
                            >
                                {isWordSaved(searchResult.word) ? "✓ Saved" : "Save 🔖"}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Saved Words */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">
                    📚 Your Saved Words
                    <span className="text-gray-500 text-sm ml-2">
                        ({savedWords.length})
                    </span>
                </h2>

                {savedWords.length === 0 ? (
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                        <p className="text-4xl mb-3">📚</p>
                        <p className="text-gray-400">No saved words yet</p>
                        <p className="text-gray-600 text-sm mt-1">
                            Save the Word of the Day or search for words to build your list
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {savedWords.map((item) => (
                            <div
                                key={item.docId}
                                className="bg-gray-900 border border-gray-800 rounded-xl p-4 group"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg">{item.word}</h3>
                                        {item.phonetic && (
                                            <p className="text-gray-500 text-xs">{item.phonetic}</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item.docId)}
                                        className="text-gray-600 hover:text-red-400 transition opacity-0 group-hover:opacity-100"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {item.partOfSpeech && (
                                    <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded-full mt-2 mb-2">
                                        {item.partOfSpeech}
                                    </span>
                                )}

                                <p className="text-gray-400 text-sm">
                                    {item.definition}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard