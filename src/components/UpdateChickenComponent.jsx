import React from 'react';
import {
    Card,
    CardContent,
    TextField,
    CardActions,
    Button,
    Typography,
} from 'material-ui';

class UpdateChickenComponent extends React.Component {
    constructor(props) {
        super(props);

        // Set our initial state values
        this.state = {
            chickenID: undefined,
            age: undefined,
            pricePerEgg: undefined,
            revenueThisMonth: undefined
        }
    }

    handleAddOrUpdate = () => {
        // We are adding if the chickenID was not set by the user
        const isAdd = !this.state.chickenID;

        // Do some adding logic
        alert(`Supposed to ${isAdd ? 'Add' : 'Update'}`);
    };

    render() {
        // Checks wether the button should be enabled, in our case, only enable the button when these
        // fields contain a value
        const buttonDisabled = !(
            this.state.age &&
            this.state.pricePerEgg &&
            this.state.revenueThisMonth
        );

        return (
            <Card>
                <CardContent>
                    <Typography>Please fill in the form</Typography>
                    <TextField 
                        label="ChickenID"
                        type="number"
                        fullWidth
                        value={this.state.chickenID}
                        onChange={(ev) => this.setState({ chickenID: ev.target.value })}
                    />
                    <TextField 
                        label="Age"
                        type="number"
                        fullWidth
                        value={this.state.age}
                        onChange={(ev) => this.setState({ age: ev.target.value })}
                        required
                    />
                    <TextField 
                        label="Price per Egg"
                        type="number"
                        fullWidth
                        value={this.state.pricePerEgg}
                        onChange={(ev) => this.setState({ pricePerEgg: ev.target.value })}
                        required
                    />
                    <TextField 
                        label="Revenue This Month"
                        type="number"
                        fullWidth
                        value={this.state.revenueThisMonth}
                        onChange={(ev) => this.setState({ revenueThisMonth: ev.target.value })}
                        required
                    />
                </CardContent>
                <CardActions>
                    <Button 
                        variant="raised" 
                        color="primary" 
                        onClick={this.handleAddOrUpdate}
                        disabled={buttonDisabled}>
                        Add/Update Chicken
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default UpdateChickenComponent;