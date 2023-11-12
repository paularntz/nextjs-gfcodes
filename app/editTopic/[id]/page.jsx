import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async(id) => {
    try {
        const res = await fetch(`https://admirable-conkies-c2b178.netlify.app/api/topics/${id}`, 
            {cache: "no-store"}
        );
        if (!res.ok) {
            throw new Error('Failed to fetch topic.')        
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic({ params }) {
    const {id} = params;
    const {topic} = await getTopicById(id);
    const {title, description, firstName} = topic;
    return (
        <EditTopicForm id={id} title={title} description={description} firstName={firstName} />
    )
}