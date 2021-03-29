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
                        <br />
                        <p>
                            Fundada em XX/XXXX, lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ipsum ullamcorper, aliquam libero id, rutrum ligula. Fusce est nulla, suscipit a venenatis vel, cursus non sapien. Aliquam erat volutpat. Ut commodo sodales ante, ut sagittis velit tincidunt nec. Nam vitae ex ex. In blandit, quam sollicitudin rhoncus egestas, ex turpis consectetur leo, nec euismod lacus quam eu lectus. Duis ut felis eget magna scelerisque cursus non nec ipsum. Ut tempor, erat sed suscipit mattis, sem turpis lobortis ante, nec molestie ligula nunc vitae turpis. Nullam egestas nibh arcu, vitae cursus nulla feugiat vitae. Etiam ornare orci at nibh auctor vestibulum. Praesent at elit nunc. Sed iaculis ex vel lectus laoreet, et pulvinar urna cursus. Morbi sit amet malesuada ipsum, ut consectetur nunc. Mauris eleifend sagittis viverra. Donec elementum massa ex, eget hendrerit eros tempor at.
                        </p>
                        <p>
                            Aliquam ornare nibh eget purus finibus, id sagittis lectus fringilla. Pellentesque sit amet interdum diam, in gravida ipsum. Morbi facilisis massa id fringilla semper. In rutrum arcu sit amet vehicula mollis. Curabitur lobortis sem a vestibulum lacinia. Phasellus ornare volutpat nibh vel gravida. Praesent euismod eleifend risus nec porttitor. Nulla a nibh tortor. Morbi gravida ante ut auctor vehicula.
                        </p>
                        <p>
                            Nunc vel feugiat dui. Nunc semper magna ac bibendum scelerisque. Suspendisse tincidunt lobortis sapien at imperdiet. Nulla vitae tincidunt tellus. Aenean ac suscipit elit. Suspendisse in mauris vitae urna porttitor pulvinar. Nam sed sapien ligula. Phasellus blandit odio vel libero pharetra consectetur. Nam sit amet porttitor eros, et auctor risus. Nam pulvinar lorem metus, quis efficitur neque aliquam ac. Integer ac mi sed tellus consectetur feugiat. In hac habitasse platea dictumst.
                        </p>
                        <p>
                            Etiam dapibus, justo nec sodales varius, ipsum ligula cursus leo, vitae finibus mi leo eget risus. Nam ultricies augue nec ullamcorper convallis. Etiam fringilla felis ligula, nec mattis leo ornare eget. Morbi in mattis turpis, quis mattis nunc. Praesent consectetur fringilla sem quis bibendum. Proin tristique purus euismod metus lobortis luctus. Etiam augue est, gravida in mi dictum, consectetur imperdiet dolor. Maecenas lacinia lectus sit amet ex eleifend, ut imperdiet sem bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed semper nibh id arcu fringilla hendrerit. Integer mollis bibendum dignissim. Donec ut vestibulum ante, ut ullamcorper metus. Nulla sed nulla at ligula iaculis tristique in et diam. Maecenas eleifend, est at ullamcorper cursus, nunc erat fermentum augue, eu rutrum erat lacus in augue. Fusce malesuada justo eu consequat venenatis.
                        </p>
                        <p>
                            Donec aliquam id tellus sed rhoncus. Nam dapibus eget arcu nec viverra. Nunc mollis pellentesque vulputate. Vivamus eu nulla eu turpis sagittis aliquam id sit amet mauris. Donec pretium lorem non quam finibus vulputate. Etiam et est a justo pellentesque luctus in eget lacus. Vivamus vitae sollicitudin nunc, a congue neque. Vivamus vestibulum varius placerat. Cras scelerisque neque quis metus dignissim, non blandit lacus congue. Aenean tincidunt dolor mi, in faucibus diam rhoncus ut. Quisque sed sagittis nisi. Aenean dictum est id leo suscipit, vulputate bibendum ligula mollis. Proin vehicula sit amet mi vel bibendum.
                        </p>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-6"><img alt="mulher dançando" /></div>
                <div className="col-6">
                    <section>
                        <h1>Torne seus desejos realidade</h1><br/>
                        <p>
                            Compare os valores. Economize na compra.<br />
                            Divirta-se em sua próxima experiência.
                        </p>
                        <div>
                            <button className="p-button-help">Sou maior de 18 anos</button>
                        </div>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <section>
                        <h4>MULHERES EM FOCO</h4><br />
                        <p>
                            Compre normalmente,<br />
                            apoie diretamente!
                        </p>
                        <div>
                            <button className="p-button-help">Saiba mais</button>
                        </div>
                    </section>
                </div>
                <div className="col-6"><img alt="mulher espreguiçando" /></div>
            </div>
            <div className="row">
                <div className="col-6"><img alt="mulher de chapéu" /></div>
                <div className="col-6">
                    <section>
                        <h4>Amor, a melhor escolha!</h4><br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et volutpat augue. Nam sagittis fermentum purus vel aliquet.
                        </p>
                        <div>
                            <button className="p-button-help">Saiba mais</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};