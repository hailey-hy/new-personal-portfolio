/** @jsxImportSource @emotion/react */
import React from 'react';
import { spanRowStyle } from './Style';

const ArticleTitleContainer = ({ children }: { children: React.ReactNode }) => {
    return <span css={spanRowStyle}>{children}</span>;
};

export default ArticleTitleContainer;
