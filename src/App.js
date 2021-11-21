import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadNavbar from "./core/HeadNavbar";
import HotelsGallery from "./core/HotelsGallery";
import HotelsPage from "./core/HotelPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { kebabCase } from "./helpers/kebab";

export const hotelInfo = createContext("unknown");

function App() {
  const routes = data.map((hotel) => {
    return (
      <Route
        path={`/hotel/${encodeURI(kebabCase(hotel["שם"]))}`}
        element={<HotelsPage hotel={hotel} />}
      />
    );
  });
  return (
    <div className="App">
      <BrowserRouter>
        <HeadNavbar />
        <Routes>
          <Route path="/" element={<HotelsGallery />} />
          {routes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const data = [
  {
    שם: "מלון מרום",
    "שם רחוב": "פלמח",
    בית: "051",
    טלפון: 8254355,
  },
  {
    שם: "אלישע בעמ",
    "שם רחוב": "כץ יאיר",
    בית: "012",
    טלפון: 8309009,
  },
  {
    שם: "אירוח הר הכרמל",
    "שם רחוב": "דרך הים",
    בית: 103,
    טלפון: 8381414,
  },
  {
    שם: "מלון הר הכרמל",
    "שם רחוב": "שושנת הכרמל",
    בית: "067",
    טלפון: 8381414,
  },
  {
    שם: "קראון פלזה חיפה",
    "שם רחוב": "יפה נוף",
    בית: 111,
    טלפון: 8350800,
  },
  {
    שם: "מלון דביר",
    "שם רחוב": "יפה נוף",
    בית: 124,
    טלפון: 8389139,
  },
  {
    שם: "מלון נוף",
    "שם רחוב": "שדרות הנשיא",
    בית: 101,
    טלפון: 8354311,
  },
  {
    שם: "מלון דן פנורמה",
    "שם רחוב": "שדרות הנשיא",
    בית: 105,
    טלפון: 8334510,
  },
  {
    שם: "בית שלום כרמל",
    "שם רחוב": "שדרות הנשיא",
    בית: 110,
    טלפון: 8377481,
  },
  {
    שם: "מלון יערות הכרמל",
    "שם רחוב": "יערות הכרמל",
    בית: 31900,
    טלפון: "1809442791",
  },
  {
    שם: "מלון וילה כרמל",
    "שם רחוב": "היינריך היינה",
    בית: 1,
    טלפון: "8375777/8",
  },
  {
    שם: "מלון גלרי חיפה",
    "שם רחוב": "הרצל",
    בית: "061",
    טלפון: 8616161,
  },
  {
    שם: "מלון ליאונרדו",
    "שם רחוב": "דוד אלעזר",
    בית: 10,
    טלפון: 8508888,
  },
];
