import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress'; 

const UsersList = ({ users, accounts }) => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    matchUsersWithAccounts();
  }, [users, accounts]);

  //match users with their accounts by their account ids
  const matchUsersWithAccounts = () => {
    const { allUsers } = users;
    const { allAccounts } = accounts;
    if (Object.keys(allAccounts).length !== 0) {
      const matchedUsers = [];
      for (const user in allUsers) {
        //get apps by account ids
        const apps = allAccounts[allUsers[user].account].apps;
        matchedUsers.push({
          name: allUsers[user].name,
          accountId: allUsers[user].account,
          apps: apps && apps,
        });
      }
      setUserDetails(matchedUsers);
    }
  };
  return (
    <>
      <h2>Users and their apps</h2>
      <hr/>
      {(users.loading || accounts.loading) && <CircularProgress />}
      {((users.error && !users.loading) || (accounts.error && !accounts.loading))&& <Alert severity="error">Something went wrong</Alert>}
      <Grid container spacing={2}>
        {userDetails.length > 0 &&
          userDetails.map((user, index) => (
            <Grid item key={index} xs={12} sm={3} md={3} lg={3} xl={3}>
              <UserItem user={user} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.user,
  accounts: state.account,
});

export default connect(mapStateToProps, {})(UsersList);
