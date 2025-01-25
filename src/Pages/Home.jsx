import DisasterDashboard from "@/components/DisasterDashboard"
import Scroll from '../components/Scroll';
import Services from './Services';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="h-screen">
        <DisasterDashboard />
      </div>
      <div className="relative z-10">
        <Scroll />
        <Services />
      </div>
    </div>
  );
};

export default Home;