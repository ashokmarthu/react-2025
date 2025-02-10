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

component composition
instead of props drilling make it like shop component to accept children so we can avoid props drilling
<shop>
add dynamic data
</shop>
Context API

synchronous code shouldn't need an useEffect. only aschronoyous code need an useffect 
if you use prop or state value in useEffect you should add them as dependencies

In javascript functions are objects. so if they recreated even if both objects content same. both object reference will be different


Never use key as Index. because react will recreate all the mapped elements . instead of recretaing the changed one
so always true to use unique value

never over use useMemo, react.memo


S13:- React key pattern to avoid additional useffetc to rerender,
      React scheduling updates. always update state based on prevValues

Million JS Package. react optimization


React Life cycle Hooks Order
constructor
render
componentDidMount()
componentDidUpdate()
componentWillUnMount()
componentDidCatch()


what is a side Effect
Taks that don't Impact the current component render cycle