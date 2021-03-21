import * as React from 'react';
import { Trans } from 'react-i18next';

import './institutional.css'

export const WhoWeAre = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 lightGrayBox">
                    <section>
                        <h1><Trans>who_wew_are_titile</Trans></h1>
                        <p>
                            Fundada em XX/XXXX somos ...
                        </p>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-6"><img alt="mulher dan�ando" /></div>
                <div className="col-6">
                    <section>
                        <h1>Torne seus desejos realidade</h1>
                        <p>
                            Compare os valores. Economize na compra.<br />
                            Divirta-se em sua pr�xima experi�ncia.
                        </p>
                        <div>
                            <button>Sou maior de 18 anos</button>
                        </div>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <section>
                        <h4>MULHERES EM FOCO</h4>
                        <p>
                            Compre normalmente,<br />
                            apoie diretamente!
                        </p>
                        <div>
                            <button>Saiba mais</button>
                        </div>
                    </section>
                </div>
                <div className="col-6"><img alt="mulher espregui�ando" /></div>
            </div>
            <div className="row">
                <div className="col-6"><img alt="mulher de chap�u" /></div>
                <div className="col-6">
                    <section>
                        <h4>Amor, a melhor escolha!</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et volutpat augue. Nam sagittis fermentum purus vel aliquet.
                        </p>
                        <div>
                            <button>Saiba mais</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};