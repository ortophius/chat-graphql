import { Container, makeStyles } from "@material-ui/core";
import { PropsWithChildren, ReactChild } from "react";

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
})

export default function Wrapper({ children }: PropsWithChildren<{}>) {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth='md'>
      { children as ReactChild }
    </Container>
  )
}