function Footer() {
    return (
        <footer className="border-t border-gray-800 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            <span className="text-blue-500">⚡</span> Brioski
                        </h3>
                        <p className="text-gray-500 text-sm">
                            AI-powered productivity platform for modern teams.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm text-gray-300">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-white transition cursor-pointer">Features</li>
                            <li className="hover:text-white transition cursor-pointer">Pricing</li>
                            <li className="hover:text-white transition cursor-pointer">Integrations</li>
                            <li className="hover:text-white transition cursor-pointer">Changelog</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm text-gray-300">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-white transition cursor-pointer">About</li>
                            <li className="hover:text-white transition cursor-pointer">Blog</li>
                            <li className="hover:text-white transition cursor-pointer">Careers</li>
                            <li className="hover:text-white transition cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm text-gray-300">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-white transition cursor-pointer">Privacy</li>
                            <li className="hover:text-white transition cursor-pointer">Terms</li>
                            <li className="hover:text-white transition cursor-pointer">Security</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-600 text-sm">
                        © 2025 Brioski. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <span className="text-gray-600 hover:text-white transition cursor-pointer">𝕏</span>
                        <span className="text-gray-600 hover:text-white transition cursor-pointer">LinkedIn</span>
                        <span className="text-gray-600 hover:text-white transition cursor-pointer">GitHub</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer