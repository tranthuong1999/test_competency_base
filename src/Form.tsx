import { useId } from "react"


export default function Form() {

    const id = useId();

    return (
        <div>
            <h3> Label</h3>
            <label htmlFor={id}> Name :</label>
            <input type="text" name="name" id={id} />
        </div>
    )
}