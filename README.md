# react-2025

React Learning Recap

#useStateHook
const [isEditing,setIsEditing]= useState(false)
Never update Values like setIsditing(!isEditing)
Because React will batch the updates
Always update based on previous state result
setIsditing(prev=>!prev)

#stylings
Never use className as
ex:- className= {emailValid && "#0096D6"} Because it return Booleans. console will have a warning
Always use like
ex:-className= {emailValid ? "#0096D6" : undefined}
ex:-className= {`label ${emailValid ? "#0096D6" : "}`}

Module in CSS
Header.module.css avoid .parapgh reusing in other components. bundler will generate different unique name . so it will be scoped to same file
