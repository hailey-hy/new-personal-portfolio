/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface TabPanelProps {
    children: string;
    index: number;
}

export interface TabPanelContentProps {
    content: TabPanelProps;
    value: number;
}

interface tabPropsType {
    tabContents: TabPanelProps[];
    tabLables: string[];
}

const textStyle = css({
    fontFamily: 'S-CoreDream-3Light',
});

const TabPanel = ({ content, value }: TabPanelContentProps) => {
    const { children, index } = content;

    return (
        <div
            role='tabpanel'
            hidden={value !== content.index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography css={textStyle}>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SkillsTab = ({ tabContents, tabLables }: tabPropsType) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='auto'
                >
                    {tabLables.map((label, index) => (
                        <Tab
                            label={label}
                            {...a11yProps(index)}
                            css={textStyle}
                        ></Tab>
                    ))}
                </Tabs>
            </Box>
            {tabContents.map((content) => (
                <TabPanel content={content} value={value}></TabPanel>
            ))}
        </Box>
    );
};

export default SkillsTab;
