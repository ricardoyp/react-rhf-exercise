const postApiUrl = "http://localhost:3000/posts";

export const getPostById = async (postId) => {
    const response = await fetch(`${postApiUrl}/${postId}`);
    const jsonData = await response.json();
        console.log("getPost",jsonData);
    return jsonData;
}

export const getPosts = async () => {
    const response = await fetch(postApiUrl);
    const jsonData = await response.json();
        console.log("getPosts", jsonData);
    return jsonData;
}

export const postPost = async (data) => {
        // console.log("data: ", data);
    const response = await fetch(postApiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    const jsonData = await response.json();
    return jsonData;
}