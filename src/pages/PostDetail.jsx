import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../API/posts";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export const PostDetail = () => {
    const { postId } = useParams();
    
    const { data: postData, isLoading } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => getPostById(postId)  // MUY IMPORTANTE  " () => "
    });
    console.log("postData", postData)
    
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!postData || postData.length === 0) {
        return <div>No hay publicaciones disponibles.</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center mt-5">
            <Card className="min-w-[400px] max-w-[800px]">
                <CardHeader>
                <div className="flex flex-col">
                    <p className="text-md">{postData.author}</p>
                    <p className="text-small text-default-500">{postData.email}</p>
                </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-lg font-bold">{postData.title}</p>
                </CardBody>
                <Divider />
                <CardBody>
                    <p className="text-base">{postData.body}</p>
                </CardBody>
            </Card>
            </div>
        </>
    );
};
