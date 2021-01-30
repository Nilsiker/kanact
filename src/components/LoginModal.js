import { useKeycloak } from "@react-keycloak/web"
import { Button, Modal } from "react-bootstrap"
import { GitHub, Key } from "react-feather"

const LoginModal = ({ show, handleClose }) => {
    const { keycloak, initialized } = useKeycloak()

    return initialized ?
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="text-dark text-center" closeButton>
                <h3>Sign in with...</h3>
            </Modal.Header>
            <Modal.Body>
                <Button
                    variant="info"
                    block
                    onClick={keycloak.login}>
                    <Key /> Keycloak
                </Button> <br />

                {/* <Button
                    variant="info"
                    block
                    onClick={() => keycloak.login({ idpHint: "facebook" })}>
                    <Facebook /> Facebook
                    </Button><br /> */}

                <Button
                    variant="info"
                    block
                    onClick={() => keycloak.login({ idpHint: "github" })}>
                    <GitHub /> GitHub
                </Button><br />
            </Modal.Body>
        </Modal>
        :
        <></>
}

export default LoginModal