import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 180,
    },
});

function valuetext(value) {
    return `${value}vnđ`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([1000000, 50000000]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={1000000}
                max={100000000}
                step={100000}
            />
        </div>
    );
}
