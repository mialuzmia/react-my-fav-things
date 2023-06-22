import './Title.css'

const  Title = ({ text, fontSize }) => {

    return(
        <h1 style = {{ fontSize: fontSize }} className="title">{text}</h1>
    )
}

export default Title