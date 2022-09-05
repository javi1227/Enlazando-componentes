import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';
function App() {
  return (
    <BrowserRouter>
          <div id="wrapper">
              <SideBar />
              <Switch>
                    <Route path="/GenresInDb" exact={true}  component={GenresInDb} />
                    <Route path="/LastMovieInDb" exact={true} component={LastMovieInDb} />
                    <Route path="/ContentRowMovies" exact={true} component={ContentRowMovies} />
                    <Route path="/ContentWrapper" exact={true} component={ContentWrapper} />
                    <Route path="*" component={Error404} />

                </Switch>
          </div>
    </BrowserRouter>
  );
}

export default App;
