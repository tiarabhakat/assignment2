import { useState } from "react";

export default function StudentForm(){
    // registration states
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");

    // error checking states
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState(false);

    // handle changes - first_name, last_name, email, program
    // Handling the name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setRegistered(false);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        setRegistered(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setRegistered(false);
    };

    // Handling the program change
    const handleProgram = (e) => {
        setProgram(e.target.value);
        setRegistered(false);
    };

    // Handling the student registration
    const handleRegistered = (e) => {
        e.preventDefault();
        if (first_name === "" ||last_name === "" || email === "" || program === "") {
            setError(true);
            setRegistered(false);
        } else if (!email.includes("@")){
            setError(true);
            setRegistered(false);
        } else {
            setRegistered(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
         return (
            <div
                className="success"
                style={{
                    display: registered ? "" : "none",
                }}
            >
                <h1>User {first_name} {last_name} has been successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div className="error" style={{ display: error ? "" : "none" }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    const emailErrorMessage = () => {
        return (
            <div className="error" style={{ display: emailError ? "" : "none" }}>
                <h1>Please enter a valid email address</h1>
            </div>
        );
    };


    return (
        <div className="form">
            <div>
                <h1>Student Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">First Name</label>
                <input
                    onChange={handleFirstName}
                    className="input"
                    value={first_name}
                    type="text"
                />

                <label className="label">Last Name</label>
                <input
                    onChange={handleLastName}
                    className="input"
                    value={last_name}
                    type="text"
                />

                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />

                <label className="label">Program</label>
                <input
                    onChange={handleProgram}
                    className="input"
                    value={program}
                    type="text"
                />

                <button onClick={handleRegistered} className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
