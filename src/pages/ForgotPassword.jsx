import { useState } from "react"
import { Link } from "react-router"
import { fetchSignInMethodsForEmail, getAuth, sendPasswordResetEmail, onAuthStateChanged, isSignInWithEmailLink, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import OAuth from "../components/OAuth"
import { getDoc } from "firebase/firestore"

export default function ForgotPassword() {
    const [email, setEmail] = useState("")

    function onChange(e) {
        setEmail(e.target.value)
    }

    async function onSubmit(e) {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success("Please check your email")

        } catch (error) {
            console.log("No Account found")
        }
    }

    return (
        <section>
            <h1 className="text-center font-bold text-3xl mt-6">Forgot Password</h1>
            <div className="flex justify-center flex-wrap items-center mx-auto max-w-6xl px-6 py-12">
                <div className="md:w-[67%] lg:w-[50%] mb-6 md:mb-6">
                    <img src="https://media.istockphoto.com/id/1005484310/photo/house-key-and-key-chain-on-white-background.jpg?s=2048x2048&w=is&k=20&c=pftCaIFLtywBsPzUdE928ajnpvD044xjWeaALP5giA4="
                        alt="Key"
                        className="w-full rounded-2xl" />
                </div>
                <div className="md:w-[67%] lg:w-[40%] w-full lg:ml-20">
                    <form onSubmit={onSubmit}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email address"
                            onChange={onChange}
                            inputMode="text"
                            className="bg-white w-full px-4 py-2 text-md text-gray-700 shadow-md border-1 border-blue-500 rounded-lg duration-300 ease-in-out hover:border-amber-400 outline-emerald-600 mb-3" />
                        <div className="flex flex-row justify-between flex-wrap mb-6">
                            <p className="text-md sm:text-sm">Hava a account?<Link to={"/sign-in"} className="ml-1 text-red-500 hover:text-red-600 hover:font-bold duration-200 ease-in">Sign In</Link></p>
                        </div>
                        <button
                            type="submit"
                            className="flex justify-center rounded-xl py-1 w-3/4 mx-auto mb-3 shadow-md text-md uppercase text-white bg-blue-500 hover:bg-blue-600 duration-200 ease-in-out active:bg-blue-700">
                            Send rest email
                        </button>
                        <div className="flex items-center mb-3
                            before:border-t before:flex-1 after:border-t after:flex-1">
                            <p className="text-sm font-normal text-center basis-1/5">OR</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}