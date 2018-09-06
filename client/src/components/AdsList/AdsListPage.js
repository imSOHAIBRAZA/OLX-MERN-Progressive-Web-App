// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Chat from '@material-ui/icons/Chat';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom';

// const styles = theme => ({
//     card: {
//         maxWidth: 400,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     actions: {
//         display: 'flex',
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//         marginLeft: 'auto',
//         [theme.breakpoints.up('sm')]: {
//             marginRight: -8,
//         },
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
// });

// class AdsListPage extends React.Component {
//     state = { 
//         expanded: false,
//         favorite: false,
//         productId:''
//      };


//      componentDidMount() {
//         this.setState(state =>({
//              favorite: !state.favorite,
//              productId: this.props._id
//            }));
//     }





//      favorite = ()=>{
//          console.log('Favrite');
//          this.setState(state =>({
//              favorite: !state.favorite,
//              productId: this.props._id
//             })
//         );
//          console.log(this.state.favorite);
//          console.log(this.state);
//      }
//     handleExpandClick = () => {
//         this.setState(state => ({ expanded: !state.expanded }));
//     };

//     render() {
//         const { classes } = this.props;

//         return (
            
           
//             < Grid item md={4} >
//                 <Card className={classes.card}>
//                 <Link to={`/item/${this.props._id}`}>
//                     <CardHeader
//                         avatar={
//                             <Avatar aria-label="Recipe" className={classes.avatar}>
//                                 S
//                             </Avatar>
//                         }
//                         action={
//                             <IconButton>
//                                 <MoreVertIcon />
//                             </IconButton>
//                         }
//                         title={<strong>{this.props.title}</strong>}
//                         subheader={this.props.created_date}
//                         // subheader="September 14, 2016"
//                     />
//                     <CardMedia
//                         className={classes.media}
//                         // image={`/static/media/${this.props.file}`}
//                         image={`/upload/${this.props.file}`}
//                         //url("/static/media/1535824444489-1.jpg")
//                         // image="/static/images/cards/paella.jpg"
//                         title="Contemplative Reptile"
//                     />
//                     <CardContent>
//                         {/* <Typography component="p">
//                             This impressive paella is a perfect party dish and a fun meal to cook together with your
//                             guests. Add 1 cup of frozen peas along with the mussels, if you like.
//                             </Typography> */}
//                             <Typography component="p">
//                                 <strong>Category: </strong>{ this.props.category}
//                                 {/* <strong>Category: </strong>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} */}
//                             </Typography>
//                             <Typography component="p">
//                                 <strong>Price: </strong>{this.props.price}
//                             </Typography>
//                     </CardContent>
//                     </Link>
//                     <CardActions className={classes.actions} disableActionSpacing>
//                         <IconButton aria-label="Add to favorites" 
//                             onClick={this.favorite} 
//                             // color= "secondary" 
//                             color={this.state.favorite === !true ? "secondary" : "default"}
//                             >
//                             <FavoriteIcon  />
//                         </IconButton>
//                         <IconButton color="secondary" aria-label="Chat">
//                             <Chat />
//                         </IconButton>
//                     </CardActions>
//                 </Card>
//             </Grid>
            
//         );
//     }
// }

// AdsListPage.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AdsListPage);