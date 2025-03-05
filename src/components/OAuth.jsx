import { FcGoogle } from "react-icons/fc"
export default function OAuth() {
    return (
        <button
            className="flex items-center justify-center whitespace-nowrap rounded-xl py-1 w-3/4 mx-auto mb-3 shadow-md text-sm text-white uppercase bg-red-500 hover:bg-red-600 duration-200 ease-in-out active:bg-red-700"
            type="submit">
            <FcGoogle className="rounded-full bg-white mx-2 " />
            <p className="mr-1">continue with google</p>
        </button>
    )
}