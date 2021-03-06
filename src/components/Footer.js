import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary"  >
            {'All rights reserved © '}
            <Link color="inherit" href="https://material-ui.com/" >
               Signium
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}


        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>

                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {''}
                    {''}
                </Typography>
                <Typography variant="body1"> </Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <ul>
                        <li><a href="#"> Rates </a></li>
                        <li><a href='#'>Articles</a></li>
                        <li><a href='#'>Analytics</a></li>
                        <li><a href='#'>e-service </a></li>
                    </ul>

                    <div ></div>

                    <div id= 'footer' >

                    <p><a href="# "> Home page </a>    | <a href= '#' > Rates </a> | <a href= '#'> Articles </a> |
                        <a href= '#'> Analytics </a> | <a href='#' > e-service </a> | </p>
                     <p>Copyright © Signium</p>
                    </div>

                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}