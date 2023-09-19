import React from 'react';

import {Button, TextField} from "@iyadmosa/react-library";
import {exportConfiguration} from "../../actions/ConfigurationAction";
import { ExportImportScreen } from "@iyadmosa/react-library";

export const Configuration = () => {
    return (
        <ExportImportScreen
            backupFiles={[]}
            onBackupConfiguration={() => window.alert("backup")}
            onInit={() => 0}
            onRestoreBackupConfiguration={() => window.alert("restore")}
            onSaveBackupConfiguration={() => window.alert("download")}
            title={""}
        />
    );
};
