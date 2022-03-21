import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Custom button for onClick function
 * @param children
 * @param classNames
 * @param styles
 * @param onClickButton
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function AButton({children, classNames,styles,onClickButton, buttonType, ...props}){
    return(
        <button type={buttonType} className={classNames} onClick={onClickButton}  style={styles}>{children}</button>
    );
}

export default AButton;