import React from 'react';
import { Route } from 'react-router-dom';

import routes from './route/route';
import { Wrap } from './components/boxSize';

function App() {
    return (
        <Wrap>
            {routes.map((route, i) => {
                const { path, exact, routes } = route;
                return (
                    <Route
                        key={i}
                        path={path}
                        exact={exact}
                        render={(routeProps) => <route.component routes={routes} {...routeProps} />}
                    />
                );
            })}
        </Wrap>
    );
}

export default App;
