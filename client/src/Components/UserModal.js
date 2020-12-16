import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/userActions';

class UserModal extends Component {

    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add User</Button>
                <Modal
                    isOpen={this.state.modal}
                    toogle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Homies list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="user">User</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="user"
                                    placeholder="Enter your name"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginBottom: '2rem' }}
                                    onClick={this.toggle}
                                >Add User</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div >
        );
    }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default connect()(UserModal);
