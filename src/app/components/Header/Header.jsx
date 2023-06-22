import Title from "../../shared/components/Title/Title"

import "./Header.css"


const Header = ({ titleText, titleSize}) => {

    return(
        <header className="header__container">
            <Title 
                text={titleText}
                fontSize={titleSize}
            />
        </header>
    )
}

export default Header