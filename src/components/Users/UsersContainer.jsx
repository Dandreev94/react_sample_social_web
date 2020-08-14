import React from 'react';
import Users from './Users';
import {follow,
        selectPage,
        setTotalCount,
        unfollow,
        uploadUsers,
        setOffset,
        setIsLoaded,
        setIsFollowingInProgress} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {userApi} from "../../api/socialNetworkApi";

class UsersContainer extends React.Component
{
    componentDidMount() {
        this.props.setIsLoaded(false);
        userApi.uploadUsersData(this.props.usersData.limit).then( response => {
            if (!response.error) {
                this.props.uploadUsers(response.items)
                this.props.setTotalCount(response.totalCount);
                this.props.setIsLoaded(true);
            }
        })
    }

    selectPage = (page) => {
        this.props.selectPage(page);
        this.props.setIsLoaded(false);
        userApi.uploadUsersData(this.props.usersData.limit, page).then( response => {
            if (!response.error) {
                this.props.uploadUsers(response.items);
                this.props.setIsLoaded(true);
            }
        })
    }

    render() {
        return <Users {...this.props} selectPage={this.selectPage}/>;
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
    setIsLoaded,
    setIsFollowingInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);