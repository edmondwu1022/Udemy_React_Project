import { useState } from "react"

export default function Profile() {
    const [formData, setFormData] = useState({
        name: "Edmond",
        email: ""
    })
    const { name, email } = formData
    return (
        <>
            <section className="flex justify-self-center flex-col">
                <h1 className="text-3xl text-center font-bold mt-6">My Profile</h1>
                <div className="w-full">
                    <form>
                        {/* Name Input */}
                        <input
                            type="text"
                            id="name"
                            value={name}
                            disabled
                            className="sm:w-full py-2 px-4 mt-6 rounded-md text-gray-700 bg-white "
                        ></input>
                    </form>
                </div>
            </section>
        </>
    )
}