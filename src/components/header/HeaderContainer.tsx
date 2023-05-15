/** @jsxImportSource @emotion/react */
import { headerContainerStyle } from './Style';
import HeaderButtons from './HeaderButtons';
import BtnContent from 'constants/BtnConstants';
import { useEffect, useState } from 'react';

export interface headerButtonsType {
    title: string;
    url: string;
}

const HeaderContainer = () => {
    const [headerButtonsProps, setHeaderButtonsProps] = useState<
        headerButtonsType[]
    >([]);
    useEffect(() => {
        setHeaderButtonsProps(BtnContent.Nav);
    });

    return (
        <nav css={headerContainerStyle}>
            {headerButtonsProps.map((prop) => (
                <HeaderButtons prop={prop} />
            ))}
        </nav>
    );
};

export default HeaderContainer;
