"use strict";
// AbstractDumper.java
var boardName

var pageLimbo
var fullThumb
var fullMedia
var topicLocalBoard
var mediaLocalBoard
var mediaPreviewUpdates
var mediaUpdates
var deletedPosts

var topicUpdates
var sourceBoard
var topics
var newTopics


function constructor_AbstractDumper (boardName, topicLocalBoard, mediaLocalBoard,
    sourceBoard, fullThumb, fullMedia, pageLimbo) {
    this.boardName = boardName;
    this.sourceBoard = sourceBoard;
    this.topicLocalBoard = topicLocalBoard;
    this.mediaLocalBoard = mediaLocalBoard;
    this.topics = {};
    this.mediaPreviewUpdates = [];
    this.mediaUpdates = [];
    this.topicUpdates = new LinkedBlockingQueue<Topic>();
    this.deletedPosts = [];
    this.newTopics = [];
    this.fullThumb = fullThumb;
    this.fullMedia = fullMedia;
    this.debugLevel = TALK;
    this.pageLimbo = pageLimbo;
    }

class MediaFetcher {
    function run() {
        while (true) {
            var mediaPost
            mediaPost = mediaUpdates.take()
            mediaLocalBoard.insertMedia(mediaPost, sourceBoard)
        }
    }
}

class TopicInserter {
    run() {
        while (true) {
            var newtopic
            newTopic = topicUpdates.take()
        }
    }
}

class TopicFetcher {
    function pingTopic() {
        throw('TODO')// TODO
    }
    function run () {
        while (true) {
            var newtopic
            newTopic = newTopics.take()

        }
    }
}
