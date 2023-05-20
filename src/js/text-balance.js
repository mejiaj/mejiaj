import balanceText from "balance-text";

const HEADING_TYPES = ["h1", "h2", "h3", "h4", "h5", "h6", ".balance-text"];
const headings = document.querySelectorAll(HEADING_TYPES);

balanceText(headings, { watch: true });
