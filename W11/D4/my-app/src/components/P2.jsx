import { useState } from "react";

// validation & error message
const initialFormData = {
    email:"",
    password:""
};
export function ValidationForm(){
    const[formData, setFormData] = useState(initialFormData);

    const[errors, setErrors] = useState({});

    const[touched, setTouched] = useState({});
    const[dirty,setDirty] = useState({});

    function Validate(values){
        const newErrors={};

        // Email validation

        if(!values.email.trim()){
            newErrors.email="Email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            newErrors.email="please enter a valid adress"
        }

        if(!values.password.trim()){
            newErrors.password="password is required";
        }
        else if(values.password.length < 6){
            newErrors.password="password should be atleast six characters"
        }

        return newErrors;
    }

    function handleChange(event){
        const{name, value} = event.target;

        const updatedValues = {
            ...formData,
            [name] : value,
        };

        setFormData(updatedValues);
        setErrors(Validate(updatedValues));

        setDirty((prevDirty)=>({
            ...prevDirty,
            [name]:value !== initialFormData[name],
        }))
    }

    // Blur handler

    function handleBlur(event){
        const{name} = event.target;

        setTouched((prevTouched)=>({
            ...prevTouched,
            [name]:true,
        }));
    }

    // Submit handler function

    function handleSubmit(event){
        event.preventDefault();

        const validationErrors = Validate(formData);

        setErrors(validationErrors);

        setTouched({
            email:true,
            password:true,
        });

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted",formData);
            alert("Form submitted successfully")

            setFormData(initialFormData);
            setErrors({});
            setTouched({});
            setDirty({});
            
        }
    }

    const isFormValid = 
    formData.email.trim()!== "" && formData.password.trim()!== "" && Object.keys(Validate(formData)).length === 0;

    return(
        <section>
            <h2>validation form example</h2>
            <form onSubmit >{handleSubmit}
                <div>
                    <input type="email" name="email" id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Email" 
                    />
                </div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <br />
                <div>
                    <input type="password" name="password" id="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter password" 
                    />
                </div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <br />

                <button type="submit" disabled={!isFormValid}>Submit</button>
            </form>

        </section>
    )
}