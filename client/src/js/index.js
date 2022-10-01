// Import modules
import "./form.js";
import "./submit.js";
import { initDb, getDb, postDb } from './database';

// Import CSS
import "../css/index.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import logos
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

window.addEventListener("load", function () {
  initDb();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

// getDb();
// postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
// getDb();



