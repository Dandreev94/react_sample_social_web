import React from 'react';
import Users from './Users';
import {follow, selectPage, setTotalCount, unfollow, uploadUsers, setOffset, setIsLoaded} from "../../redux/usersReducer";
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