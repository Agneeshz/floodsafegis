import { Inter } from "next/font/google";
import GoogleMapReact from "google-map-react";
import Navbar from "@/components/Navbar";
import HeatMap from "@/components/HeatMap";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import { get_all_stations_wl_forecast } from "@/utils/api_call";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/index.module.css";
import GoogleMap from "@/components/GoogleMap";
import Button from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Map({ stations }) {
  const options = [
    { name: "Chenimari", value: "sv" },
    { name: "Chaparmukh", value: "en" },
  ];

  const [day, setDay] = useState(1);

  const get_DL_WL = (inputString) => {
    const regex = /(\d+\.\d+);(\d+\.\d+):(\d+\.\d+)/;

    const matches = inputString.match(regex);
    // console.log({inputString});

    if (matches) {
      const [, value1, value2, value3] = matches;

      return {
        WL: value1,
        DL: value2,
        HFL: value3,
      };
    } else {
      console.log("No match found.");
      return {
        WL: 0,
        DL: 0,
        HFL: 0,
      };
    }
  };
  const get_intensity = (data, forecast) => {
    data = {
      WL: parseFloat(data?.WL),
      DL: parseFloat(data?.DL),
    };
    forecast = parseFloat(forecast);
    if (forecast < data?.WL) {
      return 5;
    } else if (forecast < data?.DL && forecast >= data?.WL) {
      console.log({ forecast, data });
      return (forecast - data?.WL) % data?.DL;
    } else {
      console.log("here", { forecast, data });
      return forecast - data?.DL;
    }
  };

  const stations_lat_lng = stations?.map((item) => {
    return {
      lat: item?.lat,
      lng: item?.lng,
      weight: get_intensity(
        get_DL_WL(item["WL;DL;HFL"]),
        item[`day-${day}-forecast`]["max-WL"]
      ),
    };
  });

  const heatMapData = {
    positions: stations_lat_lng,
    options: {
      radius: 40,
      opacity: 0.6,
    },
  };
  const defaultProps = {
    center: {
      lat: 26.1158,
      lng: 91.7086,
    },
    zoom: 9,
    markers: heatMapData?.positions?.map((item, id) => {
      return {
        id: id,
        lat: item?.lat,
        lng: item?.lng,
      };
    }),
  };

  const [latitude, setLatitude] = useState(26.1158);
  const [longitude, setLongitude] = useState(91.7086);
  const places = ["Chenimari"];
  const [searchText, setSearchText] = useState("");
  const [showViews, setShowViews] = useState(false);
  //Do whatever is needed with this date
  const [date, setDate] = useState(new Date());
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleViewClick = () => {
    setShowViews(!showViews);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  let finalPlaces;
  finalPlaces = places.filter((place) =>
    place.toLowerCase().startsWith(searchText.toLowerCase())
  );
  console.log(finalPlaces);
  return (
    <>
      <div className={styles.homeContainer}>
        {/* <HeatMap
          stations={stations}
          day={day}
          defaultProps={defaultProps}
          latitude={latitude}
          longitude={longitude}
          heatMapData={heatMapData}
          markers={heatMapData?.positions}
        /> */}
        <div style={{ height: "80vh" }}  >
          <GoogleMap  
          
          stations={stations}
          day={day}
          defaultProps={defaultProps}
          latitude={latitude}
          longitude={longitude}
          heatMapData={heatMapData}
          markers={heatMapData?.positions}
          
          />
        </div>

        <div className={styles.searchAndView}>
          <div className={styles.searchDiv}>
            <select
              name="places"
              id="places"
              style={{ padding: "0.7vw 0.3vw", outline: "none" }}
            >
              <option value="Chenimari">Chenimari</option>
            </select>
          </div>
          <div style={{ marginRight: "2vw", outline: "none" }}>
            <input
              type="number"
              style={{
                outline: "none",
                padding: "0.7vw 0.5vw",
                fontSize: "0.9vw",
                width: "14vw",
                borderRadius: "4px",
              }}
              placeholder="Enter the water level"
            />
            <Button text={"Generate Map"} alignment="center" />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const resp = await get_all_stations_wl_forecast();
  const stations = resp?.stations;

  return {
    props: { stations },
  };
}

Map.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
