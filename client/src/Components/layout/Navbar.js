import React from 'react';

const Navbar = (props) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <a href="index.html"><i className="fas fa-code"></i> OnCall Tracker</a>
                </h1>
                <ul>
                    <li><a href="profiles.html">Developers</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="login.html">Login</a></li>
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