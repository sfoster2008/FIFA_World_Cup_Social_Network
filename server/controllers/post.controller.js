import Post from '../models/post.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'

const create = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      })
    }
    let post = new Post(fields)
    post.postedBy= req.profile
    if(files.photo){
      post.photo.data = fs.readFileSync(files.photo.path)
      post.photo.contentType = files.photo.type
    }
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
  })
}

//POSYBYID NAME post controller
const postByID = (req, res, next, id) => {
  Post.findById(id).populate('postedBy', '_id name').exec((err, post) => {
    if (err || !post)
      return res.status('400').json({
        error: "Post not found"
      })
    req.post = post
    next()
  })
}

//LISTBYUSER post controller
const listByUser = (req, res) => {
  Post.find({postedBy: req.profile._id})
  .populate('comments', 'text created')
  .populate('comments.postedBy', '_id name')
  .populate('postedBy', '_id name')
  .sort('-created')
  .exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(posts)
  })
}

//LISTNEWSFEED post controller
const listNewsFeed = (req, res) => {
  let following = req.profile.following
  following.push(req.profile._id)
  Post.find({postedBy: { $in : req.profile.following } })
  .populate('comments', 'text created')
  .populate('comments.postedBy', '_id name')
  .populate('postedBy', '_id name')
  .sort('-created')
  .exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(posts)
  })
}

//REMOVE post controller
const remove = (req, res) => {
  let post = req.post
    post.remove((err, deletedPost) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(deletedPost)
    })
}

//PHOTO or IMAGE post controller
const photo = (req, res, next) => {
    res.set("Content-Type", req.post.photo.contentType)
    return res.send(req.post.photo.data)
}

//LIKE post controller
const like = (req, res) => {
  Post.findByIdAndUpdate(req.body.postId, {$push: {likes: req.body.userId}}, {new: true})
  .exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(result)
  })
}

//UNLIKE post controller
const unlike = (req, res) => {
  Post.findByIdAndUpdate(req.body.postId, {$pull: {likes: req.body.userId}}, {new: true})
  .exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(result)
  })
}

//COMMENT post controller
const comment = (req, res) => {
  let comment = req.body.comment
  comment.postedBy = req.body.userId
  Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
  .populate('comments.postedBy', '_id name')
  .populate('postedBy', '_id name')
  .exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(result)
  })
}

//UNCOMMENT post controller
const uncomment = (req, res) => {
  let comment = req.body.comment
  Post.findByIdAndUpdate(req.body.postId, {$pull: {comments: {_id: comment._id}}}, {new: true})
  .populate('comments.postedBy', '_id name')
  .populate('postedBy', '_id name')
  .exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(result)
  })
}

//ISPOSTER by user post controller
const isPoster = (req, res, next) => {
  let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
  if(!isPoster){
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

export default {
  listByUser,
  listNewsFeed,
  create,
  postByID,
  remove,
  photo,
  like,
  unlike,
  comment,
  uncomment,
  isPoster
}
