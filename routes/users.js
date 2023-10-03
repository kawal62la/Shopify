var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;














// import express from "express";
// import sharp from "sharp";
// import axios from "axios";
// import fs from 'fs'
// import path from "path";
// import { google } from "googleapis";
// // import credentials from "./imgresize-399509-2ca57519395e.json" assert {type:'json'}
// import credentials from "./imageresizer-399712-746da2202a60.json" assert {type:'json'}
// import orderData from "./orderData.json" assert {type:'json'}
// import dotenv from "dotenv";


// dotenv.config();
// const apiRoute = express.Router();

// // console.log(orderData.order.line_items[0])

// const width = 300; // Replace with your desired width
// const height = 200; // Replace with your desired height


// apiRoute.post('/preview',async (req, res) => {
//   console.log("ENTER IN PREVIEW IMAGE")

  
//     const fileName = 'resized-image.jpg';
  
// const auth = new google.auth.GoogleAuth({
//   credentials,
//   scopes: ['https://www.googleapis.com/auth/drive'], // Replace with the desired scope
// }); 
  

// // Create a client
// const drive = google.drive({ version: 'v3', auth });

// const folderName = 'ImageResizer';

//   // const fileId ;
//   // const email = credentials.client_email; // Replace with the service account email
//   // const email = "nahid.shined@gmail.com"; // Replace with the service account email
//   const email = "sameer1.shinedezign@gmail.com"; // Replace with the service account email
//   const role = 'owner'; 

//   const result = await drive.files.create({
//   resource: {
//     name: folderName,
//     mimeType: 'application/vnd.google-apps.folder',
//   },
//   fields: 'id',
// });     
  

// console.log(`Folder "${folderName}" created with ID: ${result.data.id}`);

//   // try {
//       await drive.permissions.create({
//       fileId : result.data.id,
//       requestBody: {
//         role,
//         type: 'user',
//         emailAddress: email,
//       },
//     });

//     console.log(`Assigned role ${role} to ${email} for file with ID ${result.data.id}`);
//   // } catch (err) {
//   //   console.error('Error setting permissions:', err.message);
//   // }

// // const result = await drive.files.create({
// //   resource: {
// //     name: folderName,
// //     mimeType: 'application/vnd.google-apps.folder',
// //   },
// //   fields: 'id',
// // });

// // console.log(`Folder "${folderName}" created with ID: ${result.data.id}`);

// // Search for the folder by name
// drive.files.list({
//   q: `name = '${folderName}' and mimeType = 'application/vnd.google-apps.folder'`,
// }, (err, res) => {
//   if (err) {
//     console.error('Error searching for folder:', err);
//   } else {
//     const folders = res.data.files;
//     if (folders.length === 0) {
//       console.log('Folder not found.');
//     } else {
//       const folderId = folders[0].id;
//       console.log('Folder ID:', folders);
//     }
//   }
// });

// drive.files.create({
//   resource: {
//     name: fileName,
//     parents: [result.data.id],
//   },
//   media: {
//     mimeType: 'image/jpg',
//     body: fs.createReadStream(`uploads/resized-image.jpg`),
//   },
//  uploadType: 'multipart'
// }).then((res)=> {
   
//   console.log('Image uploaded to Google Drive:', res.data);
// });
//     axios.get(req.body.imageUrl, { responseType: 'arraybuffer' })
//     .then (response => {
//       // Use sharp to resize the image
//       sharp(response.data)
//         .resize(width, height, { fit: 'inside' })
//         .toBuffer()
//         .then( async(resizedImageBuffer) => {
//           const imagePath = 'uploads/test.jpg';
//           const folderPath = 'uploads';
//             if (!fs.existsSync(folderPath)) {
//               fs.mkdirSync(folderPath);
//             }
            
            
//           const resizedImageDataUrl = `data:image/jpeg;base64,${resizedImageBuffer.toString('base64')}`;
//           fs.writeFileSync(imagePath, resizedImageBuffer);
//           const jsonResponse = {
//             imageUrl: resizedImageDataUrl,
//           };

//           res.send({code:200, data:jsonResponse})
//         })
//         .catch(err => {
//           console.error('Error resizing image:', err);
//           // res.status(500).send('Internal Server Error');
//         });
//     })
//     .catch(error => {
//       console.error('Error fetching image from CDN:', error);
//       // res.status(500).send('Internal Server Error');
//     });
  

//   });







//   const processResize = (imageInfo, iName) =>{
//     axios.get(imageInfo.url, { responseType: 'arraybuffer' })
//     .then(response => {
//       sharp(response.data)
//         .resize(imageInfo.width, imageInfo.height, { fit: 'inside' })
//         .toBuffer()
//         .then(resizedImageBuffer => {
//           const resizedImageDataUrl = `data:image/jpeg;base64,${resizedImageBuffer.toString('base64')}`;
//           const jsonResponse = {
//             imageUrl: resizedImageDataUrl,
//           };

//           const imagePath = `uploads/${iName}.jpg`;
//           // console.log(jsonResponse[0])
//           fs.writeFileSync(imagePath, resizedImageBuffer);
//           return jsonResponse
//         })
//         .catch(err => {
//           console.error('Error resizing image:', err);
//         });
//     })
//     .catch(error => {
//       console.error('Error fetching image from CDN:', error);
//       // res.status(500).send('Internal Server Error');
//     });
//   }

//   apiRoute.post('/multipleImages',async (req, res) => {
//     const fileName = 'resized_image.jpg';
// console.log("ENTER IN PREVIEW IMAGE")
// const outputFolder = "uploads"
// if (!fs.existsSync(outputFolder)) {
//   fs.mkdirSync(outputFolder);
// }
//   const imagesToResize = [

//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/c69f7acd5dfb620db902f5cb76f71187.jpg?v=1693831623",
//       width: 300,
//       height:200
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/e0f1eb94e8db2ce5d7d3592d64dcec32.jpg?v=1693831622",
//       width: 400,
//       height:100
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/3bebd434f6347a0598d683a2bbe72f3c.jpg?v=1693831620",
//       width: 500,
//       height:500
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/8a1d0a12c609379896718cadcf294f02.jpg?v=1693831618",
//       width: 700,
//       height:600
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/b5573723a25c892ea84ac8ab1c8959a2.jpg?v=1693831608",
//       width: 900,
//       height:800
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/fb28e1e1a32fbbe52935a00a0681e794.jpg?v=1693831606",
//       width: 1000,
//       height:2000
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/afee7d38b3ca2ad943e3e8874006b833.jpg?v=1693831601",
//       width: 3000,
//       height:2000
//     },
//     {
//       url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/e11e08a46c920e557a1503fa8906485a.jpg?v=1693831592",
//       width: 600,
//       height:200
//     },

//   ]

 
//   const resizePromises =  imagesToResize.map(processResize)
//   console.log(resizePromises)
//   const data1 =   Promise.all(resizePromises)
//   data1.then((e)=>{
//     console.log(e)
//   })
//   // console.log(data1)
//   res.send({code:200, data:"jsonResponse"})
//   });





//   apiRoute.post('/imgPreview',async (req, res) => {
//     console.log("ENTER IN UPLOADING")
//     const imagesToResize = [

//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/c69f7acd5dfb620db902f5cb76f71187.jpg?v=1693831623",
//         width: 300,
//         height:200
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/e0f1eb94e8db2ce5d7d3592d64dcec32.jpg?v=1693831622",
//         width: 400,
//         height:100
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/3bebd434f6347a0598d683a2bbe72f3c.jpg?v=1693831620",
//         width: 500,
//         height:500
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/8a1d0a12c609379896718cadcf294f02.jpg?v=1693831618",
//         width: 700,
//         height:600
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/b5573723a25c892ea84ac8ab1c8959a2.jpg?v=1693831608",
//         width: 900,
//         height:800
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/fb28e1e1a32fbbe52935a00a0681e794.jpg?v=1693831606",
//         width: 1000,
//         height:2000
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/afee7d38b3ca2ad943e3e8874006b833.jpg?v=1693831601",
//         width: 3000,
//         height:2000
//       },
//       {
//         url:"https://cdn.shopify.com/s/files/1/0501/0433/6550/products/e11e08a46c920e557a1503fa8906485a.jpg?v=1693831592",
//         width: 3600,
//         height:2800
//       },
    
//     ]
//     const outputFolder = 'uploads';
//     if (!fs.existsSync(outputFolder)) {
//       fs.mkdirSync(outputFolder);
//     }

//     async function resizeAndSaveImage(imageInfo) {
//       try {
//         const response = await sharp()
//           .resize(imageInfo.width, imageInfo.height)
//           .toFile(`${outputFolder}/${imageInfo.filename}`);
//           console.log(response)
//         console.log(`Resized and saved: ${imageInfo.filename}`);
//       } catch (error) {
//         console.error(`Error resizing and saving ${imageInfo.filename}: ${error}`);
//       }
//     }
//     for (const imageInfo of imagesToResize) {
//       const filename = imageInfo.url.split('/').pop(); // Get the filename from the URL
//       imageInfo.filename = filename;
//       resizeAndSaveImage(imageInfo);
//     }
    
//   });
// export default apiRoute;