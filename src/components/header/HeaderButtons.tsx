/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import { headerButtonsType } from './HeaderContainer';

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

    return (
        <div className={title}>
            <Button variant='text' size='large' css={buttonStyle}>
                {title}
            </Button>
        </div>
    );
};

export default HeaderButtons;
