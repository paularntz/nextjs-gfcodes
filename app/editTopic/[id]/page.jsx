import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async(id) => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/topics/${id}`, 
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
    const {firstName, address, lastName, description, violation} = topic;
    return (
    <EditTopicForm id={id} address={address} lastName={lastName} firstName={firstName} description={description} violation={violation} />
    )
}