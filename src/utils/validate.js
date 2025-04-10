const checkValidData = (email,password,name) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameRegex = /(^[a-zA-Z0-9_]+)/.test(name);
// ^[a-zA-Z0-9]
    if(!nameRegex) return "Name should not start with a special character."
    if(!emailRegex) return "Enter a valid Email Address.";
    if(!passwordRegex) return "Password should be of 8 characters which includes a capital letter,a special character and a number."
    
    return null
}

export default checkValidData