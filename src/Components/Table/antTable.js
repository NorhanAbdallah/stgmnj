import React from 'react';
import {Table} from 'antd';
import {Link} from 'react-router-dom'
import {Modal, Button} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';


class antTable extends React.Component {
    render() {const columns = [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                    render: text =>< span > <Link to={
                        "/comments/" + text
                    }>
                        {text}</Link>
                </span>
                }, {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name'
                }, {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                }, {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    render: (text, record, index) => (
                        <span>
                            <Button style={
                                    {marginRight: 16}
                                }
                                onClick={
                                    () => this.props.showModal(index)
                            }><EditOutlined style={{color: "#A3C744"}}/></Button>
                            <Button onClick={
                                () => this.props.deleteUser(index)
                            }><DeleteOutlined  style={{color: "#A3C744"}}/></Button>
                        </span>
                    )
                },];

            return (
                <div id="antTable">
                    <Table columns={columns}
                        dataSource={
                            this.props.data
                        }
                        rowKey={
                            user => user.id
                        }/>
                </div>
            );
        }
    }
    export default antTable;
