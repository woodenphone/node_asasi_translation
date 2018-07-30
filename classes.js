"use strict";
// Classes

// Topic.java
class Topic {
    constructor (num, omPosts, omImages) {
        //
        this.num = num
        this.omPosts = omPosts
        this.omImages = omImages
        this.posts = []
        this.allPosts = {}
        this.lastPage = 0
        this.lastHit = 0
        this.busy = false
    }
}

// Post.java
class Post {
    constructor () {
        this.posterIp = null
        this.num = null
        this.subnum = null
        this.threadNum = null
        this.uniqueIps = null
        this.since4pass = null
        this.op = null
        this.date = null
        this.previewOrig = null
        this.previewW = null
        this.previewH = null
        this.mediaId = null
        this.mediaOrig = null
        this.mediaW = null
        this.mediaH = null
        this.mediaSize = null
        this.mediaHash = null
        this.mediaFilename = null
        this.spoiler = null
        this.deleted = null
        this.capcode = null
        this.email = null
        this.name = null
        this.trip = null
        this.title = null
        this.comment = null
        this.delpass = null
        this.sticky = null
        this.closed = null
        this.archived = null
        this.posterHash = null
        this.posterCountry = null
        this.posterTrollCountry = null
        this.exif = null
        this.link = null
        this.type = null
        this.omitted = null
    }
}
// Page.java
class Page {
    constructor() {
        this.int = null
        this.threads = []
    }
}
// Media.java
class Media {
    constructor () {
        this.mediaId = null
        this.mediaHash = null
        this.media = null
        this.previewOp = null
        this.previewReply = null
        this.total = null
        this.banned = null
    }
}
// MediaPost.java
class MediaPost {
    constructor () {
        //
        this.num = null
        this.threadNum = null
        this.op = null
        this.preview = null
        this.media = null
        this.mediaHash = null
    }
}
