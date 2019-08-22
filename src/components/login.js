import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '10%'
    },
    paper: {
        padding: theme.spacing(5)
    },
    button: {
        margin: theme.spacing(1),
    },
    inputs: {
        width: '100%',
        margin: theme.spacing(1)
    }
}));

function Login() {
    const [ state, setState ] = useState({
        username: '',
        password: '',
        showPassword: false
    });
    const classes = useStyles();

    const handleChange = prop => event => {
        setState({ ...state, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setState({ ...state, showPassword: !state.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <Container className={classes.container} maxWidth="sm">
            <Paper className={classes.paper}>
                <FormControl>
                    <Grid container>
                        <TextField
                            className={classes.inputs}
                            id="input-with-icon-textfield"
                            label="Username"
                            value={state.username}
                        />
                        <TextField
                            id="filled-adornment-password"
                            className={classes.inputs}
                            type={state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={state.password}
                            onChange={handleChange('password')}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <Button className={classes.button} variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid>
                </FormControl>
            </Paper>
        </Container>
    );
}
export default Login;