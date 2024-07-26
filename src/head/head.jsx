import React from 'react';
import style from './head.module.css';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Head = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }
    
  return (
    <div>
      <img className={style.Head} src="./src/assets/logo.png" alt="" />
      <button className={style.home}>Home</button>
      <button className={style.home}>About us</button>
      <Box sx={{ width:110, border:"hidden", position: "relative", top:"-50px", left:"500px" }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label" >Trainings</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem  value={10}>Web and Mobile Application</MenuItem>
          <MenuItem value={20}>Flutter App development</MenuItem>
          <MenuItem value={30}>Graphic Designing</MenuItem>
          <MenuItem value={40}>Block Chain</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <button className={style.contact}>Contact us</button>

    <Grid container sx={{ height: 500 }} spacing={2} boxShadow="0px 15px 25px gray">
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "" }}>
          <h1 className={style.h1} >Introduction To Jawan Pakistan</h1>
          <Typography sx={{paddingLeft:"30px", width:"570px",paddingTop:"15px", color:"gray"}}>
          The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "50%"}}>
          <CardMedia image='./src/assets/img1.png'
           component="img"
        height="300"
          ></CardMedia>
        </Box>
      </Grid>
    </Grid>
{/* sec2 */}
    <Grid container sx={{ height: 500, boxShadow:"0px 15px 25px gray" }} spacing={2}>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "" }}>
        <CardMedia image='./src/assets/imag1.png'
           component="img"
        height="400"
          ></CardMedia>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "50%"}} >
         <Typography sx={{color:"gray"}}>
          <h1 className={style.h2}>Mission And Vision
          Behind Jawan Pakistan</h1>
          Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.
          <br />
          <br />
          Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
         </Typography>
        </Box>
      </Grid>
    </Grid>
    <br />
    <br /><br /><br /><br /><br /><br /> 
    <br /><br />
    <br />
    {/* sec3 */}
    <Card>
      <CardActionArea>
        <CardMedia

        sx={{width :"200px", 
          height:"200px",
            borderRadius: '50%',
            margin:"auto",
            alignSelf:"center",
            objectFit: 'cover',
        }}
          component="img"
          image="./src/assets/ali.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{textAlign:"center",color:"rgb(37, 73, 37)",
          }}>
          <h1>MUHAMMAD ALI MUGHAL</h1>
          <h4 className={style.koma}>Founder of Jawan Pakistan</h4>
          <h1 className={style.koma}>,,</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{width:"670px", margin:"auto",fontSize:"20px"}}>
          We aim to be most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    {/* sec4 */}
    <Box sx={{color:"rgb(37, 73, 37)",fontFamily:"sans-serif",marginTop:"150px",textAlign:"center"}}><h1>IT Trainings offering in Jawan Pakistan</h1></Box>
   <Box sx={{display:"flex",flexDirection:"row",margin:"100px",gap:"50px", width:"1100px",height:"320px",textAlign:"center",}}>
   <Card sx={{ maxWidth: 345,boxShadow:"0 0 15px gray",borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="./src/assets/web.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{fontSize:"18px"}}>
            Web And Mobile Application Development
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ boxShadow:"0 0 15px gray",borderRadius:"10px"  }}>
      <CardActionArea>
        <CardMedia
        sx={{}}
          component="img"
          image="./src/assets/fluter.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{fontSize:"18px"}}>
            Flutter Mobile Application Development
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width:"400px" ,boxShadow:"0 0 15px gray",borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="./src/assets/graphic.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{height:"270px",fontSize:"18px"}}>
          Graphic Design And Vedio Editing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </Box>

   <Box sx={{display:"flex",flexDirection:"row",marginLeft:"250px", gap:"50px", width:"700px",height:"320px",textAlign:"center"}}>
 
   <Card sx={{ width:"400px" ,boxShadow:"0 0 15px gray",borderRadius:"10px"}}>
      <CardActionArea>
        <CardMedia
        sx={{height:"250px"}}
          component="img"
          image="./src/assets/blockchain.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{fontSize:"18px"}}>
          Block Chain Development
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width:"400px" ,boxShadow:"0 0 15px gray" ,borderRadius:"10px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="./src/assets/digital.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{height:"270px",fontSize:"18px"}}>
          Digital And Social Media Marketing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
   </Box>

   {/* sec 5 */}

   <Box sx={{
    boxShadow:"10px 10px 25px gray",borderBottom:"1px solid gray"
   }}>
    <Typography sx={{
      textAlign:"center",color:" rgb(37, 73, 37)",marginTop:"100px",paddingTop:"50px"
    }}> <h1>Glimpses of sessions conducted by Jawan Pakistan</h1></Typography>

   <Box sx={{
    display:"flex",flexDirection:"row",gap:"30px",marginTop:"20px"
   }}>
   <CardMedia
    sx={{
      width:"300px",
      height:"250px",marginLeft:"30px"
    }} component="img"
          image="./src/assets/i1.jpg" >
    </CardMedia>

    <CardMedia
    sx={{
      width:"300px",
      height:"250px"
    }} component="img"
          image="./src/assets/i2.jpg" >
    </CardMedia>

    <CardMedia
    sx={{
      width:"550px",
      height:"400px"
    }} component="img"
          image="./src/assets/i3.jpg" >
    </CardMedia>
   </Box>

   <Box sx={{
    display:"flex",flexDirection:"row",gap:"30px"
   }}>
   <CardMedia
    sx={{
      marginTop:"-120px",
      marginLeft:"30px",
      width:"630px",
      height:"400px"
    }} component="img"
          image="./src/assets/i4.jpg" >
    </CardMedia>

    <CardMedia
    sx={{
      marginTop:"20px",
      width:"275px",
      height:"250px"
    }} component="img"
          image="./src/assets/i5.jpg" >
    </CardMedia>

    <CardMedia
    sx={{marginTop:"20px",
      width:"250px",
      height:"250px"
    }} component="img"
          image="./src/assets/i6.jpg" >
    </CardMedia>
   </Box>
   </Box><br />

   <Box sx={{marginTop:"150px",borderRadius:"10px", width:"650px",height:"630px",boxShadow:"0px 0px 15px gray",marginLeft:"350px",paddingLeft:"50px",paddingTop:"50px"}}>
    <Typography sx={{color:"gray",fontFamily:"sans-serif"}}>
      <h2>Contact</h2>
    </Typography>
    <br />
    <label className={style.label} htmlFor="">Name</label><br /><br />
    <input className={style.input} type="text" /><br /><br />

    <label className={style.label} htmlFor="email">Email</label> <br /><br />
    <input className={style.input}  type="email" placeholder='abc@gmail.com' /> <br /><br />

    <label className={style.label} htmlFor="">Phone No</label> <br /><br />
    <input className={style.input}  type="Number" placeholder='0312345667' /> <br /><br />

    <label className={style.label} htmlFor="">Message</label> <br /><br />
    <input className={style.input1}  type="text"/><br /><br />
    
    <Button sx={{ padding:"10px",
    width: "500px",
    borderStyle:"none",
    border: "1px solid rgb(187, 182, 182)",
    bordeRadius: "2px",
    color:"white",backgroundColor:"rgb(37, 73, 37)"}} variant="contained">Submit</Button>
   </Box>

   <Box sx={{borderTop:"1px solid gray",marginTop:"100px"}}>

    <CardMedia
    sx={{width:"280px",
      marginTop:"100px",
      marginLeft:"50px"
    }}
    component="img"
    image='./src/assets/logo.png'>
    </CardMedia>
   </Box>

   <Box sx={{display:"flex", flexDirection:"row",listStyleType:"none",marginLeft:"500px",gap:"400px",color:"rgb(39, 150, 39)",fontSize:"18px"}}>
   <Box>
   <li className={style.company}><b>COMPANY</b></li>
    <li>Home</li>
    <li>About us</li>
    <li>Trainings</li>
    <li>Contact us</li></Box>

    <Box>
    <li className={style.company}><b>CONTACT DETAILS</b></li>
    <li>Muhammad Ali Mughal</li>
    <li>+923005292675</li>
    <li>jawantechpk@gmail.com</li>
    </Box>
   </Box>

   <Box sx={{display:"flex", flexDirection:"row",gap:"900px",paddingLeft:"30px",paddingTop:"50px",color:"grey"}}>
    <Box>
      <Typography>2022 Jawan Pakistan</Typography>
    </Box>
    <Box>
    <FacebookIcon/> 
    <InstagramIcon/>
    <LinkedInIcon/>
    </Box>
   </Box>

    </div>
  )
}

export default Head
