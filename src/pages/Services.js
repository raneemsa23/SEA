import React, { useEffect } from "react";
import ServiceCard from "../components/ServiceCart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { fetchServices } from "../store/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Services() {
  const { services } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchServices());
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {services.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <ServiceCard
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
