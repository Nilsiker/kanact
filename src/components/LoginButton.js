import { useKeycloak } from "@react-keycloak/web"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { GitHub, LogIn } from "react-feather"
import LoginModal from "./LoginModal"

const LoginButton = ({ icon }) => {
    const { keycloak, } = useKeycloak()
    const [showLogin, setShowLogin] = useState(false)
    const handleShow = () => setShowLogin(true)
    const handleClose = () => setShowLogin(false)

    return <>
        {icon
            ? <LogIn className="text-navlink" onClick={handleShow} />
            : <Button variant="info" onClick={handleShow}>Login</Button>}
        <LoginModal show={showLogin} handleClose={handleClose} />
    </>
}

export default LoginButton