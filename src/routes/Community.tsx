import CustomBackground from "../components/custom/CustomBackground";
import Community from "../components/screens/Community";

const CommunityPage = () => {
  return (
    <>
      <CustomBackground
        direction="to-r"
        colorOne="common.200"
        colorTwo="violet.200"
        colorThree="marine.100"
      >
        <Community />
      </CustomBackground>
    </>
  );
};

export default CommunityPage;
