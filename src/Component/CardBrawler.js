import React from 'react';
import '../index.css';
import { Card } from 'react-bootstrap';

function CardBrawler() {
    return (
        < div className="d-flex justify-content-center" >
            <Card className=" UserCard bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img width="200px"
                    className="Avatar"
                    src="https://img.freepik.com/vecteurs-libre/profil-avatar-homme-icone-ronde_24640-14044.jpg?size=338&ext=jpg" />
                <Card.Body>
                    <Card.Title className="text-center"> Titre</Card.Title>
                    <Card.Text className="text-center">  Followers</Card.Text>
                    <Card.Text className="text-center">  Repositories</Card.Text>
                </Card.Body>
            </Card >
        </div >
    )
}

export default CardBrawler;