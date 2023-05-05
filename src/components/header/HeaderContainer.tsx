/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeaderButtons from './HeaderButtons';
import BtnContent from 'constants/BtnConstants';
import { useEffect, useState } from 'react';

const HeaderContainerStyle = css({
    display: 'flex',
    position: 'absolute',
    height: '3rem',
    width: '100vw',
    gap: '2rem',
    padding: '2rem',
    alignItems: 'center',
    zIndex: 100,
});

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
        <nav css={HeaderContainerStyle}>
            {headerButtonsProps.map((prop) => (
                <HeaderButtons prop={prop} />
            ))}
        </nav>
    );
};

export default HeaderContainer;
