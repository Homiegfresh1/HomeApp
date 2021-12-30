import { useState } from "react";
import { Link } from "react-router-dom"
import {
    Navbar as BootStrapNavbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink
} from "reactstrap"

const Navbar = () => {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <div>
            <BootStrapNavbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">HomeApp</NavbarBrand>
                    <NavbarToggler onClick={() => { toggleOpen(!isOpen) }} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to="/">Home</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/Groceries">Groceries</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/Recipes">Recipes</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </BootStrapNavbar>
        </div>
    )
}

export default Navbar;