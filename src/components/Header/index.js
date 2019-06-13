import React from 'react';

import './styles.css';

//Tudo gira em torno da src, nada em torno
//da public.

//Cada component tem seus próprios arquivos de estilização,
//que são importados diretamente no index.js

//Stateless component - criar componentes somente através de funcoes
const Header = () => ( //uma const Header que retorna uma funcao com retorno
    <header id="main-header">JSHunt</header>
);

export default Header;