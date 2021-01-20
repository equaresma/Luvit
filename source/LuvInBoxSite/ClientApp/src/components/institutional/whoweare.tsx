import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';


export const WhoWeAre = () => {
    const { t } = useTranslation();

    const showMe = m => {
        alert(t(m));
    }
    return (
        <div>
            <h1 id="tabelLabel"><Trans>who_wew_are_titile</Trans></h1>
            <input type="button" id="tabelLabel" onClick={() => showMe('who_wew_are_titile')} value="Teste" />
        </div>
    );
};
