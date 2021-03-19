import { Button, Grid, TextField } from "@material-ui/core";
import CustomCard from "../../components/CustomCard/CustomCard";
import Heading from "../../components/Heading/Heading";

export default function AuthLayout() {
  return (
    <>
      <Heading level={1}>
        Chat App
      </Heading>
      <CustomCard>
        <Grid container spacing={2} alignItems='stretch'>
          <Grid item sm={8} xs={12}>
            <TextField
            required
            label='Your nickname'
            defaultValue='John Wick'
            variant='outlined'
            fullWidth
          />
          </Grid>
          <Grid container item sm={4} xs={12} alignItems='stretch'>
            <Button variant='outlined' fullWidth>Sign up</Button>
          </Grid>
        </Grid>
      </CustomCard>
    </>
  )
}