import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
const useStyles = makeStyles(() => ({
  userName: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));
const UserItem = ({ user }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <div className={classes.userName}>
          <PersonIcon fontSize="small" />
          Name: {user.name}
        </div>
        <p>Account Id: {user.accountId}</p>
        <b>Apps</b>
        <ul>
          {Object.keys(user.apps).map((app, index) => (
            <li key={index}>
              {`App: ${app}`} <br /> {`App Title: ${user.apps[app].title}`}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UserItem;
