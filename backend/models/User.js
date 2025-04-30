import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    widgets: {
        type: [String],
        default: ['github','stackoverflow','notes','clock','timer','todo','weather','links','quotes']
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