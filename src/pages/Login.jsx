import { auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth"

function Login({ setPage }) {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider)
            setPage("dashboard")
        } catch (error) {
            console.log("Login failed:", error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-2">
                    Welcome to <span className="text-blue-500">Brioski</span>
                </h1>
                <p className="text-gray-400 mb-8">
                    Sign in to access your dashboard
                </p>

                <button
                    onClick={handleLogin}
                    className="flex items-center justify-center gap-3 w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                    Sign in with Google
                </button>

                <p className="text-gray-600 text-xs mt-6">
                    By signing in, you agree to our Terms and Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Login