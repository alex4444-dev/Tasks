import './Post.css';
import { ReactComponent as HeartIcon } from '../../assets/images/heart.svg';
import imagePlaceholder from '../../assets/images/img_placeholder.jpg'


export const Post = ({ title, imageSrc, description, liked, likePost }) => {

    if (!title && !description) {
        return null
    }

    const customFilling = liked ? 'crimson' : 'black'

    const finalDescription = description.length > 100 ? (
        <>
            <span>{description.slice(0, 101)}...</span>
            <button className='readMore'>Подробнее</button>
        </>
    ) : description



    return (
        <div className='post p10'>
            <header className='postHeader'>
                <img src={imageSrc ? imageSrc : imagePlaceholder}
                    alt='Thumbnail'
                />
                <h2>{title}</h2>
            </header>
            <div className='content'>
                <p className='description'>
                    {finalDescription}
                </p>
            </div>
            <footer className='postFooter'>
                <button onClick={likePost} className='likeBtn'>
                    <HeartIcon style={{ fill: customFilling }} />
                </button>
            </footer>
        </div>
    )
}