import { PulseLoader } from "react-spinners";
import styled from "styled-components";



const StyledFallbackLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Loader: React.FC = () => {
    return (
      <StyledFallbackLoading>
        <PulseLoader color={"#756f86"} />
      </StyledFallbackLoading>
    );
  };

export default Loader;