import React from "react";
import { Link } from "react-router-dom";
import BarChartIcon from '@mui/icons-material/BarChart';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Button from '@mui/material/Button';
import { styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const TopGrid = styled(Grid)(({ }) => ({
  marginTop: '40vh',
}));
const MenuButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Top() {
  return (
    <TopGrid container spacing={2}>
      <Grid item xs={4} />
      <Grid item xs={4}>
          <Stack
            justifyContent="center"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Link to="/achievements">
              <MenuButton variant="contained">掃除実績<BarChartIcon /></MenuButton>
            </Link>
            <Link to="/cleanings">
              <MenuButton variant="contained">掃除内容<CleaningServicesIcon /></MenuButton>
            </Link>
          </Stack>
      </Grid>
      <Grid item xs={4} />
    </TopGrid>
  );
}