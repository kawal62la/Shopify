var express = require("express");
let fs = require('fs')
let url = require('url')
let axios = require('axios')
let sharp = require('sharp')
const path = require('path');
let { google } = require('googleapis')
const dotEnv = require('dotenv')
let orderModal = require("../models/orderCreate");
let dummyData = require("../jsonData/orderData.json");
// let getGoogle  = require("../jsonData/googleKey.json");
let getGoogle  = require("../jsonData/testKey.json");
const { response } = require("express");
var router = express.Router();
dotEnv.config()
// const CLIENT_ID ="687614289619-9lum2pivmqaqcittab71epd5o1js5d40.apps.googleusercontent.com"
// const CLIENT_SECTET = "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"
// const REDIRECT_URL  = "https://developers.google.com/oauthplayground"

// const REFRESH_TOKEN = "1//04e7BISNluuDBCgYIARAAGAQSNwF-L9Ir7L-1jR3aO10zQN7TI3mDVikcXGaF2bD7gtm_OY-aqsOEZ8ipyZMa86SpoWTk98Sm4S8"

const CLIENT_ID =process.env.CLIENT_ID
const CLIENT_SECTET = process.env.CLIENT_SECTET
const REDIRECT_URL  = process.env.REDIRECT_URL

const REFRESH_TOKEN = process.env.REFRESH_TOKEN

// const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
// async function authorize() {
//   const jwtClient = new google.auth.JWT(
//     pkey.client_email,
//     null,
//     pkey.private_key,
//     SCOPES
//   )
//   await jwtClient.authorize();
//   return jwtClient;
// }
/* GET home page. */
router.get("/", async function (req, res) {
  // const drive = google.drive({ version: 'v3', auth: authorize });

  //   const file = await drive.files.create({
  //     media: {
  //       body: createReadStream('filename')
  //     },
  //     fields: 'id',
  //     requestBody: {
  //       name: path.basename('filename'),
  //     },
  //   });
  //   console.log(file.data.id)
  // const reponse = await axios.get("https://cdn.inspon-cloud.com/photoupload/files/0c5b65ea-1327-496f-8794-8f1bcd6f214a.png", { responseType: 'arraybuffer' })
  const reponse = await axios.get("https://app.dripappsserver.com/uploads/38f3208e-5c60-412c-b71a-b7eb99016c1c.png", { responseType: 'arraybuffer' })
  // res.send(reponse.data.image_url)
  const imagePath = "uploads/test.png"
  // const a =Buffer.from(JSON.stringify(reponse.data));
  data =  Buffer.from(reponse.data);
  console.log("reponse.data =>", data)
  // const newB = Buffer.from(a, 'base64')
  const resizedImageBuffer = await sharp(data)
.resize(2112, 2304, { fit: 'inside' })
.toBuffer()
const resizedImageDataUrl = `data:image/jpeg;base64,${resizedImageBuffer.toString('base64')}`;
         const jsonResponse = {
           imageUrl: resizedImageDataUrl,
         };
         fs.writeFileSync(imagePath,  resizedImageBuffer);
         res.send(data)
  // let config = {
  //   method: 'get',
  //   maxBodyLength: Infinity,
  //   url: 'https://mobilebuilder.s3.us-east-1.amazonaws.com/test-updatedpre/20230822T121553195Zlogo (1).png',
  //   headers: { 
  //     'Cookie': 'XSRF-TOKEN=eyJpdiI6IlFKcnI5a2JPUG5uWUN1QnlOT0JSaFE9PSIsInZhbHVlIjoiNTdtVFVlM29WZFNOelFKV1dXNjJsai9QZWR4RzVZdGo3K0J1RW1YZjNtZ1JKWGZOZXd5ek1QTk9MNVV2NzlHWDUyZG5Hd3pzdUNnOUcwSSsrK2V6VXRrSTlrdWhYR3Jua3BiY0dGcEVrbjlqUkVUVGhlUHRhTEpCYm90c1ZuTlkiLCJtYWMiOiIwMGZiNGZiZmM4MTYzNzEwOTk4NjNlYTVkZThkZjlkM2MyZDNmMzA4N2MzOWM2ZDljMDdhZjhjYzZmMmI0MzNlIiwidGFnIjoiIn0%3D; gang_sheet_app_session=eyJpdiI6ImxzRFBMMDZOSGoxZW9ScytBdEpocXc9PSIsInZhbHVlIjoiQkpkYU5aU0lEMGxxVXhXREFBcGRIVDRQVTRkcnE2VkxsNDNBSG1YTG9jSlNvSjhsRVY2YVp3ZXRPVWhoT0JnSVEvWGlRajh3V2U1UGFnNFRiQkJOQ2w1eFR6c1VLcUFGNzhwRk1MM01SVElkZG5RbG9TTmI0K2NpMi9waWQ5L1YiLCJtYWMiOiJkOWFlMWJhMjVmMDBiY2ZjYTQzY2NhZjc0ZWIzZTJjMDQwMjA2MzhmMzRmOTkwODg0MmFlYzgyYjA4YzlmNmEzIiwidGFnIjoiIn0%3D'
  //   },
  //   responseType: 'arraybuffer'
  // };
  
  // axios.request(config)
  // .then((response) => {
  //   console.log(JSON.stringify("RESSSS"));
  //   console.log(JSON.stringify(response.data));
  //   res.send(response.data)
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  // console.log(reponse)
//   const imageDataBase64 = reponse.data; // Assuming the base64 image data is inside the "data" property
//   console.log(imageDataBase64)
//   const imageBuffer = Buffer.from(imageDataBase64, 'base64');
// // console.log(imageBase64);
//   const resizedImageBuffer = await sharp(imageBuffer)
//   .resize(200, 200, { fit: 'inside' })
//   .toBuffer()
//    const resizedImageDataUrl = `data:image/jpeg;base64,${resizedImageBuffer.toString('base64')}`;

//   res.send(resizedImageDataUrl);
// console.log("reponse", reponse)
// const resizedImageBuffer = await sharp(reponse.data)
// .resize(2112, 2304, { fit: 'inside' })
// .toBuffer()
// const resizedImageDataUrl = `data:image/jpeg;base64,${resizedImageBuffer.toString('base64')}`;
//          const jsonResponse = {
//            imageUrl: resizedImageDataUrl,
//          };
// res.send(jsonResponse)
});


//SAVE ORDER FROM WEBHOOK
router.post("/getOrders", async function (req, res, next) {
  console.log("ENTE IN ORDER API");
  try {
    
    const orderData = dummyData.order;
    const orderProperty = []
      orderData.line_items.map(orderItem => {
        orderItem?.properties.length &&
       orderProperty.push({
        properties: orderItem?.properties,
        status: false,
        quantity: orderItem.quantity,
        variant_title: getResizeValues(orderItem.variant_title)
      })
  });

 
    // console.log("req", dummyData.order.line_items '50 / 1" x 1"' '3.5" x 8.5" / 50');
    const update = await orderModal.findOneAndUpdate(
      { orderID: orderData.id },
      // {
      //   orderData: line_items,
      //   orderName: name,
      //   orderNumber: order_number,
      //   orderCreatedAt: created_at,
      //   status: 1,
      // },
      {
        orderData: orderProperty,
        orderName: orderData.name,
        orderNumber: orderData.order_number,
        orderCreatedAt: orderData.created_at,
        status: 1,
      },
      {
        upsert: true,
      }
    );
    // console.log("update", data);
    res.send(orderProperty);
  } catch (err) {
    console.log("ERR");
    console.log(err);
    res.send("EHT API");
  }
});




//get RESIZE VALUES
function getResizeValues (inputString) {
if(inputString){
  // input types  "variant_title":     "22 in X 36 in"
									// "variant_title":   "6\" x 8.6\""
									// "variant_title":   "6.5\" x 6\""
									// "variant_title":   "100 \/ 4\" x 4\""
                  //                    '50 / 1" x 1"'
                //                      '3.5" x 8.5" / 50'

  // const inputString = "7\" x 7\"";
  // output = "8 x 9"
  // console.log("inputString", inputString)
// const regex = /(\d+)\s*(?:in|")\s*[Xx]\s*(\d+)\s*(?:in|")/; // Regular expression to match the pattern
const regex = /(\d+(\.\d+)?)\s*(?:"|in)\s*[Xx]\s*(\d+(\.\d+)?)\s*(?:"|in)/ // Regular expression to match the pattern

const match = inputString.match(regex);
console.log("match", match)
if (match) {
    const firstValue = parseFloat(match[1]); // The first numeric value
    const secondValue = parseFloat(match[3]); // The second numeric value

    console.log(`First Value: ${firstValue}`);
    console.log(`Second Value: ${secondValue}`);
    return {
      width:Math.round(firstValue)*96,
      height:Math.round(secondValue)*96,
      val:`${firstValue}x${secondValue}`
    }
} else {
    console.log("Pattern not found in the input string.");
    return {
      width:300,
      height:300,
      val:"noSizeFound"
    }
}
} else{
  return null
}
}

// RESZING IMAGES AND SAVING IN FOLDER
const processResize = async (imageInfo, iName) =>{

  if(imageInfo.properties.length){

    // console.log("ENTER IN RESIZE 2", imageInfo)
      const extractImageName =()=> {
        if(imageInfo.properties[0]?.name == "File Upload 1") {
          let finalVal
          const match = imageInfo.properties[0]?.value?.match(/ph_image=([0-9a-fA-F-]+)&/);
          const parsedUrl = new URL(imageInfo.properties[0]?.value);
                const extension = parsedUrl.searchParams.get('extension');
               
                if (extension == "p=n=g"){
                  finalVal = "png"
                } else{
                  finalVal = "jpeg"
                }
          if (match && match[1]) {
            return `https://cdn.inspon-cloud.com/photoupload/files/${match[1]}.${finalVal}`;
          }
          return null;
        } else {
           return "https://cdn.shopify.com/s/files/1/0501/0433/6550/products/d8f3761140d81eca0b590b5613bb866d_ef844024-d8cb-4002-82c1-7a62d3c48048.jpg?v=1695814017"
        }
        }
    //  const dimentions = getResizeValues(imageInfo.variant_title.replace(/'/g, "\\'"))
     
     const reponse = await axios.get(extractImageName(), { responseType: 'arraybuffer' })
     console.log(reponse.data)
    const imgType = reponse.headers['content-type']

    const resizedImageBuffer = await sharp(reponse.data)
     .resize(imageInfo.variant_title.width, imageInfo.variant_title.height, { fit: 'inside' })
     .toBuffer()
     const resizedImageDataUrl = `data:image/jpeg;base64,${resizedImageBuffer.toString('base64')}`;
             const jsonResponse = {
              imageUrl: resizedImageDataUrl,
            };
    
            const imagePath = `uploads/${imageInfo.variant_title.val}-${imageInfo.quantity}-${iName}.${imgType.replace('image/','')}`;
            // console.log(jsonResponse[0]) 
            fs.writeFileSync(imagePath, resizedImageBuffer);
            return  imgType
  }
}

router.get('/multipleImages',async (req, res) => {
  
  console.log("ENTER IN PREVIEW IMAGE !")
  try{
  
    const getOrder = await orderModal.findOne({status: 1},{
      orderID:1,
      orderCreatedAt:1,
      orderName:1,
      orderNumber:1,
      "orderData": {
        "$map": {
          "input": "$orderData",
          "as": "data",
          "in": {
            "status": "$$data.status",
            "quantity": "$$data.quantity",
            "variant_title": "$$data.variant_title",
            "properties": {
              "$map": {
                "input": {
                  "$filter": {
                    "input": "$$data.properties",
                    "as": "prop",
                    "cond": {
                      "$or": [
                        { "$eq": ["$$prop.name", "_Print Ready File"] },
                        { "$eq": ["$$prop.name", "File Upload 1"] }
                      ]
                    }
                  }
                },
                "as": "filteredProp",
                "in": {
                  "name": "$$filteredProp.name",
                  "value": "$$filteredProp.value"
                }
              }
            }
          }
        }
      }
  })
  if(getOrder){
  const outputFolder = "uploads"
  if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
  }
  
  //Resizing the images
  const resizePromises =  getOrder.orderData.map(processResize)
  console.log("resizePromises 3", resizePromises)
  
 const resizedDone = await Promise.all(resizePromises)
  
   console.log("LAST 5", resizedDone)
  // //get all the resizwed images
   const getAllImgArry = await getAllImagesFromFolder(outputFolder)
   console.log("getAllImgArry 6", getAllImgArry)
  
  // saving to google drive
   const savingImagetoDrive =  await uploadImagesToDrive(getAllImgArry, getOrder.orderNumber,getOrder.orderCreatedAt)
   const data = await Promise.all(savingImagetoDrive)
  // console.log('data', data);
   orderModal.findOneAndUpdate({orderID: getOrder.orderID},{
     status: 2
   }).then((e)=>{
     res.send(savingImagetoDrive)
   })
   .catch((er)=>{
     res.send({code : 401, message:err})
   })
  } else{
    res.send({code : 200, message:"no data found"})
  }
  // res.send(getOrder)
  } catch(err){
    console.log("err", err)
    res.send({code : 401, message:err})
  }
  });

//get all images from folder
function isImageFile(filename) {
  const extname = path.extname(filename).toLowerCase();
  return extname
}

function getAllImagesFromFolder(folderPath) {
  return new Promise((resolve, reject) => {
      fs.readdir(folderPath, (err, files) => {
          if (err) {
              reject(err);
              return;
          }
          const imageFiles = files.filter(isImageFile);
          console.log(files)
          resolve(files);
      });
  });
}


//SAVING IMAGES TO GOOGLE DRIVE
async function uploadImagesToDrive(getAllImgArry, num, creatAt) {
  console.log("ENTER IN UPLOADING IN DRIVE")
// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECTET,
//   REDIRECT_URL
// )
const auth = new google.auth.JWT(
  getGoogle.client_email,
  null,
  getGoogle.private_key,
  ['https://www.googleapis.com/auth/drive']
);
const drive = google.drive({ version: 'v3', auth:auth });
// oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

  return uploadImg = getAllImgArry.map(async(e)=>{
    const fileMetadata = {
      name: `${num}-${e.replace('.png','')}-${creatAt}`, // Replace with the desired file name.
      parents:["1aCbSJBY9Oqffz_ybuUeA-7zZpYHLPh87"]
    };
    const media = {
      mimeType: 'image/png', // Set the appropriate MIME type for your image.
      body: fs.createReadStream(`uploads/${e}`), // Replace with the path to your image file.
    };
    const file = await drive.files.create(
      {
        resource: fileMetadata,
        media: media,
        fields: 'id',
      }
    );
    
    console.log("sucessfully uploaded", file.config.status)
    fs.unlinkSync(`uploads/${e}`)
    return "file"
  })
  
}
// async function uploadImagesToDrive(getAllImgArry, num, creatAt) {
//   console.log("ENTER IN UPLOADING IN DRIVE")
// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECTET,
//   REDIRECT_URL
// )

// oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

//   // Create a Drive instance
//   const drive = google.drive({ version: 'v3', auth:oauth2Client });

//   return uploadImg = getAllImgArry.map(async(e)=>{
//     const file = await drive.files.create({
//       requestBody:{
//         name: `${num}-${e.replace('.png','')}-${creatAt}`,
//         mimeType:`image/png`
//       },
//       media:{
//         mimeType:"image/png",
//         body:fs.createReadStream(`uploads/${e}`)
//       }
//     })
//     fs.unlinkSync(`uploads/${e}`)
//     console.log("sucessfully uploaded")
//     return file
//   })

  
// }

router.get("/cronApi", async function (req, res) {
  // res.render('index', { title: 'Express' });
  const orderData = dummyData.order;
  console.log("req", dummyData.order.line_items);
  const getData = await orderModal.findOne(
    { orderID: "5478877331747" },
    { orderData: { "properties.name": "File Upload 1", value:1} }
  );

  res.send(getData)
});



module.exports = router;
