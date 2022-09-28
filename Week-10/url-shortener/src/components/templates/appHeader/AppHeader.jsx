import { NavBar } from "../../organisms";

const PAGES = [
    { link: '/home', text: 'Home' },
    { link: '/contact-us', text: 'Contact us' },
];

const AppHeader = () => (
    <NavBar items={PAGES} />
);

export default AppHeader;
