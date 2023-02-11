
/* Font style applied to whole content doc */

*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

div {
 font-family: 'Comfortaa', cursive;
}

.aboutContent {
 display: block;
 margin: 50px;
 padding: 25px;
}

#main-page-event-card {
  display: none;
  justify-content: center;
}

.box{
 margin: auto;
 width: 50%;
 border: 3px solid black;
 padding: 10px;
}

.date_cards_wrap{
 background-color: lightsteelblue;
 float: right;
 padding: 20px;
 width: 100%;
 height: 50px;
 content: "";
 display: table;
 clear: both;
 justify-content: center;
 align-items: center;
 font-size: 20px;
 text-transform: uppercase;
 letter-spacing: 5px;
 font-weight: 900;
}

.date_cards_wrap, .date_card_item{
 display: table;
 padding: 15px 25px;
 max-width: 500px; 
 max-height: 500px;
 flex-wrap: wrap;
}

.cards_wrap, .card_inner{
 background: slategray;
 border-radius: 5px;
 padding: 35px 20px;
 min-width: 225px;
 min-height: 315px;
 width: 100%;
} 