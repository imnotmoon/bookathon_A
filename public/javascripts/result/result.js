import { render } from "./render-result.js";
import { setStore, getStore } from "../store.js";

export const renderResult = ({ result }) => {
	render({ result });
};
