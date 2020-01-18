import Home from "../components/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Stocks from "../components/stocks/Stocks";

export default [
  {
    path:'/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/Stocks',
    component: Stocks
  },
]
