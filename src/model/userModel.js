import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
},
{
    timestamps: true,
}
);

const User = mongoose.model('users', userSchema);

export default User;







// import mongoose from "mongoose";


// const userSchema = new mongoose.Schema({

//     userName:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     password:{
//         type: String,
//         required: true
//     }
// },{
//     timestamps: true
// }

// )

// const User = mongoose.model("users", userSchema);
// export default User;