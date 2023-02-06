import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { utilsService } from "../../services/utils";

export const Item = ({ item }) => {
  return (
    <Card
      key={item.id}
      className="m-5 flex flex-col justify-between"
      sx={{ maxWidth: 420 }}
      >
      <CardContent className="">
        <CardActionArea component={RouterLink} to={`/item/${item.id}`}>

          <CardMedia
            component="img"
            className="mx-auto my-4"
            src={item.pictureUrl}
            sx={{ height: 250, width: 200, alignSelf: "Center" }}
            />
        </CardActionArea>
        <Typography variant="h5" component="div">
          {item.name} - {item.brand}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          USD {item.price}
        </Typography>
        <Typography variant="body2" className="text-justify">{utilsService.truncateText(item.description)}</Typography>
      </CardContent>
    </Card>
  );
};
