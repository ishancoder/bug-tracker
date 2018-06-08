let mongoose = require('mongoose');

let repoSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    url: {
        type: String,
        required: true,
        matches: /^.+\..+\..+$/
    },
    bugs: [{type: mongoose.Schema.Types.ObjectId, ref: "Bugs"}]
});

mongoose.model("Repos", repoSchema);