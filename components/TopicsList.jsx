import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"
import Link from "next/link"
import moment from "moment"

export default async function TopicsList() {

    const getTopics = async () => {

        try {
            const res = await fetch(process.env.API_URL + "/api/topics",
                {cache: 'no-store'}
            );
            if (!res.ok) {
                throw new Error("Failed to fetch topics");
            }
            return res.json();
        } catch (error) {
            console.log("error loading topics: ", error);
        }
    }

    let { topics } = await getTopics().then(resp=>{
        return resp ? resp : {};
    })

    return (
        <>
        {topics?.map( (t) => (
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