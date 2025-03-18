* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #FFFFFF;
}
#main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#applybuttonmain {
    background-color: #5019c7;
    height: 6.5vh;
    width: 13vw;
    z-index: 9999;
    border-radius: 50px;
    position: fixed;
    margin-top: 42%;
    margin-left: 85%;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
    display: none;
    font-weight: bold;
}
.animated {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.show {
    opacity: 1;
    transform: translateY(0);
}


#nav{
    transition: transform 0.7s ease-in-out;
    height: 128.39px;
    width: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background-color:white;
    
    
    display: flex; 
    justify-content: space-evenly;
    /* background-color: rgb(222, 30, 123); */
}
.nav-hide {
    transform: translateY(-150%);
}

/* Animate navbar when it comes back */
.nav-show {
    transform: translateY(0);
}
.nav-small {
    height: 80px !important;/* Half Height */
    /* top: 0;  Neeche aayega */
}

/* Navbar ke content ka margin adjust hoga */
.nav-small #navbar-nav {
    margin-bottom: 50px !important;
}


/* Neeche se animate hoke aane ka effect */
.nav-visible {
    transform: translateY(0);
    opacity: 1;
}
#nav #logo {
padding-left: 0%;
height: 95px;
width: 250px;
}


#logo {
    align-items: center;
    margin-top: 0px;
    height: 94.95px;
width: 250px;
transition: width 0.0003s ease-out;
    margin-left: 20px;
    display: block;
    
    justify-content: center;
}
 
  #logo-right {
    height: 65.31px;
    width: 425px;
    margin-left: 350px;
    margin-top: 10px;
    
        transition: opacity .00000001s ease-in-out, transform 0.2s ease-in-out;
    
    
    
    /* background-color: #e66a18; */
    /* width: 100%; */
    display: block;
}
.hidden {
    opacity: 0;
    transform: translateY(-20px);
}



.navbar-nav{
    display: flex;
    gap: 11px;
    transition: margin-bottom 0.00003s ease-in-out;
    margin-top: 15px;
    /* margin-bottom: 10px; */

}
.nav-item a{
    font-weight: 450;
    font-size: 12px;
    text-decoration: none;
    color: black;
    font-family: 'Nunito Sans',sans-serif;
}
.line{
    height: 15px;
    margin-top: 3px;
    width: 1px;
    background-color: black;
}
#page1{
    height: 120vh;
    width: 100%;

    padding-top: 128px;

    /* display: block; */
    /* background-color: aquamarine; */
    
}
#pg1bnrimg{
    width: 100%;
    height: 318px;
    background-color: #ffffff;
}
#page1 img{
    height: 318px;
    width: 100%;
    position: relative;
    z-index: 9;
    
}
#float{
    background-color: #531F75;
    z-index: 99;
    position: relative;
    height: 42.8vh;
    width: 85%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 119px;
    margin-top: -90px;
}
/* float ke andar ke elements ke liye animation */
#float  {
    opacity: 1; /* Pehle hidden rahega */
    transform: translateY(50px); /* 50px niche se start hoga */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

#form{
    height: 72vh;
    width: 26vw;
    background-color:#8E60BF;
    margin-top: -76.7vh;
    z-index: 999;
    position: absolute;
    text-align: center;
    margin-left: 65vw;
    align-items: center;
    justify-content: center;
}
#form h1{
    text-transform: uppercase;
    color: #FFFFFF;
    width: 100%;
    /* background-color: #e66a18; */
    /* margin-left: 100px; */
    padding-top: 20px;
    font-size: 20px;
}
#name {
    width: 100%;
    height: 5vh;
    display: flex;
    gap: 1px;
    align-items: center;
    /* justify-content: space-evenly; */
    margin-top: 30px;
    margin-left: 3.68%;
}
#name input{
    width: 45%;
    border-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
}
#email {
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;
    /* background-color: #F58220; */
}
#email input{
   min-width: 92%;
    border-radius: 2px;
    background-color: #FFFFFF;
    /* border: none; */
    height: 5vh;
}
#number{
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 15px;
    margin-left: 3.5%;
}
#number select{
    width: 30%;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
}
#number input{
    width: 62%;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
    margin-left: 1px;
}
#statencity{
    display: flex;
    /* justify-content: space-b     etween; */
    /* align-items: center; */
    width: 92%;
    margin-top: 15px;
    margin-left: 3.68%;
    /* background-color: aquamarine; */
}
#state{
    width: 50%;
    margin-right: 6px;
    border-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
    /* margin-left: 12px; */
}
#city{
    width: 50%;
    /* margin-right: 15px; */
    border-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
}
.captcha-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    /* background-color: #531F75; */
    height: 5vh;
    margin-top: 15px;
    margin-left: 3.68%;
}
#captcha-box {
    font-size: 20px;
    font-weight: bold;
    color:              #fc096a;
    background-color: #e6edf3;
    padding: 3px 8px;
    border-radius: 2px;
    width: 50%;
    height: 100%;
    
    text-align: center;
}
#captcha-input {
    width: 50%;
    margin-right: 0px;
    border-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    margin-left: 6px;
    height: 5vh;
}
#message{
    /* background-color: brown; */
    align-items: center;
    color: blue;
    
    justify-content: center;
    margin-left: 29%;
    margin-top: 8px;
}
#check{
    display: flex;
    height: 40px;
    color: #FFFFFF;
    margin-top: 10px;
    font-size: 14px;
    /* background-color: aqua; */
    width: 92%;
    align-items: center;
    /* justify-content: center; */
    margin-left: 3.68%;
}
#check input {
    font-size: 5px;
    height: 18px;
    width: 5%;
    margin-top: -0.5%;
    margin-right: 2%;
   
}




button {
    margin-top: 15px;
    padding: 8px 15px;
    font-size: 16px;
    background-color: orange;
    color: white;
    border: none;
    width: 92%;
    border-radius: 8px;
    margin-left: 12px;
    cursor: pointer;
}
#frm{
    width: 20%;
    border-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
    margin-right: 3px;
}
#float-left{
    width: 30%;
    padding-top: 7%;
    margin-left: 4%;
    height: 100%;
    /* border-right: 1px solid white; */
    /* align-items: center; */
    /* text-align: center; */
    /* background-color: #e06fab; */
}

#float-header{
    display: flex;
    /* text-align: center; */
}
#float-headerh2{
    width: 100%;
    /* background-color: #e06fab; */
}
#float-header{
    width: 100%;

}
#float-header h2{
    /* font-size: 50px; */
    color: rgb(240, 246, 244);
    font-size: 28.8px;
    width: 50%;
    font-family: 'loral',serif;
}
#float-headerh2 h2{
    margin-left: 15px;
    font-size: 50px;
    color: coral;
    font-size: 28.8px;
    width: 100%;
    font-family: 'loral',serif;
    /* background-color: aquamarine; */
}
#float-body{
    font-family: 'Nunito Sans',sans-serif;
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 18.472px;
    font-weight: 100;
    margin-top: 10px;
    

    /* background-color: brown; */
    
}
#vrline{
    width: 0.5px;
    height: 85%;
    background-color: #6b6e72;
}
#page2{
    height: 140vh;
    width: 100%;
    justify-content: space-evenly;
    background-color: #ECECEC;
}
#page2hdr{
    margin-left: 40%;
    padding-top: 3%;
    text-align: center;
    justify-content: center;
    justify-items: center;
    height: 20vh;
    width: 20%;
    /* background-color: #F58220; */
}
#imgntxt{
    display: flex;
    /* flex-direction: column; */
    height:80vh;
    margin-top: 10vh;
    padding-left: 0%;
    padding-right: 0%;
    justify-content: space-evenly;
    width: 100%;
}
#navmenu{
    display: none;
}
#pg2img{
height: 270px;
background-color: #ffffff;
width: 450px;
z-index: 999;
position: relative;
/* position: absolute; */
padding-left: 3.5px;
padding-top: 5px;
align-items: center;
/* position: fixed; */
}
#sqimg{
    height: 52.5%;
    width: 34.158%;
    /* background-color: brown;  */
}
#pg2text{
width: 40%;
padding-top: 0%;
font-family: 'Nunito Sans',sans-serif;
font-size:  20px;
/* position: relative; */

/* background-color: #F58220; */
/* position: relative; */
/* margin-right: 100px; */
/* font-weight: 10; */
text-align: justify;
}

#qcircle{
    height: 26vh;
    width: 12vw;
    position: absolute;
    background-color: #e66a18;
    /* position: fixed; */
    margin-top: -15vh;
    border-top-right-radius: 200px;
    
    margin-left: -2vw;
}
#sqr{
    height: 26vh;
    width: 12vw;
    position: absolute;
    background-color: #e66a18;
    /* position: fixed; */
    margin-top: 22vh;
    /* border-top-right-radius: 200px; */
    
    margin-left: -2vw;
}
#pg2img img{
    width: 440px;
    height: 260px;
    
}
#float-right{
    /* display: flex; */
    /* background-color: darkblue; */
    width: 34%;
    height: 100%;
}
#float-right h4{
    color: #FFFFFF;
    margin-top: 15px;
    margin-left: 3%;
    font-size: 20px;
    font-weight: 100;
    font-family: 'Nunito Sans',sans-serif;
}
#float-button{
    display: flex;
    /* background-color: #e06fab; */
    width: 100%;
    margin-top: 3%;
    height: 9vh;
}
#leftbtn{
    width: 36%;
    height: 100%;
    font-size: small;
    text-align: center;
    padding-top: 10px;
    margin-left: 3%;
    color: #f58220;
    font-family: 'Nunito Sans',sans-serif;
    background-color: rgb(255, 255, 255);
}
#rightbtn{
    width: 50%;
    font-size: small;
    text-align: center;
    padding-top: 10px;
    color: #FFFFFF;
    font-family: 'Nunito Sans',sans-serif;
    margin-left: 3%;

    height: 100%;
    background-color: #f58220;
}
#applytxt{
    color: #FFFFFF;
    margin-top: 4px;
    margin-left: 3%;
    font-size: 19px;
    font-weight: 100;
    font-family: 'Nunito Sans',sans-serif;
}
#sprline{
    width: 60%;
    height: 0.5px;
    background-color: #737678;
    margin-left: 3%;
    margin-top: 4px;
}
#appdate h4{
    font-size: 23PX;
    font-family: 'Nunito Sans',sans-serif;
    color: #F58220;
}
#applastdt h4{
    font-size: 23PX;
    font-family: 'Nunito Sans',sans-serif;
    color: #FFFFFF;
}
#top-rank{
    height: 58vh;
    margin-top: -70px;
    /* background-color: #e06fab; */
}
#toprkheader{
    text-align: center;
    font-size: 28.8px;
    font-weight: 600;
    font-family: 'Nunito Sans',sans-serif;
    color: #531F75;

    /* background-color: #fc096a; */
}
#valueofcompany{
    width: 100%;
    height: 23vh;
    display: flex;
    justify-content:space-between;
    padding-left: 8%;
    padding-right: 8%;
    margin-top: 1%;
    /* align-items: center; */

    /* background-color: #F58220; */

}
#noone{
    height: 100%;
    width: 18%;
    /* background-color: #f58220; */
    /* margin-top: 5%; */
    text-align: center;
}
#noone h2{ 
    font-size: 33px;
    margin-bottom: 15px;
    color: #531F75  ;
}
#valueline{
    height: 50%;
    width: .1px;
    margin-bottom: 40px;
    background-color: #a49fa1;
}
#top-rank{
    height: 15vh;
    width: 100%;
}
#bodytxt{
    text-align: center;
    font-size: x-large; 
}


@media (max-width: 440px) {
    #nav{
        height: 100px;
        width: 100%;
        display: flex;
        position: fixed;
        z-index: 9999;
        padding-left: 3%;
        justify-content: start;
        background-color:white;
}
#logo {
    /* align-items: start; */
    margin-top: 15px;
    height: 75.95px;
     width: 200px;
    margin-left: 1%;
    /* display: block; */
    /* display: none; */
    /* justify-content: start; */
}
#logo-right {
    height: 55.31px;
    width: 0;
    margin-left: 0px;
    margin-top: 10px;
    /* width: 100%; */
    display: none;
}
.navbar-nav{
    display: none;
    flex-direction: column;
    gap: 11px;
    margin-top: 20px;
    position: relative;

}
#navmenu{
    height: 2.5rem;
    width: 3.4rem;
    margin-top: 2.5rem;
    margin-left:20%;
    z-index: 99999;
    border: 2px solid gray;
    position: relative;
    display: flex;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    flex-direction: column;
    /* background-color: #e66a18; */
}
#menuBtn{
    /* background-color: #007bff; */
    color: rgb(134, 122, 122);
    border: none;
    /* padding: 10px 20px; */
    margin-right: 50px;
    cursor: pointer;
    font-size: 16px;
}
#navmenu i{
    font-size: xx-large;
    margin-left: 50%;
    margin-top: 10%;
}
#pg1bnrimg{
    width: 100%;
    height: 318px;
    display: none;
    background-color: #ffffff;
}
#imgntxt{
    display: flex;
    flex-direction: column;
    height:80vh;
    margin-top: 5vh;
    
    justify-content: start;
    width: 100%;
}
#float{
    background-color: #531F75;
    z-index: 99;
    position: relative;
    height: 15rem;
    width: 94%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 3%;
    margin-top: -740px;
}
#applybuttonmain {
    background-color: #5019c7;
    height: 6.5vh;
    width: 96%;
    z-index: 9999;
    border-radius: 50px;
    position: fixed;
    margin-top: 182%;
    margin-left: 2%;
    color: white;
    display: none;
    font-size: 30px;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

#form{
    height: 30rem;
    width: 94%;
    max-width: 500px;
    background-color:#8E60BF;
    margin-top: 3vh;
    z-index: 999;
    position: absolute;
    margin-left: 3%;
    /* margin-top: 50rem; */
    align-items: center;
    justify-content: center;
}

#float-left{
    width: 0%;
    padding-top: 0%;
    margin-left: 0%;
    height: 0%;
    overflow: hidden;
    display: none;
    /* border-right: 1px solid white; */
    /* align-items: center; */
    /* text-align: center; */
    /* background-color: #e06fab; */
}
#float-right{
    display: flex;
    flex-direction: column;
    background-color: darkblue;
    width: 100%;
    position: absolute;
    height: 100%;
}
#float-right h4{
    color: #FFFFFF;
    margin-top: 15px;
    margin-left: 3%;
    font-size: 20px;
    font-weight: 100;
    font-family: 'Nunito Sans',sans-serif;
}
#float-button{
    display: flex;
    /* background-color: #e06fab; */
    width: 100%;
    margin-top: 1%;
    height: 9vh;
}
#leftbtn{
    width: 90px;
    height: 50px;
    font-size: 10px;
    text-align: center;
    padding-top: 13px;
    margin-left: 3%;
    color: #f58220;
    font-family: 'Nunito Sans',sans-serif;
    background-color: rgb(255, 255, 255);
}
#rightbtn{
    width: 130px;
    font-size: 10px;
    text-align: center;
    padding-top: 13px;
    color: #FFFFFF;
    font-family: 'Nunito Sans',sans-serif;
    margin-left: 3%;

    height: 50px;
    background-color: #f58220;
}
#pg2img img{
    width: 99%;
    height: 234px;
    
}
#page2{
    height: 100vh;
    width: 100%;
margin-top: 10%;
    background-color: #ECECEC;
}
#toprkheader{
    text-align: center;
    font-size: 25.8px;
    font-weight: 800;
    font-family: 'Nunito Sans',sans-serif;
    color: #531F75;

    /* background-color: #fc096a; */
}
#page1{
    height: 135vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
/* margin-top: 500px; */
    padding-top: 128px;

    /* display: block; */
    /* background-color: aquamarine; */
    
}
#name {
    width: 100%;
    height: 5vh;
    display: flex;
    gap: 4px;
    align-items: center;
    /* justify-content: space-evenly; */
    margin-top: 30px;
    margin-left: 3.68%;
}
#name input{
    min-width: 45%;
    border-radius: 2px;
    background-color: #FFFFFF;
    border: none;
    height: 5vh;
}

#pg2text{
min-width: 90%;
margin-top: -20px;
font-family: 'Nunito Sans',sans-serif;
font-size: 14px;
/* position: relative; */
margin-left: 5%;
/* font-weight: 10; */
text-align: justify;
margin-top: -35%;
}

#pg2img{
    height: 243px;
    background-color: #ffffff;
    width: 330px;
    z-index: 999;
    position: relative;
    /* position: absolute; */
    padding-left: 3.5px;
    padding-top: 5px;
    margin-left: 3%;
    align-items: center;
    margin-left: 11%;
    margin-top: -70%;
    /* position: fixed; */
    }
    #qcircle{
        height: 0vh;
        width: 0vw;
        position: absolute;
        background-color: #e66a18;
        /* position: fixed; */
        margin-top: 0vh;
        display: none;
        border-top-right-radius: 200px;
        
        margin-left: -2vw;
    }
    #sqr{
        height: 0vh;
        width: 0vw;
        position: absolute;
        background-color: #e66a18;
        /* position: fixed; */
        margin-top: 0vh;
        display: none;
        /* border-top-right-radius: 200px; */
        
        margin-left: 0vw;
    }
    #top-rank{
        height: 58vh;
        margin-top: -170px;
        /* background-color: #e06fab; */
    }
    #valueofcompany{
        width: 100%;
        height: 23vh;
        display: flex;
        justify-content:space-between;
        padding-left: 8%;
        padding-right: 8%;
        margin-top: -330px;
        /* align-items: center; */
    
        /* background-color: #F58220; */
    
    }
    #page2hdr{
        margin-left: 0%;
        padding-top: 3%;
        text-align: center;
        justify-content: center;
        justify-items: center;
        height: 20vh;
        width: 100%;
        /* background-color: #F58220; */
    }
    #check input {
        font-size: 5px;
        height: 18px;
        width: 5%;
        margin-top: -6%;
        margin-left: 0%;
       
    }
    #check{
        margin-top: 15px;
text-align: justify;    }
/* Navmenu basic styling */

/* Menu button styling */

/* Dropdown menu (hidden by default) */
#navbar-nav {
    position: absolute;
    top: 40px;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    width: 150px;
    display: none; /* Initially hidden */
}

#nav-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
}

#nav-item:hover {
    background-color: #f0f0f0;
}

/* Show dropdown when active */
.show {
    display: block !important;
}

}
