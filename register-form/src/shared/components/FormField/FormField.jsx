import styles from "./FormField.module.css";

const FormField = ({label, ...inputProps})=> {
    return (
        <div className="form-group">
            {label && <label htmlFor="">{label}</label>}
            <input {...inputProps} />
        </div>
    )
}

export  default FormField;