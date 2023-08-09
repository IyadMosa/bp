import React from 'react';

import {Button, TextField} from "@iyadmosa/react-library";
import {exportConfiguration} from "../../actions/ConfigurationAction";

export const ExportConfiguration = () => {
    return (
        <Button
            debugId="export-configuration-button"
            onClick={exportConfiguration}
            size="small"
            color={'gray'}
        >
            <Download />
            Export Configuration
        </Button>
    );
};

// export const SVGProps {
//     className?: string;
//     style?: object;
//     height?: string;
//     width?: string;
// }

export const Download = () => (
    <svg height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.377 6.12522L10.1431 4.8914L7.87674 7.14903L7.87674 -0.000152894L6.12663 -0.000153047L6.12663 7.14903L3.86024 4.8914L2.62642 6.12522L7.00169 10.5005L11.377 6.12522Z"
            fill="currentColor"
        />
        <path
            d="M12.2507 9.75049V12.3756H1.75011V9.75049H0V12.3756C0 13.3382 0.787548 14.1258 1.75011 14.1258H12.2507C13.2133 14.1258 14.0009 13.3382 14.0009 12.3756V9.75049H12.2507Z"
            fill="currentColor"
        />
    </svg>
);
