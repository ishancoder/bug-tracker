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
        if(err) next(err);
        res.json(data);
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

router.put('/repos/:repo_id', (req, res, next)=>{
    Repos.updateOne({_id: req.body._id}, req.body, (err, data)=>{
        if(err) return next(err);
        res.json(req.body);
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
    bug.repo = req.repo._id;
    bug.save((err, data)=>{
        if(err) return next(err);
        req.repo.bugs.push(data);
        req.repo.addActiveBug((err, repoData)=>{
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

router.delete('/repos/:repo_id/bugs/:bug_id', (req, res, next)=>{
    Bugs.deleteOne({_id: req.bug._id}, (err, data)=>{
        if(err) return next(err);
        req.repo.bugs.splice(req.repo.bugs.indexOf(req.bug._id), 1);
        if(req.bug.resolved === false) {
            req.repo.removeActiveBug((err, repoData)=>{
                if(err) return next(err);
                res.json(data);
            });
        } else {
            req.repo.save((err, repoData)=>{
                res.json(data);
            });
        }
    });
});

router.put('/repos/:repo_id/bugs/:bug_id/resolve', (req, res, next)=>{
    req.bug.toggleResolved((err, data)=>{
        if(err) return next(err);
        if(req.bug.resolved === true) {
            req.repo.removeActiveBug((err, repoData)=> {
                if(err) return next(err);
                res.json(data);
            })
        } else {
            req.repo.addActiveBug((err, respData)=> {
                if(err) return next(err);
                res.json(data);
            });
        }
    });
});

module.exports = router;