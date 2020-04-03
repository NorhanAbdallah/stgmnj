import React from 'react';
import {Link} from 'react-router-dom'
import { Modal, Button } from 'antd';
const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text =>< span > <Link to={"/comments/" + text}>{text}</Link>
        </span>
        }, 
        {title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, 
        {title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button style={
                        {marginRight: 16}
                    } >edit</Button>
                    <Button >Delete</Button>
                </span>
            )
        },];
    export default columns
