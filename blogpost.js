// blogApp.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let posts = []; 
function viewPosts() {
  if (posts.length === 0) {
    console.log("No posts yet.");
  } else {
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} - ${post.content}`);
    });
  }
  showMenu();
}


function createPost() {
  rl.question("Enter post title: ", (title) => {
    rl.question("Enter post content: ", (content) => {
      const newPost = { title, content };
      posts.push(newPost);
      console.log("Post created successfully!");
      showMenu();
    });
  });
}


function editPost() {
  rl.question("Enter the number of the post you want to edit: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < posts.length) {
      rl.question("Enter new title: ", (title) => {
        rl.question("Enter new content: ", (content) => {
          posts[index] = { title, content }; // Edit the post
          console.log("Post updated successfully!");
          showMenu();
        });
      });
    } else {
      console.log("Invalid post number.");
      showMenu();
    }
  });
}


function deletePost() {
  rl.question("Enter the number of the post you want to delete: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < posts.length) {
      posts.splice(index, 1); // Remove the post from array
      console.log("Post deleted successfully!");
      showMenu();
    } else {
      console.log("Invalid post number.");
      showMenu();
    }
  });
}


function showMenu() {
  console.log("\nBlog CLI Application");
  console.log("1. View Posts");
  console.log("2. Create Post");
  console.log("3. Edit Post");
  console.log("4. Delete Post");
  console.log("5. Exit");

  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        viewPosts();
        break;
      case "2":
        createPost();
        break;
      case "3":
        editPost();
        break;
      case "4":
        deletePost();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid option. Please try again.");
        showMenu();
    }
  });
}


showMenu();
