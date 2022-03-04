import './Footer.css'

export const Footer = () => {

    const logYear = () => new Date().getFullYear()

    return (
        <div className='footer'>
            <footer>
                Footer - <span>{logYear()}</span>
            </footer>
        </div>
    )
}