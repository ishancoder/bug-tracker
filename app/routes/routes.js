let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Another funny line now we're importing bugs.
let Bugs = mongoose.model('Bugs');
let Repos = mongoose.model('Repos');

router.get('/repos', (req, res, next)=>{
    Repos.find().exec((err, data)=>{
        if(err) return next(err);
        res.json(data);
    })
});

router.post('/repos', (req, res, next)=>{
    let repo = new Repos(req.body);
    repo.save((err, data)=>{
        if(err) return next(err);
        else res.json(data);
    });
});

router.param('repo_id', (req, res, next, id) => {
    let query = Repos.findById(id);
    query.exec((err, repo)=>{
        if(err) return next(err);
        if(!repo) return next(new Error("Unable to find repository!"));
        req.repo = repo;
        return next();
    });
});

router.get('/repos/:repo_id', (req, res, next) => {
    req.repo.populate('bugs', (err, data)=>{
        if(err) return next(err);
        res.json(data);
    });
});

router.delete('/repos/:repo_id', (req, res, next)=>{
    Repos.deleteOne({_id: req.repo._id}, (err, data)=>{
        if(err) return next(err);
        Bugs.deleteMany({repo: req.repo._id}, (err, data)=>{
            if(err) return next(err);
            res.json(data);
        });
    });
});

router.post('/repos/:repo_id/bugs', (req, res, next)=>{
    let bug = new Bugs(req.body);
    bug.repo = req.repo;
    bug.save((err, data)=>{
        if(err) return next(err);
        req.repo.bugs.push(bug);
        req.repo.save((err, savedRepo)=>{
            if(err) return next(err);
            res.json(data);
        });
    });
});

router.param('bug_id', (req, res, next, id) => {
    let query = Bugs.findById(id);
    query.exec((err, data)=>{
        if(err) return next(err);
        if(!data) return next(new Error("Unable to find bug!"));
        req.bug = data;
        return next();
    });
});

router.delete('/bugs/:bug_id', (req, res, next)=>{
    Bugs.deleteOne({_id: req.bug._id}, (err, data)=>{
        if(err) return next(err);
        res.json(data);
    });
});

router.put('/bugs/:bug_id/resolve', (req, res, next)=>{
    req.bug.markResolved((err, data)=>{
        if(err) return next(err);
        res.json(data);
    });
});

router.put('/bugs/:bug_id/changecriticality', (req, res, next)=>{
    req.bug.changeCriticality(req.body.criticality, (err, data)=>{
        if(err) return next(err);
        res.json(data);
    });
});

router.put('/bugs/:bug_id', (req, res, next)=>{
    Bugs.update({_id: req.bug._id}, req.body, (err, data)=>{
        if(err) return next(err);
        res.json(data);
    });
});

module.exports = router;