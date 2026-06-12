//Controlled & uncontrolled components
import {useRef, useState, } from "react"; 
const initialFormData = {
    username: "",
    bio: "",
    gender: "",
    agree: false
};
export function ControlledForm() {
    const [formdata, setFormData] = useState(initialFormData);

    //Uncontrolled file Input
    const fileRef = useRef(null);

    function handleChange(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevFromData) => ({
            ...prevFromData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }
    //Form submit handler
    function handleSubmit(event) {
        event.preventDefault();

        const uploadedFile = fileRef.current?.files?.[0] || null;

        const submittedData = {
            ...formdata,
            uploadedFileName: uploadedFile ? uploadedFile.name : "No file selected",
        };
        console.log("Submitted from data ", submittedData);
        alert("Form submitted successfully");
    }
    //reset from to initial state
    function handleReset() {
        setFormData(initialFormData);
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    }
    return (
        <section>
            <h2>Controlled Components</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" id="username"
                        value={formdata.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                    /><br />
                    <textarea name="bio" id="bio"
                        value={formdata.bio}
                        onChange={handleChange}
                        placeholder="Write a short bio" /> <br />
                    <select name="country" id="country"
                        value={formdata.country}
                        onChange={handleChange}>
                        <option value="">Select country</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                    </select>
                    <br />
                    <fieldset>
                        <legend>Gender</legend>
                        <label htmlFor="male">
                            <input type="radio" name="gender" id="male" value="Male" checked={formdata.gender === "Male"}
                                onChange={handleChange} />Male
                        </label>
                        <label htmlFor="female">
                            <input type="radio" name="gender" id="female" value="female" checked={formdata.gender === "female"}
                                onChange={handleChange} />female
                        </label>
                    </fieldset>
                    <br />
                    <label htmlFor="agree">
                        <input type="checkbox" name="agree" id="agree" checked={formdata.agree}
                            onChange={handleChange} />Accept Terms
                    </label>
                    <br />
                    <label htmlFor="resume">
                        Upload resume
                    </label>
                    <input type="file" id="resume" ref={fileRef} />
                    <br />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>

                </div>
            </form>
            <hr />
            <h3>Live from data preview:</h3>
            <p>username: {formdata.username|| "Not Entered"}</p>
            <p>Bio: {formdata.bio|| "Not Entered"}</p>
            <p>Country: {formdata.country|| "Not Entered"}</p>
            <p>Gender: {formdata.gender|| "Not Entered"}</p>
            <p>Accepted terms: {formdata.agree?"Yes":"No"}</p>
            <p>Selected file: {formdata.current?.file?.[0]?.name||"no file selected"}</p>
        </section>
    );
}