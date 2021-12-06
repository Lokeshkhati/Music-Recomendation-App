import React from "react";
import "./styles.css";
import { useState } from "react";

const musicLib = {
  Bollywood: [
    {
      name: "Raataan Lambiyan",
      singer: "Tanishk Bagchi",
      img:
        "https://a10.gaanacdn.com/gn_img/song/lJvKa56KDV/vKa91Z1RKD/size_m_1628085090.jpg"
    },
    {
      name: "Dil Tod ke",
      singer: "B Praak",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/81l3Me3rMx/1l3MYe7e3r/size_m.webp"
    },
    {
      name: "Dilbar",
      singer: "Neha Kakkar",
      img:
        "https://a10.gaanacdn.com/gn_img/song/XYybzNrb2g/ybzopp44K2/size_m_1530684734.jpg"
    }
  ],
  Haryanavi: [
    {
      name: "52 Gaj Ka Daman",
      singer: " Renuka Panwar",
      img:
        "https://a10.gaanacdn.com/images/albums/62/3545362/crop_480x480_1606124316_3545362.jpg"
    },
    {
      name: "Kamar Teri Left Right Hale",
      singer: "Sandeep Surila",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/ZaP37OR3Dy/aP37YVOXbD/size_m.jpg"
    },
    {
      name: "Chatak Matak",
      singer: "Renuka Panwar",
      img:
        "https://a10.gaanacdn.com/images/albums/20/3679220/crop_480x480_1608391493_3679220.jpg"
    },
    {
      name: "Moto Song",
      singer: " Diler Singh Kharkiya",
      img:
        "https://a10.gaanacdn.com/images/albums/62/3181962/crop_480x480_1589393795_3181962.jpg"
    }
  ],

  Party: [
    {
      name: "Aankh Marey ",
      singer: "Neha Kakkar, Mika Singh",
      img:
        "https://a10.gaanacdn.com/images/song/88/24643688/crop_480x480_1544078542.jpg"
    },
    {
      name: "She Move It Like ",
      singer: "Badshah",
      img:
        "https://a10.gaanacdn.com/images/song/92/24106092/crop_480x480_1544428989.jpg"
    },
    {
      name: "Makhna Song",
      singer: "Yo Yo Honey Singh",
      img:
        " https://a10.gaanacdn.com/images/song/96/24880696/crop_480x480_1545388310.jpg"
    }
  ],
  Punjabi: [
    {
      name: "Bamb jatt",
      singer: "Amrit Maan ",
      img:
        "https://a10.gaanacdn.com/images/albums/97/1874197/crop_480x480_1541152209_1874197.jpg"
    },
    {
      name: "Bijlee Bijlee",
      singer: "Harrdy Sandhu ",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyB1DPbO/size_m.jpg"
    },
    {
      name: "So High song",
      singer: "Sidhu Moose Wala",
      img:
        "https://a10.gaanacdn.com/images/albums/50/1977550/crop_480x480_1590578876_1977550.jpg"
    },
    {
      name: "Teeji Seat ",
      singer: "Kaka",
      img:
        "http://a10.gaanacdn.com/images/albums/3/3848603/crop_480x480_1612581856_3848603.jpg"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Party");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Music Recommendation </h1>
      <p>Hey There, Checkout my favourite Music.</p>

      <div>
        {Object.keys(musicLib).map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {musicLib[selectedGenre].map((genre) => (
            <li key={genre.name}>
              <div className="div-img">
                <img src={genre.img} alt="img" />{" "}
              </div>
              <div className="div-flex">
                <div className="div-name"> {genre.name} </div>
                <div className="div-singer"> {genre.singer} </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
