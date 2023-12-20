import React, { useEffect, useState } from "react";

const GoogleMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 26.14718443124005, lng: 92.49688443124004 },
        // mapTypeId: "satellite",
        mapTypeControl: false,
        disableDefaultUI: true,
      });
      map.addListener("click", (event) => {
        handleMapClick(event, map);
      });
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(26.148136, 92.492067),
        new window.google.maps.LatLng(26.238093, 92.591695)
      );

      let image = "/test2.png";

      class USGSOverlay extends window.google.maps.OverlayView {
        bounds;
        image;
        div;

        constructor(bounds, image) {
          super();
          this.bounds = bounds;
          this.image = image;
        }

        onAdd() {
          this.div = document.createElement("div");
          this.div.style.borderStyle = "none";
          this.div.style.borderWidth = "0px";
          this.div.style.position = "absolute";

          const img = document.createElement("img");
          img.src = this.image;
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.position = "absolute";
          this.div.appendChild(img);

          const panes = this.getPanes();
          panes.overlayLayer.appendChild(this.div);
        }

        draw() {
          const overlayProjection = this.getProjection();
          const sw = overlayProjection.fromLatLngToDivPixel(
            this.bounds.getSouthWest()
          );
          const ne = overlayProjection.fromLatLngToDivPixel(
            this.bounds.getNorthEast()
          );

          if (this.div) {
            this.div.style.left = sw.x + "px";
            this.div.style.top = ne.y + "px";
            this.div.style.width = ne.x - sw.x + "px";
            this.div.style.height = sw.y - ne.y + "px";
          }
        }

        onRemove() {
          if (this.div) {
            this.div.parentNode.removeChild(this.div);
            delete this.div;
          }
        }

        hide() {
          if (this.div) {
            this.div.style.visibility = "hidden";
          }
        }

        show() {
          if (this.div) {
            this.div.style.visibility = "visible";
          }
        }

        toggle() {
          if (this.div) {
            if (this.div.style.visibility === "hidden") {
              this.show();
            } else {
              this.hide();
            }
          }
        }

        toggleDOM(map) {
          if (this.getMap()) {
            this.setMap(null);
          } else {
            this.setMap(map);
          }
        }
      }

      const overlay = new USGSOverlay(bounds, image);
      overlay.setMap(map);

      const toggleButton = document.createElement("button");
      toggleButton.textContent = "Toggle";
      toggleButton.classList.add("custom-map-control-button");

      const toggleDOMButton = document.createElement("button");
      toggleDOMButton.textContent = "Toggle DOM Attachment";
      toggleDOMButton.classList.add("custom-map-control-button");

      toggleButton.addEventListener("click", () => {
        overlay.toggle();
      });

      toggleDOMButton.addEventListener("click", () => {
        overlay.toggleDOM(map);
      });

      map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(
        toggleDOMButton
      );
      map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(
        toggleButton
      );
    };

    if (!window.google) {
      // Load the Google Maps JavaScript API if not already loaded
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBjX_00GI694FLmt2-_70v4ZHTL8DNa54E&callback=initMap&v=weekly`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    } else {
      initMap();
    }
  }, []);

  return <div id="map" style={{ height: "83vh" }}></div>;
};

export default GoogleMap;
