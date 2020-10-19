
import React from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

class StarRatingReadOnly extends React.Component {
    render() {
        return (
            <>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={4.5} precision={0.5} readOnly id="star-default-color"/>
                </Box>
            </>
        );
    }
}

export default StarRatingReadOnly;

