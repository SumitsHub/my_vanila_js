// callbacks

const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += post.title + " ";
    });
    console.log(output);
  }, 1000);
}

// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post)
//     }, 2000)
// }

// createPost({title: 'Post three', body: 'This is post three'})
// getPost()

// Promise

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Theres an error");
      }
    }, 1000);
  });
}

// createPost({ title: "Post three", body: "This is post three" })
//   .then(getPost)
//   .catch((err) => {
//     console.log(err);
//   });

const promise1 = Promise.resolve('Hello World');
console.log(promise1);
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Goodbye Bro')
});

Promise.all([promise1, promise2, promise3]).then(values => console.log({values}));

// Async / await

async function init() {
    await createPost({ title: "Post three", body: "This is post three" }).catch((err)=>console.log(err))
    getPost();
}

init()