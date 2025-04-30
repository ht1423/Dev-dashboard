import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    widgetsBundle: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Widget',
    }
})

userSchema.set('toJSON',{
    transform: (_,ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const User = mongoose.model.User || mongoose.model('User',userSchema)

export default User