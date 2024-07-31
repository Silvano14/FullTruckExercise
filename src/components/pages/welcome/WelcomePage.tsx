import FullTruckLogo from "@atoms/logo/FullTruckLogo";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Routes } from "@shared/routes/routes";

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WelcomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Stack spacing={2}>
        <Box justifyContent={"center"} alignItems="center">
          <FullTruckLogo />
        </Box>
        <Divider />
        <Typography variant="h4" gutterBottom>
          FullTruck's Coding Challenge
        </Typography>
        <Typography variant="body1">
          Welcome to FullTruck's Coding Challenge!
        </Typography>
        <Typography variant="body1">
          Thank you for accepting our Coding Challenge. In this exercise, we ask
          you to create a ReactJS dashboard to display a set of statistical
          data.
        </Typography>
        <Typography variant="body1">
          This project was started with vite and uses react, typescript and mui
          material-ui. However you are not obliged to follow these choices.
        </Typography>
        <List sx={{ px: 10, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item" }}>
            Take a look at the attached PDF to read the complete instructions
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Complete the coding challenge according to the instructions provided
          </ListItem>
        </List>
        <Link to={Routes.data}>{t("go")}</Link>
      </Stack>
    </Container>
  );
};

export default WelcomePage;
