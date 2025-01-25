import DisasterDashboard from "@/components/DisasterDashboard"
import DonationForm from "@/components/DonationForm"
import Scroll from '../components/Scroll';
import Services from './Services';


const Home = () => {
  return (
    <div>
      <DisasterDashboard/>
      <Scroll/>
      <Services/>
    </div>
  )
}

export default Home