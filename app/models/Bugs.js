let mongoose = require('mongoose');

let bugSchema = new mongoose.Schema({
    bugName: {type: String, required: true},
    criticality: {type: Number, default: 0},
    repo: {type: mongoose.Schema.Types.ObjectId, ref: "Repos"},
    resolved: {type: Boolean, default: false},
});

bugSchema.methods.toggleResolved = function(cb) {
    this.resolved = !this.resolved;
    this.save(cb);
};

mongoose.model('Bugs', bugSchema);