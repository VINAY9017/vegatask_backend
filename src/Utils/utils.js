const bcrypt=require("bcryptjs")

exports.passwordEncoded=(password)=>{
    const salt=bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password,salt)
}

exports.comparepassword=(oldPass,newPass)=>{
    return bcrypt.compareSync(oldPass,newPass)
}

exports.expireTokenTime=()=>{
    return ({expiresIn:"2d"})
}