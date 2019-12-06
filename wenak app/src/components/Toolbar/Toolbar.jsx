import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.jsx';
import './Toolbar.css';


class Toolbar extends React.Component {
    render() {
        return(
            <header className="toolbar">
                    <nav className="toolbar__navigation">
                        <div>
                            <DrawerToggleButton />
                        </div>
                        <div className="toolbar__logo"><a href="/">Weenak!</a></div>
                        <div className="spacer" />
                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><a href="/">Products</a></li>
                                <li><a href="/">Users</a></li>

                            </ul>
                        </div>

                    </nav>
                </header>
        );
    }
}

export default Toolbar;