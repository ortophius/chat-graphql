import { makeStyles, Theme, Typography } from "@material-ui/core";
import { ElementType, PropsWithChildren } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: ({ level } : Required<Pick<HeadingProps, 'level'>>) => ({
    fontSize: `${(level <= 3 && level >= 1) ? (4 - level) : 1}rem`,
    fontWeight: (level === 1) ? 'bold' : 'normal',
  })
}));


export default function Heading({level = 3, children} : PropsWithChildren<HeadingProps>) {
  const headingNum: HeadingProps['level'] = (level > 0 && level <= 6) ? level : 3;
  const component = `h${headingNum}` as ElementType;
  const classes = useStyles({ level: headingNum });

  return (
    <Typography component={component} classes= {classes}>
      { children }
    </Typography>
  )
}