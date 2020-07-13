import React from 'react';
import Users from './Users';
import {follow, selectPage, setTotalCount, unfollow, uploadUsers, setOffset, setIsLoaded} from "../../redux/usersReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class UsersContainer extends React.Component
{
    componentDidMount() {
        this.props.setIsLoaded(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.usersData.limit}`)
            .then((response => {
            this.props.uploadUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount);
                this.props.setIsLoaded(true);
        }))
    }

    selectPage = (page) => {
        this.props.selectPage(page);
        this.props.setIsLoaded(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersData.limit}`)
            .then((response => {
                this.props.uploadUsers(response.data.items);
                this.props.setIsLoaded(true);
            }))
    }

    render() {
        return <Users usersData={this.props.usersData}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setOffset={this.props.setOffset}
                      selectPage={this.selectPage}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersReducer
    }
}

const mapDispatchToProps =  {
    follow,
    unfollow,
    setOffset,
    setTotalCount,
    uploadUsers,
    selectPage,
    setIsLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);