import React from 'react'
import {fetchUsers, editUser, deleteUser} from '../Redux/Reducers/fetchUsers'
import {connect} from 'react-redux'
import '../../assets/css/modal.css'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';
import {Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Row, Col} from 'antd';
import store from '../Redux/Store/index'
import '../../assets/css/table.css'
import AntTable from './antTable'

class tableData extends React.Component {
    state = {
        users: [],
        visible: false,
        newEmail: "",
        newName: "",
        selectedID: ""
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }


    deleteUser = (id) => {
        console.log("id", id)
        // const users = [...this.props.users];
        // users.splice(id, 1);
        this.props.dispatch(deleteUser(id));

        // this.setState({users});
    }

    /* MODAL */
    showModal = (idn) => {
        this.setState({visible: true, selectedID: idn});
    };

    handleOk = (e) => {
    //    let v = [...this.props.users]
    let v = JSON.parse(JSON.stringify(this.props.users))
        v[e].name = this.state.newName;
        v[e].email = this.state.newEmail;
        this.props.dispatch(editUser( v))
        this.setState({visible: false});
    };

    handleCancel = e => {
        console.log(e);
        this.setState({visible: false});
    };

    /* input */
    newName = (event) => {
        this.setState({newName: event.target.value})
    }

    newEmail = (event) => {
        this.setState({newEmail: event.target.value})
    }

    render() {
        return (
            <section id="table">
                {  console.log("ddnourd", this.props.users)}
                <Row id="user-title-row">
                    <Col>
                        <div className="usersTitle">
                            <h1>All Users</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={24}>
                        <AntTable data={
                                this.props.users
                            }
                            deleteUser={
                                this.deleteUser
                            }
                            showModal={
                                this.showModal
                            }/>
                    </Col>


                </Row>


                <Modal title="Edit User"

                    visible={
                        this.state.visible
                    }
                    onOk={
                        () => this.handleOk(this.state.selectedID)
                    }
                    onCancel={
                        this.handleCancel
                }>
                    <div className="modal-input">
                        <Row>
                            <Col sm={24}
                                md={12}
                                lg={12}>
                                <Input placeholder="name"
                                    value={
                                        this.state.newName
                                    }
                                    onChange={
                                        this.newName
                                    }
                                    prefix={<UserOutlined/>}/>

                            </Col>

                            <Col sm={24}
                                md={12}
                                lg={12}>
                                <Input placeholder="email"
                                    value={
                                        this.state.newEmail
                                    }
                                    onChange={
                                        this.newEmail
                                    }
                                    prefix={<UserOutlined/>}/>
                            </Col>
                        </Row>
                    </div>
                </Modal>

            </section>
        )
    }
}


const mapStateToProps = state => ({users: state.users.list})

export default connect(mapStateToProps)(tableData)
