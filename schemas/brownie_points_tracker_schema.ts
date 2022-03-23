import mongoose from 'mongoose'

const brownie_point = new mongoose.Schema({
    DateAdded: {
        type: Date,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    }
})

const user_document = new mongoose.Schema({
    DiscordID: {
        type: String,
        required: true,
    },
    // Username#Discriminator
    Username: {
        type: String,
        required: true,
    },
    MemberJoinDate: {
        type: Date,
        required: true,
    },
    brownie_point,

})

const brownie_points_tracker = new mongoose.Schema({
    DiscordID: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
    },
    MemberJoinDate: {
        type: Date,
        required: true,
    },
    user_document,
})

export default mongoose.model('Brownie Points Tracker', brownie_points_tracker);