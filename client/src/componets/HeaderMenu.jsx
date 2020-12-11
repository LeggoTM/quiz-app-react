import React, { useState } from "react";

import { Paper, makeStyles, Button, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import create from "../Assets/menuBG/create.webp";
import join from "../Assets/menuBG/join.webp";
import option from "../Assets/menuBG/option.webp";
import about from "../Assets/menuBG/about.webp";

const useStyles = makeStyles((theme) => ({
    headerMenuPage: {
        zIndex: 1200,
        width: "100%",
        height: "100vh",
        background: theme.palette.primary.main,
        padding: "150px 100px",
    },
    headerMenuPageButtonGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },
    headerMenuPageButton: {
        marginTop: "10px ",
    },
    headerMenuBackgroundImage: {
        height: "100vh",
        width: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        filter: "blur(2px)",
    },
}));

const imageList = [create, join, option, about];

const HeaderMenu = ({ setIsMenuOpen }) => {
    const classes = useStyles();

    const [image, setImage] = useState(-1);

    return (
        <Paper
            component={motion.div}
            initial={{ y: -800, skewY: 10 }}
            animate={{ y: [-200, 0], skewY: [6, 0] }}
            exit={{ y: -800, skewY: 6 }}
            transition={{
                ease: [0.17, 0.67, 0.83, 0.67],
                duration: 0.5,
            }}
            className={classes.headerMenuPage}>
            <img
                className={classes.headerMenuBackgroundImage}
                src={imageList[image]}
                alt={image}
            />
            <div className={classes.headerMenuPageButtonGroup}>
                <Button
                    onMouseEnter={() => setImage(0)}
                    onMouseLeave={() => setImage(-1)}
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: [0.01, 0.05, 0.4, 1] }}
                        transition={{
                            ease: "easeOut",
                            delay: 0.4,
                            duration: 1,
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.3, ease: "easeInOut" },
                            color: "#2f00ff",
                        }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        CREATE
                    </Typography>
                </Button>
                <Button
                    onMouseEnter={() => setImage(1)}
                    onMouseLeave={() => setImage(-1)}
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: [0.01, 0.05, 0.4, 1] }}
                        transition={{
                            ease: "easeOut",
                            delay: 0.3,
                            duration: 1,
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.3, ease: "easeInOut" },
                            color: "#2f00ff",
                        }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        JOIN
                    </Typography>
                </Button>
                <Button
                    onMouseEnter={() => setImage(2)}
                    onMouseLeave={() => setImage(-1)}
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: [0.01, 0.05, 0.4, 1] }}
                        transition={{
                            ease: "easeOut",
                            delay: 0.2,
                            duration: 1,
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.3, ease: "easeInOut" },
                            color: "#2f00ff",
                        }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        OPTION
                    </Typography>
                </Button>
                <Button
                    onMouseEnter={() => setImage(3)}
                    onMouseLeave={() => setImage(-1)}
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: [0.01, 0.05, 0.4, 1] }}
                        transition={{
                            ease: "easeOut",
                            delay: 0.1,
                            duration: 1,
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.3, ease: "easeInOut" },
                            color: "#2f00ff",
                        }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        ABOUT US
                    </Typography>
                </Button>
            </div>
        </Paper>
    );
};

export default HeaderMenu;

// {
//     <IconButton
//         className={classes.headerThemeButton}
//         onClick={() => setDarkMode(!darkMode)}
//         size='medium'
//         color='secondary'>
//         {darkMode ? <Brightness4Icon /> : <NightsStayIcon />}
//     </IconButton>;
//     {
//         userName === "" ? (
//             <Button
//                 className={classes.headerHomeLoginButton}
//                 component={Link}
//                 to='/login'
//                 color='secondary'
//                 variant='contained'>
//                 <Typography color='primary'>Login</Typography>
//             </Button>
//         ) : (
//             <Button
//                 className={classes.headerHomeLoginButton}
//                 onClick={() => setUserName("")}
//                 color='secondary'
//                 variant='contained'>
//                 <Typography color='primary'>Log Out</Typography>
//             </Button>
//         );
//     }
// }
