import { useState, useEffect } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
    const [user, setUser] = useState(null)
    const [page, setPage] = useState("landing")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    return (
        <div className="bg-gray-950 min-h-screen text-white">
            <Navbar user={user} setPage={setPage} />
            {page === "landing" && <Landing setPage={setPage} />}
            {page === "login" && <Login setPage={setPage} />}
            {page === "dashboard" && <Dashboard user={user} />}
        </div>
    )
}

export default App