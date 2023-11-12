"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function AddTopic() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [violation, setViolation] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and description are required.")
            return
        }
        try {
            const res = await fetch('https://admirable-conkies-c2b178.netlify.app/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description }),

            })
            if (res.ok) {
                router.refresh();
                router.push("/");
            } else {
                throw new Error("Failed to create topic");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div class="grid grid-cols-2 gap-4">
                <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    placeholder="First Name"
                    className="border border-slate-500 px-8 py-2"
                />

                <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    placeholder="Last Name"
                    className="border border-slate-500 px-8 py-2"
                />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                    className="border border-slate-500 px-8 py-2"
                />
                <select
                    onChange={(e) => setViolation(e.target.value)}
                    selected={violation}
                    placeholder="Contact Description"
                >
                    <option value="0" selected disabled>Select One</option>
                    <option value="Tall Grass">Tall Grass</option>
                    <option value="Trash In Yard">Trash In Yard</option>
                    <option value="Downed Tree">Downed Tree</option>
                    <option value="Illegal Burning">Illegal Burning</option>
                </select>
            </div>
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                className="border border-slate-500 px-8 py-2"
            />
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Add Topic
            </button>
        </form>
    )
}