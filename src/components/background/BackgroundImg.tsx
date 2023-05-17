import hailey_375 from '../../assets/hailey-375.webp';
import hailey_425 from '../../assets/hailey-425.webp';
import hailey_768 from '../../assets/hailey-768.webp';
import hailey_1024 from '../../assets/hailey-1024.webp';
import hailey_1440 from '../../assets/hailey-1440.webp';
import hailey_2560 from '../../assets/hailey-2560.webp';
import hailey_2560_jpg from '../../assets/hailey_2560.jpg';

const BackgroundImg = () => {
    return (
        <picture>
            <source
                srcSet={`${hailey_375} 375w,
        ${hailey_425} 425w,
        ${hailey_768} 750w,
        ${hailey_1024} 960w,
        ${hailey_1440} 1440w,
        ${hailey_2560} 2048w,`}
                src={hailey_2560}
                type='image/webp'
            ></source>
            <source src={hailey_2560_jpg} type='image/jpg'></source>
            <img src={hailey_2560_jpg} alt='background image'></img>
        </picture>
    );
};

export default BackgroundImg;
