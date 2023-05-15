/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import { buttonStyle } from './Style';
import { headerButtonsType } from './HeaderContainer';
import { useLinkToPage } from 'hooks/useLinkToPage';
import { useEffect } from 'react';

interface buttonType {
    prop: headerButtonsType;
}

const HeaderButtons = ({ prop }: buttonType) => {
    const { title, url } = prop;
    useEffect(() => {
        useLinkToPage(title, url);
    }, [title, url]);

    return (
        <div id={title}>
            <Button variant='text' size='large' css={buttonStyle}>
                {title}
            </Button>
        </div>
    );
};

export default HeaderButtons;
