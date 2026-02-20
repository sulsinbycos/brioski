import { auth } from "../firebase"
import { signOut } from "firebase/auth"

function Navbar({ user, setPage }) {
    const handleLogout = async () => {
        await signOut(auth)
        setPage("landing")
    }

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1
                    onClick={() => setPage("landing")}
                    className="text-2xl font-bold cursor-pointer"
                >
                    <span className="text-blue-500">⚡</span> Brioski
                </h1>

                <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                    <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
                    <a href="#pricing" className="hover:text-white transition">Pricing</a>
                </div>

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <button
                                onClick={() => setPage("dashboard")}
                                className="text-sm text-gray-400 hover:text-white transition"
                            >
                                Dashboard
                            </button>
                            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full">
                                <img
                                    src={user.photoURL}
                                    alt="avatar"
                                    className="w-6 h-6 rounded-full"
                                />
                                <span className="text-sm text-gray-300">
                                    {user.displayName?.split(" ")[0]}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-gray-500 hover:text-red-400 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => setPage("login")}
                                className="text-sm text-gray-400 hover:text-white transition"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setPage("login")}
                                className="bg-blue-600 text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Get Started
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar