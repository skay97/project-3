import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faStickyNote, faScroll, faEdit } from '@fortawesome/free-solid-svg-icons';
import AuthorBanner from '../components/AuthorBanner';
import ProfileCard from '../components/ProfileCard';
import CategoryTags from '../components/CategoryTags'
import Grid from '@material-ui/core/Grid';
import Works from '../components/WorksOther';
import Footer from "../components/Footer/Footer"
import Appbar from "../components/AppBar/Appbar"
library.add([faBook, faScroll, faStickyNote, faEdit]);

function UserProfile() {
  return (
    <React.Fragment>
      <Appbar/>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={12}>
          <AuthorBanner/>
        </Grid>
       </Grid>
       <Grid container>
        <Grid item xs={3}>
          <ProfileCard/>    
        </Grid>
        <Grid item xs={9}>
          <CategoryTags/>
          <Works/>
        </Grid>
      </Grid>
      <Footer/>
    </React.Fragment>
  );
}

export default UserProfile;