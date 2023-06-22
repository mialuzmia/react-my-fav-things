import Subtitle from "../../shared/components/Subtitle/Subtitle"
import Image from "../../shared/components/Image/Image"
import Text from "../../shared/components/Text/Text"

import "./Bio.css"

const Bio = ({ titleText, titleSize, textContent, src, alt, textSize }) => { 

    return(
        <div className="bio__container">
            <Subtitle 
                className='bio__title'
                text={titleText}
                fontSize={titleSize}/>
            <Text 
                className='bio__text'
                textContent={textContent}
                textSize={textSize}
                />
            <Image
                className='bio__img'
                src={src}
                alt={alt}/>
        </div>
    )
}

export default Bio