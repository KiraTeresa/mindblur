 - Calendar to remember everyones birthday
 - Todo List Task Manager Kind of Thing Vincent Doesnt Know What Do You Say Bullet Note Taking
 - Cookbook :shrug:
 - Medicine Reminder, Maybe. Elvan needs something like this
 - Playlist generator
 - Library / Good Reads but before you good reads, just getting the possible good reads!!!!!


Models
User
_id: ObjectId
username: String|Unique|Required
email: String|Unique|Required
password: String
books: [ObjectId]
<!-- Forgot password? -->

Book
_id: ObjectId
title: String|Required
author: [String|Required]|Required
publisher: String
nsfw: Boolean->false
genre: [ObjectId]
description: String

Genre
_id: ObjectId
title: String|Required|Unique

