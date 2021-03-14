const names = {
    token : 'paradox-user-token'
}


let getItem = (name)=>{
    let item = localStorage.getItem(names[name])
    return item
}

let setItem = (name, value)=>{
    localStorage.setItem(names[name], value)
}

export default {}
export { setItem, getItem }