import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthData} from "../../redux/authReducer";
import {userApi} from "../../api/socialNetworkApi";

class HeaderContainer extends React.Component
{
    componentDidMount() {
        userApi.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let data = {
                    userId: response.data.id,
                    login: response.data.login,
                    email: response.data.email
                }
                this.props.setAuthData(data)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.authReducer
    }
}

const mapDispatchToProps =  {
    setAuthData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
