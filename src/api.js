const words = [
    "serendipity", "ephemeral", "eloquent",
    "resilience", "enigma", "catalyst",
    "paradigm", "zenith", "luminous",
    "audacity", "euphoria", "synergy",
    "pinnacle", "maverick", "cascade",
    "ethereal", "tenacity", "pristine",
    "momentum", "aesthetic", "ambition",
    "divergent", "empirical", "fortitude",
    "harbinger", "innovate", "jubilant",
    "kinetic", "lucid", "narrative"
]

export const getWordOfTheDay = () => {
    const today = new Date().getDate()
    return words[today % words.length]
}

export const getWordMeaning = async (word) => {
    const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    )
    const data = await res.json()
    return data[0]
}