import { Button, Card, Jumbotron } from "react-bootstrap"
import { Edit, Edit2, File } from "react-feather"
import LoginButton from "./LoginButton"

const Welcome = ({show, handleClose}) => {

    return <Card className="postit mx-auto">
        <h1>Welcome!</h1>
        <Edit className="mx-auto" size="50"/>
        <p>To start using this digital Kanban tool, you must first login!</p>
        <LoginButton />
    </Card>

}

export default Welcome