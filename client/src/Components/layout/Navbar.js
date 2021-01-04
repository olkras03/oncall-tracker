import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to='/'>
                        <i className="fas fa-code" /> OnCall Tracker
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
            {/* <Navbar color="light" light expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">OnCall Tracker</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/olkras03/oncall-tracker/tree/master">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
}

export default Navbar;