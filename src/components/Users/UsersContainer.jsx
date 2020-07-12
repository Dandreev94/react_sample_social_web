import React from 'react';
import Users from './Users';
import {followAC, selectPageAC, setTotalCountAC, unfollowAC, uploadUsersAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class UsersContainer extends React.Component
{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response => {
            this.props.uploadUsers(response.data.items)
        }))
    }

    selectPage = (page) => {
        this.props.selectPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersData.offset}`)
            .then((response => {
                this.props.uploadUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            }))
    }

    render() {
        return <Users usersData={this.props.usersData}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      selectPage={this.selectPage}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followAC(userId));
        },
        unfollow : (userId) => {
            dispatch(unfollowAC(userId));
        },
        uploadUsers : (users) => {
            dispatch(uploadUsersAC(users));
        },
        setTotalCount : (count) => {
            dispatch(setTotalCountAC(count));
        },
        selectPage : (page) => {
            dispatch(selectPageAC(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);