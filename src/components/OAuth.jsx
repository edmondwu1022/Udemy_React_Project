import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"
import { db } from "../firebase.config"
import { useNavigate } from "react-router"

export default function OAuth() {
    const navigation = useNavigate()
    async function onGoogleClick() {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            //check user
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            console.log(docSnap);
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.uid,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigation("/")

        } catch (error) {
            console.log(error);

            toast.error("Could not log in")
        }

    }
    return (
        <button
            className="flex items-center justify-center whitespace-nowrap rounded-xl py-2 w-3/4 mx-auto mb-3 shadow-md text-sm text-white uppercase bg-red-500 hover:bg-red-600 duration-200 ease-in-out active:bg-red-700"
            type="button"
            onClick={onGoogleClick}>
            <FcGoogle className="rounded-full bg-white mx-2 text-xl" />
            <p className="mr-1">continue with google</p>
        </button>
    )
}