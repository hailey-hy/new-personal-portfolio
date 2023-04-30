import { useState } from 'react';
import Nav from 'components/nav/Nav';
import { NavPurposeType } from 'components/nav/Nav';

const Main = () => {
    const [navPurpose, setNavPurpose] = useState<NavPurposeType>({
        purpose: 'Main',
    });

    return (
        <div>
            <Nav navPurpose={navPurpose}></Nav>
        </div>
    );
};

export default Main;
