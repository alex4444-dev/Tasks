import { links, links2 } from '../../data'

export const Navigation = () => {

    return (
        <div>
            <div className='topbar'>
                <ul>
                    <a href={links.link1.path}>Home</a>
                    <a href={links.link2.path}>About</a>
                    <a href={links.link3.path}>Contacts</a>
                </ul>
            </div>

        </div>
    )
}

export const Navigation2 = () => {

    return (
        <div>
            <div>
                <ul>
                    <li><a href={links2.link1.path}>Яндекс</a></li>
                    <li><a href={links2.link2.path}>ВК</a></li>
                    <li><a href={links2.link3.path}>Волнорез</a></li>
                </ul>
            </div>

        </div>
    )
}



