import React from 'react';
import Header from './Header';
import {RootState} from '../../redux/reduxStore';
import {authAC, InitialAuthStateType} from '../../reducers/authReducer';
import {connect} from 'react-redux';
import {getAuthMeAPI} from '../../api/api';

export type GetAuthType = {
    data: InitialAuthStateType
}

type HeaderContainerType = {
    authAC: (email: string, id: number, login: string) => void
    authData: InitialAuthStateType
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        getAuthMeAPI()
            .then(response => {
                const {id, email, login} = response;

                if (email && id && login) {
                    this.props.authAC(email, id, login);
                }
            })
    }

    render() {
        return <Header authData={this.props.authData}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        authData: state.authReducer
    }
}

const mapDispatchToProps = {
    authAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
