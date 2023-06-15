import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core";
import axios from 'axios';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles(() => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}))
const Carousel = () => {
    const classes = useStyles();
    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        console.log(data);
        setTrending(data);
    }

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency])

    return (
        <div className={classes.carousel}>
            Carousel
        </div>
    )
}

export default Carousel