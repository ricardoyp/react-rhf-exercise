import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../API/posts";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export const PostDetail = () => {

    const { postId } = useParams();

    const { data: postData, isLoading } = useQuery({
        queryKey: ['postKeyId'],
        queryFn: () => getPostById(postId)  // MUY IMPORTANTE  " () => "
    });

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!postData || postData.length === 0) {
        return <div>No hay publicaciones disponibles.</div>;
    }

    console.log("postData", postData)

    return (
        <>
            <div key={postData.id} className="flex flex-col items-center">
            <Card className="min-w-[400px]">
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
                    <p className="text-lg font-bold">{postData.title}</p>
                </CardBody>
            </Card>
            </div>
        </>
    );
};
