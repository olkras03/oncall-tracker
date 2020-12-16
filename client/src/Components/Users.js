import React, { Component } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/userActions';
import PropTypes from 'prop-types';

class Users extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    onDeleteClick = (id) => {
        this.props.deleteUser(id);
    }
    render() {
        const { users } = this.props.user
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
                                        onClick={this.onDeleteClick.bind(this, id)}
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

Users.propTypes = {
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    // user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUsers, deleteUser })(Users);