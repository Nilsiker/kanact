import { useKeycloak } from "@react-keycloak/web"
import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { File, PlusCircle, User } from "react-feather"
import { Link, useLocation } from "react-router-dom"
import LoginButton from "./LoginButton"

const Header = ({ userInfo }) => {
    const { keycloak, initialized } = useKeycloak()

    return (
        <header>
            <Navbar variant="dark" bg="dark" expand="xs">

                <Navbar.Brand href="/">Kan|Act</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                {initialized && keycloak.authenticated
                    ?
                    <>
                        <NavDropdown
                            alignRight
                            className="text-navlink"
                            title={<><User size="30" /> {userInfo.preferred_username} </>}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={keycloak.logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                    </>
                    : <LoginButton icon/>
                }


                {/* </Navbar.Collapse> */}
            </Navbar>
        </header >
    )
}

export default Header