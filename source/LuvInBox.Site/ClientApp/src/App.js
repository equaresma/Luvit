import * as React from 'react';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './custom.css'

library.add(fab, faCheckSquare, faCoffee);

export default () => (
    <Routes />
);
