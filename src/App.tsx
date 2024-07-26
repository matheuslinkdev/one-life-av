import Navbar from "./components/common/Navbar";
import Home from "./components/screens/Home";
import Message from "./components/screens/Message";
import Missions from "./components/screens/Missions";
import Benefits from "./components/screens/Benefits";
import JoinUs from "./components/screens/JoinUs";
import CustomBackground from "./components/custom/CustomBackground";

function App() {
  return (
    <>
      <Navbar />
      <CustomBackground
        direction="120deg"
        colorOne="violet.300"
        colorTwo="ocre.100"
        colorThree="violet.200"
      >
        <Home />
      </CustomBackground>

      <CustomBackground
        direction="120deg"
        colorOne="violet.300"
        colorTwo="ocre.100"
        colorThree="marine.200"
      >
        <Message />
      </CustomBackground>

      <CustomBackground
        direction="120deg"
        colorOne="violet.300"
        colorTwo="blue.100"
        colorThree="ocre.100"
      >
        <Benefits />
      </CustomBackground>

      <CustomBackground
        direction="to-r"
        colorOne="common.200"
        colorTwo="ocre.100"
        colorThree="marine.100"
      >
        <Missions />
      </CustomBackground>

      <CustomBackground
        direction="270deg"
        colorOne="violet.200"
        colorTwo="ocre.100"
        colorThree="violet.300"
      >
        <JoinUs />
      </CustomBackground>
    </>
  );
}

export default App;
