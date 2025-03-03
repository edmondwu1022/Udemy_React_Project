import { useLocation, useNavigate } from "react-router"

export default function Header() {
    const location = useLocation()
    const navigation = useNavigate()

    function isPathMatch(path) {
        if (path === location.pathname)
            return true
    }
    return (
        <div className=" bg-white border-b-1 shadow-sm sticky top-0 z-50" >
            <header className="flex justify-between items-center h-15 px-6 max-w-5/6 mx-auto ">
                <div>
                    <img src="https://godotengine.org/assets/logo_dark.svg"
                        alt="Logo"
                        className="cursor-pointer h-10 ml-5"
                        onClick={() => navigation("/")}
                    />
                </div>
                <div>
                    <ul className="flex justify-end items-center space-x-10 mr-5">
                        <li className={
                            `${(isPathMatch("/") ? " text-black border-b-red-500" : "text-gray-400")}
                            cursor-pointer py-3 text-sm font-semibold border-b-3 border-transparent`}
                            onClick={() => navigation('/')}
                        >Home</li>
                        <li className={
                            `${(isPathMatch("/profile") ? " text-black border-b-red-500" : "text-gray-400")}
                            cursor-pointer py-3 text-sm font-semibold border-b-3 border-transparent`}
                            onClick={() => navigation('/profile')}
                        >Profile</li>
                        <li className={
                            `${(isPathMatch("/sign-in") ? " text-black border-b-red-500" : "text-gray-400")}
                            cursor-pointer py-3 text-sm font-semibold border-b-3 border-transparent`}
                            onClick={() => navigation("/sign-in")}
                        >Sing In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}