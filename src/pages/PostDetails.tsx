import { useParams } from "react-router-dom";

function PostDetails() {
    let { id } = useParams()
    return (
        <div>
            <p>Id: {id}</p>
        </div>
    );
}

export default PostDetails;