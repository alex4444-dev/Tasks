import './TopBar.css'
import { Navigation } from './../Navigation/Navigation'

export const TopBar = () => {


    return (
        <div className="topbar">
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
        </div>
    );
}
