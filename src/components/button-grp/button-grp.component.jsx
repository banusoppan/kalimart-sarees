
import "../button/button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const ButtonGrp = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
            >
                {children}
                <i class="fa fa-home fa-plus"></i> 
            
        </button>
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
            >
            {children}    
            <i class="fa fa-home fa-minus"></i> 
        </button>
        

    </div>
  
  );
};

export default ButtonGrp;
