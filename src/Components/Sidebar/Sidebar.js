import './Sidebar.css'
import { Navigation2 } from './../Navigation/Navigation'

export const Sidebar = () => {
    const title = 'Sidebar'

    return (
        <div>
            <aside>
                <h2>{title}</h2>
                <Navigation2 />
            </aside>
        </div>
    )
}