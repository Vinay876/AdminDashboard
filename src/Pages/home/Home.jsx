import Chart from "../../components/charts/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

const Home = () => {
  return (
    <div  className="home">
      <Featuredinfo/>
      <Chart data={userData} title="Sales Analytics" grid  dataKey='Active User'/>
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
