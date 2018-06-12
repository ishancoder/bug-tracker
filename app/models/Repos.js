let mongoose = require('mongoose');

let repoSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "Repository name must be unique."],
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: [true, "Repository URL must be unique."],
        validate: [function(url) {
            return /^.+\..+\..+$/.test(url);
        }, "URL is not valid!"]
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