import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Application from "./helper";

const button = document.getElementById("btn");

const application = new Application(button);

application.initialize();