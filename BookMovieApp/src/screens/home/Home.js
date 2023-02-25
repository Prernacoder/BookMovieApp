import React, { Component } from "react";
// import { useState } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
// import { Card } from '@material-ui/core';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList } from "@material-ui/core";
import { GridListTile } from "@material-ui/core";
import { GridListTileBar } from "@material-ui/core";
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
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
                <div className= 'root' style={{display:"flex", flexWrap:"wrap", flexGrow:1}} >
                    <GridList className='gridList' cellHeight={250} cols={6} style={{display:'flex-Box', flexWrap:'nowrap', alignItems:'baseline', overflowX:'scroll',overflowY:'hidden'}} >
                        {Movies.map(tile => {
                            return <Link to="/movie/:id">
                                <GridListTile key={tile.id} style={{ width:'278px', height:'250px', paddingBottom:0}}>
                                    <img src={tile.poster_url} alt={tile.title} style={{width:'256px', height:'300px'}} />
                                    <GridListTileBar title={tile.title} style={{width:'256px'}} />
                                </GridListTile>
                            </Link>
                        })}
                    </GridList>
                </div>
            </div>

        );
    }
}


export default Home; withStyles();
