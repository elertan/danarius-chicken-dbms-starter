import React from "react";
import {
    AppBar,
    Tabs,
    Tab,
} from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import ManageDatabaseComponent from './components/ManageDatabaseComponent';
import UpdateChickenComponent from './components/UpdateChickenComponent';
import SchedulerComponent from './components/SchedulerComponent';
import TrackingComponent from './components/TrackingComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        };
    }

    handleChangeTabIndex = (ev, index) => {
        this.setState({tabIndex: index});
    }

    handleChangeTabIndexSwipe = (index) => {
        this.setState({tabIndex: index});
    }

    render() {
        return (
            <div>
                <AppBar>
                    <Tabs
                        value={this.state.tabIndex}
                        onChange={this.handleChangeTabIndex}
                        centered
                    >
                        <Tab label="Manage Database" />
                        <Tab label="Update Chicken" />
                        <Tab label="Scheduler" />
                        <Tab label="Tracking" />
                    </Tabs>
                </AppBar>
                <p>this fixes it somehow</p>
                <SwipeableViews
                    style={{ height: '100%' }}
                    axis="x"
                    index={this.state.tabIndex}
                    onChangeIndex={this.handleChangeTabIndexSwipe}
                >
                    <ManageDatabaseComponent />
                    <UpdateChickenComponent />
                    <SchedulerComponent />
                    <TrackingComponent />
                </SwipeableViews>
            </div>
        );
    }
}

export default App;
