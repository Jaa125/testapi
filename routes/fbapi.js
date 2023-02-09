const express = require('express')
const app = express()




//get page id
// app.get('/api/get-page-id', async (req, res) => {
//     const link = req.query.link;
//     const accessToken = "508115391237901|UmAUYCviOXNDmqkfJKfUyvf0-jg";
//   try{
//   const res = await  axios.get(`https://graph.facebook.com/${link}?fields=id&access_token=${accessToken}`,
//     {
//         headers: {
//             "token_type":"bearer",
//           "X-Requested-With": "XMLHttpRequest",
//         },
//       });

//       res.status(200).json(res)
//       console.log("ress", res)
//     }catch (err) {
//         res.status(500).json(err)
//     }
   
    
//   });


//get page id
// app.get('/get-page_id', (req, res) => {
//     const link = req.query.link;
//     const accessToken = "508115391237901|UmAUYCviOXNDmqkfJKfUyvf0-jg";
  
//     axios.get(`https://graph.facebook.com/${link}?fields=id&access_token=${accessToken}`,
//     {
//         headers: {
//             "token_type":"bearer",
//           "X-Requested-With": "XMLHttpRequest",
//         },
//       })
//     .then(response => {
//       res.send(response.data);
//       console.log("pagedata", response.data)
//     })
//     .catch(error => {
//       res.send(error);
//     });
//   });


//post like 

app.post('/like-page', (req, res) => {
    const pageId = req.body.pageId;
    const accessToken = 'your-app-access-token';
  
    axios.post(`https://graph.facebook.com/${pageId}/likes`, {
      access_token: accessToken
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
  });

  //To know if a user has followed a Facebook page using Graph API and Node.js, you can use the Graph API endpoin
  async function checkIfUserFollowsPage(userId, pageId) {
    try {
      const response = await axios.get(`https://graph.facebook.com/${userId}/likes?access_token=${your_access_token}`);
      const likes = response.data.data;
      return likes.some(like => like.id === pageId);
    } catch (error) {
      console.error(error);
    }
  }
  
  checkIfUserFollowsPage(userId, pageId)
    .then(follows => console.log(follows))
    .catch(error => console.error(error));