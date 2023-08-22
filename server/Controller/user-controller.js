import User from "../model/user-schema.js";


export const userSignup = async(request, response) => {
    try {
        const exist = await User.findOne({ phone: request.body.phone })
        if(exist){
            return response.status(401).json({message: 'you are already registered. Please log in.'})
        }
        const user = request.body;
        const newUser = User(user)
        await newUser.save();
        response.status(200).json({message: user})
    } catch (error) {
        response.status(501).json({message: error.message})
    }
}

export const userLogin = async(request, response) => {
    try {
        console.log(request.body);
        // const existInPhone = await User.findOne({ phone: request.body.emailorphone})
        // const existInEmail = await User.findOne({ email: request.body.emailorphone})
        const existingUser = await User.findOne({
            $or: [
              { phone: request.body.emailorphone },
              { email: request.body.emailorphone }
            ]
          });

        if(existingUser){
            response.status(200).json({message: existingUser})
        }
        else{
            return response.status(401).json({message: 'user not exist. please sign in.'})
        }
    } catch (error) {
        response.status(501).json({message: error.message})
    }
}
