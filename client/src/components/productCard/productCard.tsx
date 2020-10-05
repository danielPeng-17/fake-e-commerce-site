import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { History, LocationState } from 'history';

interface productDetails {
    product: any;
    history: History<LocationState>;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

function ProductCard(props: productDetails) {
    const product = props.product;
    const classes = useStyles();

    const productRedirectHandler = (productId: string) => {
        props.history.push("/product/" + productId);
    }

    return (
        <Card className={classes.root} onClick={() => productRedirectHandler(product._id)} >
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                {'$' + product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Click to see details
            </Typography>
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions> */}
        </Card>
    );
}


export default ProductCard;