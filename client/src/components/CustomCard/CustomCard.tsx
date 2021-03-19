import { createStyles, Paper, Theme, withStyles } from "@material-ui/core";

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    padding: spacing(2),
  }
})

const CustomCard = withStyles(styles)(Paper);

export default CustomCard;