const Input = ({label,state,setState,type = "text"}) => {
 
  return (
    <div className="form-floating">
      <input type={type} className="form-control" id="floatingInput" value={state} placeholder={label} onChange={(e)=>setState(e.target.value)}/>
      <label htmlFor="floatingInput">{label}</label>
    </div>
  )
}

export default Input