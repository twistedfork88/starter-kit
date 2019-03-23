import React from 'react';
import AsyncLoader from '../components/DynamicImportComponent';
import BComponent from '../components/BComponent';

const AComponentLoader = (props) => {
    return <AsyncLoader load={() => { return import(/* webpackChunkName: "AComponent" */ '../components/AComponent') }}>
        {(Component) => {
            return Component ? <Component {...props} /> : <h2>loading...</h2>
        }}
    </AsyncLoader>
}

const routes =  [
    {
      path: '/',
      exact: true,
      component: AComponentLoader
    },
    {
      path: '/b',
      component: BComponent
    }
];

export default routes;
