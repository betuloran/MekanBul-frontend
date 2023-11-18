import "./App.css";
import React from 'react'


function Arama({aramaMetni,onSearch}){
  return(
    <div>
    <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
      <p>
      </p>
      </div>
  )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {yazar}, </span>
              <span><b>Yorum Sayisi:</b> {yorum_sayisi}, </span>
              <span><b>Puan:</b> {puan}</span>
            </li>
  )
}

function Liste(props){
  return(
     <ul>
    {props.yazilar.map(function(yazi){
   return (
    <Yazi key={yazi.id} {...yazi}/>
  );
   })}{""}
      </ul>
  )
}

function App() {
  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React"); 

  const yaziListesi = [
    {
      baslik: "Başlangıç Seviye Java ile Backend Web Development Patikası",
      url: "https://academy.patika.dev/tr/paths",
      yazar: "Ahmet Coşkun",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Başlangıç Seviye PHP ile Backend Web Development Patikası",
      url: "https://academy.patika.dev/tr/paths",
      yazar: "Mehmet Çimen",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Başlangıç Seviye Java .Net Patikası",
      url: "https://academy.patika.dev/tr/paths",
      yazar: "Murat Akın",
      yorum_sayisi: 10,
      puan: 7,
      id: 2,
    },
    {
      baslik: "Mobil Programlama",
      url: "https://academy.patika.dev/tr/paths",
      yazar: "Aslı Kara",
      yorum_sayisi: 12,
      puan: 8,
      id: 3,
    },
    {
      baslik: "Web Programlama: React",
      url: "https://academy.patika.dev/tr/paths",
      yazar: "Asım Yüksel",
      yorum_sayisi: 9,
      puan: 5,
      id: 4,
    },

  ];
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return (
        yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
        yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
      );
    }
  );

  function handleSearch(event){ 
      setAramaMetni(event.target.value);

  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni])


  return (
    <div>
      <h1>Yazılar</h1>
     <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
     <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </div>
  );
}
export default App;