const convertUrlToImage = async(url) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop();
    const fileName = url.split("/").pop();
    const metadata = {
        type: `image/${ext}`
    };
    return new File([data], fileName, metadata);
}

export default convertUrlToImage;