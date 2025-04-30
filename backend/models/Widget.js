import mongoose from 'mongoose'

const widgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    widgets: [{
        type: {
            type: String,
            required: true,
            enum: ['github', 'stackoverflow', 'notes', 'clock', 'timer', 'todo', 'weather', 'links', 'quotes']
        },
        settings: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        visible: {
            type: Boolean,
            default: true
        }
    }]
})

widgetSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const Widget = mongoose.model.Widget || mongoose.model('Widget', widgetSchema)

export default Widget
