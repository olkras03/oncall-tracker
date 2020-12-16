import React, { Component } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';

export default class Users extends Component {
    state = {
        users: [
            { id: uuid(), name: 'Lena' },
            { id: uuid(), name: 'Max' },
            { id: uuid(), name: 'Lev' },
            { id: uuid(), name: 'Masha' },
        ]
    }
    render() {
        const { users } = this.state
        return (
            <Container>
                <Button
                    color="light"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter name');
                        if (name) {
                            this.setState(state => ({
                                users: [...state.users, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add User</Button>
                <ListGroup>
                    <TransitionGroup className="user-list">
                        {users.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                users: state.users.filter(user => user.id !== id)
                                            }));
                                        }}
                                    >
                                        &times;
                                        </Button>

                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

