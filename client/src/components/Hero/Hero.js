import React from "react";
import image from "../../assets/img/img-body.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Hero = (props) => {
  return (
    <main id="home">
      <div className="container" id="home">
        <div className="row d-flex justify-content-between align-items-center">
          <div
            className="col-md text-center text-sm-start"
            style={{ marginTop: "150px" }}
          >
            <h1 className="fw-bold">
              <span style={{ color: "red" }}>Rent</span> a car for your next
              vacation Excellent rates and a fleet of well-maintained, modern
              cars
            </h1>
          </div>
          <div className="d-none d-lg-inline col-lg-6 col-md-6 col-sm-12">
            <img src={image} alt="..." id="img" />
          </div>
        </div>
      </div>
      <div class="row col-12 text-wrap d-md-flex d-block text-black" id="about">
        <div class="col-6" id="image_about">
          <img
            class="img-fluid w-100 mx-auto  d-none d-md-block"
            src={require("../../assets/img/about.png")}
            alt="image about"
            id="img"
          />
        </div>
        <div
          class="contant_about col-12 col-md-6 text-start text-center text-md-start"
          style={{ marginTop: 150 }}
        >
          <span>About Us</span>
          <h3 class="fw-bold my-2">
            Welcome to YOU<span>CAR</span>
          </h3>
          <p>
            YouCar is the best Car rental in the world, here you can find the
            top cars with the best price, if you are interested in our cars
            don't hesitate to contact us. Our team is available everyday 7/7
          </p>
        </div>
      </div>
      <div
        className="container mx-auto d-flex justify-content-between align-content-between align-items-between flex-wrap"
        style={{ marginTop: 110, marginBottom: 110 }}
        id="cars"
      >
        <Card sx={{ maxWidth: 345 }} className="mb-5">
          <CardActionArea style={{ marginRight: 20 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../../assets/img/about.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mb-5">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("../../assets/img/about.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mb-5">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("../../assets/img/about.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mb-5">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("../../assets/img/about.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mb-5">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("../../assets/img/about.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mb-5">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("../../assets/img/about.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </main>
  );
};

export default Hero;
