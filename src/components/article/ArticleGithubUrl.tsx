/** @jsxImportSource @emotion/react */
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { gitUrlStyle } from './Style';
import { useLinkToPage } from 'hooks/useLinkToPage';
import { useEffect } from 'react';

interface githubUrlType {
    title: string;
    githubUrl: string;
}

const ArticleGithubUrl = ({ githubUrl, title }: githubUrlType) => {
    const buttonTitle = title + 'github';

    useEffect(() => {
        useLinkToPage(buttonTitle, githubUrl);
    }, [buttonTitle, githubUrl]);
    return (
        <IconButton id={buttonTitle} css={gitUrlStyle}>
            <GitHubIcon />
        </IconButton>
    );
};

export default ArticleGithubUrl;
