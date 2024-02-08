import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../API/posts";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Posts = () => {
    const { data: postsData, isLoading } = useQuery({
        queryKey: ["postKey"],
        queryFn: getPosts,
    });

    // console.log("postsData", postsData)

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!postsData || postsData.length === 0) {
        return <div>No hay publicaciones disponibles.</div>;
    }

    return (
        <div className="flex flex-col items-center">
            {postsData.map((post) => (
                <Link
                    key={post.id}
                    className="min-w-[600px] mt-5 mr-5"
                    to={`/post/${post.id.toString()}`}
                >
                    <Card>
                        <CardHeader>
                            <p className="text-small text-default-500">{post.author}</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="text-lg font-bold">{post.title}</p>
                        </CardBody>
                        <Divider />
                    </Card>
                </Link>
            ))}
        </div>
    );
};
