import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/axios-config";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true)
            try {
                const response = await API.get(`/products/${id}`);
                setProduct(response.data);

                const commentIds = response.data.comments;
                const commentRequests = commentIds.map(commentId =>
                    API.get(`/comments/${commentId}`)
                );
                const commentResponses = await Promise.all(commentRequests);
                const commentData = commentResponses.map(response => response.data);
                setComments(commentData);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {

            const commentDTO = {
                text: commentText,
                user: "60db8c102f7f5c30289d6b20"
            }

            const response = await API.post(`/comments/${id}`, commentDTO);
            alert('Comment added successfully!');
            setComments([...comments, response.data]);

            setCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);

        }
    };

    return (
        <div className="container mx-auto mt-4">
            {product && !loading ? (
                <div>
                    <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>
                    <p className="mb-4">{product.productQuantity}</p>
                    <form onSubmit={handleCommentSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="commentText">Add Comment:</label>
                            <textarea
                                id="commentText"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Comment</button>
                    </form>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold mb-2">Comments</h3>
                        <ul>
                            {comments.map(comment => (
                                <li key={comment._id} className="mb-2">
                                    {console.log(comment)}
                                    {comment._id === id}
                                    <p>{comment.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}

export default ProductDetails;