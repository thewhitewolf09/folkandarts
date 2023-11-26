import React, { useState } from "react";
import "./CommentsSection.scss";
import profilePhoto from "..//..//assets/images/profile.jpg";
import defaultProfilePhoto from "..//..//assets/images/defaultProfile.jpg";

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ankit Gomladu",
      profilePhoto: defaultProfilePhoto,
      comment: "Great content!",
      likes: 10,
      dislikes: 2,
      time: "1 hour ago",
      replies: [],
    },
    {
      id: 2,
      name: "Bhanu Pratap Singh",
      profilePhoto: defaultProfilePhoto,
      comment: "Interesting article!",
      likes: 8,
      dislikes: 1,
      time: "2 hours ago",
      replies: [],
    },
    {
      id: 3,
      name: "Sumit Nirmal",
      profilePhoto: profilePhoto,
      comment:
        "Creativity is at the heart of scientific innovation, yet the atmosphere of rigorous competition prevalent in our education system curbs creativity and overemphasizes curricular performance.",
      likes: 8,
      dislikes: 1,
      time: "2 hours ago",
      replies: [],
    },
    // Add more comments here...
  ]);
  const [showMoreCount, setShowMoreCount] = useState(10);
  const [replyText, setReplyText] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleLike = (commentId) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 };
        }
        return comment;
      });
    });
  };

  const handleDislike = (commentId) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, dislikes: comment.dislikes + 1 };
        }
        return comment;
      });
    });
  };

  const handleReply = (commentId, reply) => {
    if (reply !== "") {
      setComments((prevComments) => {
        return prevComments.map((comment) => {
          if (comment.id === commentId) {
            const updatedComment = {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now(), text: reply, time: "Just now" },
              ],
            };
            return updatedComment;
          }
          return comment;
        });
      });
    }

    setReplyText("");
  };

  const addComment = (newComment) => {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  };

  const loadMoreComments = () => {
    // Logic to load more comments
    // Example: Increment the count of shown comments by 10
    setShowMoreCount((prevCount) => prevCount + 10);
    // You can also fetch additional comments from an API within this function and update the 'comments' state accordingly
    // For example:
    // Call an API endpoint to fetch more comments and update 'comments' state with the new comments
    // For demonstration purposes, I'll simulate a delay to mimic an API call
    /*
    fetchMoreCommentsFromAPI().then(newComments => {
      setComments(prevComments => [...prevComments, ...newComments]);
    });
    */
  };

  // Simulated function to fetch more comments from an API (not a real API call)
  // This is just an example to demonstrate the process
  const fetchMoreCommentsFromAPI = () => {
    return new Promise((resolve) => {
      // Simulate an API call delay using setTimeout
      setTimeout(() => {
        // Sample new comments fetched from the API (replace this with your API call)
        const newComments = [
          {
            id: 11,
            name: "User 11",
            comment: "New comment 11",
            likes: 5,
            dislikes: 1,
            time: "2 days ago",
            replies: [],
          },
          {
            id: 12,
            name: "User 12",
            comment: "New comment 12",
            likes: 8,
            dislikes: 2,
            time: "1 day ago",
            replies: [],
          },
          // Add more comments here...
        ];
        resolve(newComments);
      }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
    });
  };

  const sortCommentsByTop = () => {
    setComments((prevComments) => {
      // Sort the comments array based on 'likes' in descending order
      const sortedComments = prevComments
        .slice()
        .sort((a, b) => b.likes - a.likes);
      return sortedComments;
    });
  };

  const sortCommentsByNew = () => {
    setComments((prevComments) => {
      // Sort the comments array based on 'time' in ascending order
      const sortedComments = prevComments
        .slice()
        .sort((a, b) => new Date(a.time) - new Date(b.time));
      return sortedComments;
    });
  };

  const handleToggleReply = (commentId) => {
    setSelectedCommentId(commentId === selectedCommentId ? null : commentId);
    setReplyText(""); // Reset reply input text when toggling comments
  };

  
  return (
    <div className="comments-section">
      <div className="comments-header">
        <h2>{comments.length} Comments</h2>
        <div className="comment-buttons">
          <button className="sort-btn" onClick={sortCommentsByTop}>
            Sort by Top
          </button>
          <button className="sort-btn" onClick={sortCommentsByNew}>
            Sort by New
          </button>
        </div>
      </div>
      <div className="add-comment-container">
        <div className="comment-profile-photo">
          <img src={profilePhoto} alt="" />
        </div>
        <AddCommentForm addComment={addComment} />
      </div>

      <div className="comments-list">
        {comments.slice(0, showMoreCount).map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-info">
              <div className="comment-profile-photo">
                <img src={comment.profilePhoto} alt="" />
              </div>
              <div>
                <p className="user-name">{comment.name}</p>
                <p className="comment-text">{comment.comment}</p>
              </div>
            </div>
            <div className="like-dislike">
              <button onClick={() => handleLike(comment.id)}>
                Like ({comment.likes})
              </button>
              <button onClick={() => handleDislike(comment.id)}>
                Dislike ({comment.dislikes})
              </button>
              <button onClick={() => handleToggleReply(comment.id)}>
                Reply
              </button>
              <p className="comment-time">{comment.time}</p>
            </div>
            <div className="reply-section">
              {selectedCommentId === comment.id && (
                <div className="reply-input">
                  <input
                    type="text"
                    placeholder="Reply to this comment"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button onClick={() => handleReply(comment.id, replyText)}>
                    Post Reply
                  </button>
                </div>
              )}
            </div>
            {/* Display replies if available */}
            {comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="reply">
                    <p>{reply.text}</p>
                    <p className="reply-time">{reply.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="load-more-btn" onClick={loadMoreComments}>
        Load More Comments
      </button>
    </div>
  );
};

const AddCommentForm = ({ addComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      addComment({
        id: Date.now(),
        name: "Ankit Gomladu",
        profilePhoto: profilePhoto,
        comment: newComment,
        likes: 0,
        dislikes: 0,
        time: "Just now",
        replies: [],
      });
      setNewComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
      ></textarea>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentsSection;
