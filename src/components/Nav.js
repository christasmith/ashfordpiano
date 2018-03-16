import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAddressCard} from '@fortawesome/fontawesome-free-solid'

const Nav = () => {
    return (
        <nav>
        <ul>
            <a href="#showcase">
                <li>Home</li>
            </a>

            <a href="#section-form">
                <li>Contact Us</li>
            </a>

            <a href="#section-b">
                <li>About</li>
            </a>
        </ul>

        </nav>

    );
};
export { Nav as default };
