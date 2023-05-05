/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import { headerButtonsType } from './HeaderContainer';
import { useLinkToPage } from 'hooks/useLinkToPage';
import { useEffect } from 'react';

interface buttonType {
    prop: headerButtonsType;
}

const buttonStyle = css({
    color: 'white',
    ':hover': {
        background: 'rgba(255, 255, 255, 0.3)',
    },
    borderRadius: '10rem',
});

const HeaderButtons = ({ prop }: buttonType) => {
    const { title, url } = prop;
    useEffect(() => {
        useLinkToPage(title, url);
    }, [title, url]);

    return (
        <div className={title}>
            <Button variant='text' size='large' css={buttonStyle}>
                {title}
            </Button>
        </div>
    );
};

export default HeaderButtons;
