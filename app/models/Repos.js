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
    activeBugs: {
        type: Number,
        default: 0,
    },
    bugs: [{type: mongoose.Schema.Types.ObjectId, ref: "Bugs"}]
});

repoSchema.methods.addActiveBug = function(cb) {
    this.activeBugs++;
    this.save(cb);
};

repoSchema.methods.removeActiveBug = function(cb) {
    // if(this.activeBugs > 0)
    this.activeBugs--;
    this.save(cb);
};

mongoose.model("Repos", repoSchema);