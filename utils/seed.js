const connection = require('../config/connection');
const { Thoughts, Comment } = require('../models');


// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await Thoughts.deleteMany({});
  await Comment.deleteMany({});

  // Empty arrays for randomly generated posts and comments



let comments=[];

    comments.push(
    {
        comment: 'So if I enjoy loneliness and avoid contact with people, does it mean that Im introvert?',
        username: "vBardStudent"
    },
    {
        comment: 'The dark mode is more convenient for me, it helps my eyes to relax.',
        username: "MaddenJudge"
    },
    {
        comment: 'First image of black hole was really interesting, I wonder if we can have optical image of it in the future.',
        username: "ChunkOcean"
    },
    {
        comment: 'Nature is scary, some insects scare me so much. Im kind of arachnophobic to be honest.',
        username: "SublimeLeg"
    },
    {
        comment: 'What is your favorite TV show? I love Black Mirror very much, think it is cool.',
        username: "FieryAnimal"
    }
  
)


let thoughts =[]; 

thoughts.push(
{
    thoughts: "You will never regret being kind.",
    username: "FieryAnimal"
},
{
    thoughts: "Nothing ever becomes real till it is experienced.",
    username: "ChunkOcean"
}
)


  // Wait for the comments to be inserted into the database
  await Comment.collection.insertMany(comments);


  // Wait for the posts array to be inserted into the database
  await Thoughts.collection.insertMany(thoughts);

  // Log out a pretty table for comments and posts
  console.table(comments);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
