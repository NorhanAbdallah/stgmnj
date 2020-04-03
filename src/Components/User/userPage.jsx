import React from 'react'
import {fetchUser} from '../Redux/Reducers/fetchUsers'
import {Row, Col} from 'antd';
import '../../assets/css/userpage.css'

class userPage extends React.Component {
    state = {
        user: {}
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        fetchUser(id).then(response => this.setState({user: response.data})).catch(error => console.log("user fetch error:", error))
    }

    render() {
        return (
            <section id="user-section">
                {console.log(this.props)}
                <Row>
                    <Col offset={1}>
                    <div className="userTitle">
                        User:
                    </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={24}
                        sm={24}
                        md={8}
                        lg={8}
                        xl={8}>
                        <div className="userName">
                          <span>User Name: {
                            this.state.user.name
                        }  </span>  </div>
                    </Col>
                    <Col xs={24}
                        sm={24}
                        md={8}
                        lg={8}
                        xl={8}>
                        <div className="userEmail">
                            <span>User Email:  {
                            this.state.user.email
                        } </span>
                           </div>
                    </Col>
                    <Col xs={24}
                        sm={24}
                        md={8}
                        lg={8}
                        xl={8}>
                        <div className="userAddress">
                            <span>User Phone:  {
                            this.state.user.phone
                        }</span>
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }
}
export default userPage;
