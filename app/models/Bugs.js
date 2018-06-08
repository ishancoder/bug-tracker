let mongoose = require('mongoose');

let bugSchema = new mongoose.Schema({
    bugName: {type: String, required: true},
    criticality: {type: Number, default: 0},
    repo: {type: mongoose.Schema.Types.ObjectId, ref: "Repos"},
    resolved: {type: Boolean, default: false},
});

bugSchema.methods.markResolved = function(cb) {
    this.resolved = true;
    this.save(cb);
};

bugSchema.methods.changeCriticality = function(newCriticality, cb) {
    this.criticality = newCriticality;
    this.save(cb);
};

mongoose.model('Bugs', bugSchema);