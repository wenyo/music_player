import Homepage from '../Homepage';
import Album from '../Album';

const routes = [
    {
        path: 
            [
                '/',
                '/singer/:singer'
            ],
        component: Homepage,
        exact: true,
        breadcrumbName: 'singer'
    },
    {
        path: `/album/:singer/:album`,
        component: Album,
        breadcrumbName: 'album'
    },
];

export default routes;