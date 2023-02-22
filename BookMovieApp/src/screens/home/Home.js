import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
// import { Card } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { GridList } from "@material-ui/core";
import { GridListTile } from "@material-ui/core";
import { GridListTileBar } from "@material-ui/core";
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         flexWrap: 'nowrap',
//         transform: 'translateZ(0)',
//     },
//     title: {
//         color: theme.palette.primary.light,
//     },
//     titleBar: {
//         background:
//             'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
// }));

class Home extends Component {
    render() {
        // const styleClasses = useStyles();
        const Movies = [
            {
                id: 1,
                title: "The GodFather",
                ReleaseDate: "2-02-2023",
                poster_url: "https://m.media-amazon.com/images/I/61jDsQrXfMS._SY450_.jpg"
            },
            {
                id: 2,
                title: "The Dark Knight",
                ReleaseDate: "27-02-2023",
                poster_url: "https://m.media-amazon.com/images/I/618P6Rg+EoL._SY550_.jpg"
            },
            {
                id: 3,
                title: "Ant-Man and The Wasp",
                ReleaseDate: "3-03-2023",
                poster_url: "https://m.media-amazon.com/images/I/71Xbh4eXxBS._AC_SY879_.jpg"
            },
            {
                id: 4,
                title: "Sherlock Homes",
                ReleaseDate: "5-03-2023",
                poster_url: "https://m.media-amazon.com/images/I/91k7wFR60iL._AC_UY327_FMwebp_QL65_.jpg"
            },
            {
                id: 5,
                title: "Interstellar",
                ReleaseDate: "28-02-2023",
                poster_url: "https://m.media-amazon.com/images/I/71x2rWPgb7L._SY741_.jpg"
            },
            {
                id: 6,
                title: "The Nun",
                ReleaseDate: "26-03-2023",
                poster_url: "https://m.media-amazon.com/images/I/81XFGLWb2vS._SY450_.jpg"
            },
            {
                id: 7,
                title: "Logan",
                ReleaseDate: "5-03-2023",
                poster_url: "https://m.media-amazon.com/images/I/51LQXKDhJzL._SX342_.jpg"
            },
            {
                id: 8,
                title: "Avatar",
                ReleaseDate: "28-02-2023",
                poster_url: "https://th.bing.com/th/id/OIP.CvgSjcND32Exm8V2TSfAHQAAAA?w=182&h=267&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
        ]

        return (

            <div>
                <Header page='homePage' />
                {/* to Add Upcoming Movies heading to Home page */}
                <h1 className="title">
                    Upcoming Movies
                </h1>
                {/*Adding Movie List*/}
                <div className="root">
                    <GridList cols={6} className="gridList" row-height = {250} >
                        {Movies.map(tile => {
                            return <Link to="/movie/:id">
                                <GridListTile cell-height={250} key={tile.id} >
                                    <img src={tile.poster_url} alt={tile.title} className = "ImageSettings" />
                                    <GridListTileBar
                                        title={tile.title}
                                        className="titleBar"
                                    />
                                </GridListTile>
                            </Link>

                        })}
                    </GridList>
                </div>
            </div>

        );
    }
}
export default Home;