import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}>GFD Codes Enforcement</Link>
            <div>
                <Link className="bg-white p-2 mx-5" href={'/addTopic'}>Contact</Link>
                <Link className="bg-white p-2" href={'/findAddress'}>Search</Link>
            </div>
        </nav>
    )
}