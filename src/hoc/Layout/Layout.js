import React, { Component } from 'react';
import Aux from '../Auxx/Auxx';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer:false,
    }
    SidedrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    SidedrawerOpenHandler=()=>{
        console.log('click')
        this.setState((prevState)=>{
            return {showSideDrawer : !prevState.showSideDrawer}
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar deawerToggleHandler={this.SidedrawerOpenHandler}/>
                <Sidedrawer open={this.state.showSideDrawer}
                closed={this.SidedrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;