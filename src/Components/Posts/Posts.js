import { Post } from '../Post/Post';
import thumbnail from '../../assets/images/post-thumbnail.jpg';
import picture from '../../assets/images/picture.jpg';




export const Posts = (props) => {

    /* const likeMutation = useLikePost();

    const likePost = (blogPost) => {
        const updatedPost = { ...blogPost };
        updatedPost.liked = !updatedPost.liked;
        likeMutation.mutate(updatedPost)
    }; */

    const description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    const description3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

    return (
        <section className='posts'>
            <h1 className='p10'>Posts</h1>
            <div className='postsWrapper'>
                <Post title="Post 1" description={description1} liked={false} />
                <Post imageSrc={thumbnail} title="Post 2" description={description2} liked />
                <Post imageSrc={picture} title="Post 3" description={description3} liked />
            </div>
        </section>
    )
}

