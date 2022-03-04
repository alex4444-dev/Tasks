import './MainBlock.css'
import { articles } from '../../data'

export const MainBlock = () => {
    const Title = 'Main content'

    let Size = Object.keys(articles).length

    return (
        <div>
            <h1>{Title}</h1>
            <div className="articles">
                <div className="article">
                    <h3>{articles.article1.title1}</h3>
                    <p>{articles.article1.description}</p>
                </div>
                <div className="article">
                    <h3>{articles.article2.title2}</h3>
                    <p>{articles.article2.description}</p>
                </div>
                <div className="article">
                    <h3>{articles.article3.title3}</h3>
                    <p>{articles.article3.description}</p>
                </div>
            </div>

            <div>
                <div id="amount"><strong>Amount:</strong>{Size}</div>
            </div>
        </div>
    )
}