/** @jsxImportSource @emotion/react */
import { sectionTitleStyle } from './Style';
import {useState, useEffect, useRef} from 'react'

interface typeType {
    type: string;
}

const SectionTitle = ({ type }: typeType) => {
    const sectionRef = useRef<HTMLHeadingElement>(null);

    const distanceFromHTML = () => {
        if(sectionRef.current){
            let sectionHeight =
            sectionRef.current.getBoundingClientRect().top;
          console.log(sectionRef, sectionHeight);
        }
        
      };

    useEffect(() => {
        window.addEventListener('scroll', distanceFromHTML)
    },[])
    return <h1 css={sectionTitleStyle} ref={sectionRef}>{type}</h1>;
};

export default SectionTitle;
