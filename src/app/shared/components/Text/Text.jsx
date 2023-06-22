const Text = ({ textContent, className, textSize } ) => {


    return(
        <p 
        style = {{ fontSize: textSize }}
        className={ className }
        >{ textContent }</p>
    )
}

export default Text