import { Container } from "@mui/material";
import { useRecoilValue } from "recoil";

import Static from "./Static";
import Dual from "./Dual";
import Vaa from "./Vaa";
import AssetAllocationSelect from "./AssetAllocationSelect";
import BacktestRunForm from "./BacktestRunForm";
import Page from "../../Components/Page";
import DatePicker from "../../Components/DatePicker";
import { selectedAlgorithmState } from "../../recoil/allocationAtom";

function AssetAllocation() {
  const selectedAlgorithmValue = useRecoilValue(selectedAlgorithmState);

  return (
    <Page title="우리 모두를 웃게 하는 퀀트투자, 퀀터스">
      <Container maxWidth="lg" sx={{ pt: 35 }}>
        <AssetAllocationSelect />
        {selectedAlgorithmValue === "Static" && <Static />}
        {selectedAlgorithmValue === "Dual" && <Dual />}
        {selectedAlgorithmValue === "VAA" && <Vaa />}
        <DatePicker />
        <BacktestRunForm />
      </Container>
    </Page>
  );
}

export default AssetAllocation;
