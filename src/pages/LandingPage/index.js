import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Route as RouteName } from "../../navigation/routes.js";
import "./index.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Aastha
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tiers = [
  {
    title: "Personal",
    price: "7",
    description: ["No application fee", "Help center access", "Email support"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Business",
    price: "5",

    description: [
      "No application fee",
      "Approved instantly",
      "No upfront cost",
      "Priority email support",
    ],
    buttonText: "Click Here to Apply",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "9",
    description: ["Help center access", "Phone & email support"],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function PricingContent() {
  function MouseOver(event) {
    event.target.style.background = "red";
  }
  function MouseOut(event) {
    event.target.style.background = "yello";
  }
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar>
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 10px 0 10px",
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            style={{ width: "400px", display: "flex", flexDirection: "row" }}
          >
            Business Loan Application System
          </Typography>
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "250px",
              justifyContent: "space-between",
            }}
          >
            <Link
              variant="button"
              color="inherit"
              sx={{ my: 1, ml: 70 }}
              style={{
                marginLeft: "8px",
                marginRight: "8px",
                textDecoration: "none",
              }}
              href={"https://demyst.com/about-us"}
              target="_blank"
            >
              About
            </Link>
            <Link
              variant="button"
              color="inherit"
              sx={{ my: 1, mx: 1.5 }}
              style={{
                marginLeft: "8px",
                marginRight: "8px",
                textDecoration: "none",
              }}
              href={"https://demyst.com/contact"}
              target="_blank"
            >
              Connect
            </Link>

            <Button
              href="#"
              color="inherit"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              style={{ margin: "0px", background: "#78f5de", color: "#17009a" }}
            >
              Login
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          We provide low-interest business loans. Customers can also choose from
          a variety of loan payment alternatives.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          style={{
            display: "flex",
            flexDirection: " row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              // xs={12}
              // sm={tier.title === "Enterprise" ? 12 : 6}
              // md={4}
              className="box"
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  // subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h4"
                      color="text.primary"
                    >
                      {tier.price}%
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      style={{ paddingLeft: "10px" }}
                    >
                      Interest
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    onClick={() => navigate(RouteName.loanDetails)}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Homes() {
  return <PricingContent />;
}
