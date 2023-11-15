import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"
import Link from "next/link"
import moment from "moment"
import { useState } from "react"

export default function SearchList(props) {
    const sstr = props.sstr;
    const [topics, setTopics] = useState([])

    const fetchTopics = async () => {

        try {
            const res = await fetch (`/api/search?sstr=${sstr}`, {cache: 'no-store'})
            const data = await res.json()
            setTopics(data.topics);
            
        } catch (error) {
            console.log(error);  
        }
        
    }

    fetchTopics();

    return (
        <>
        {topics && topics?.map( (t) => (
            <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    {moment(t.date).format('LLLL')}
                    <h2 className="font-bold text-2xl">{t.firstName} {t.lastName}</h2>
                    <strong><i>{t.violation}</i></strong><br />
                    <strong>{t.address}</strong>
                    <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn id={t._id} />
                    <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))}
        </>
    )
}