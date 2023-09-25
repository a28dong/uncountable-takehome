import styled from "styled-components";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { Spacer } from "../components/Spacer";
import OverviewView from "./overview-view";
import TabPanel from "../components/TabPanel";
import { Color } from "../styles/color";
import { useDataset } from "../hooks/useDataset";

const UncountablePage = () => {
  const {
    tabValue,
    handleTabChange,
    activeExperiment,
    selectedExperiment,
    setSelectedExperiment,
    experimentList,
    onView,
  } = useDataset();

  const renderHeader = () => {
    return (
      <StyledHeaderWrapper>
        <Title>Uncountable Assessment by Andrew</Title>
      </StyledHeaderWrapper>
    );
  };

  return (
    <StyledContainer>
      <Spacer height={32} />
      {renderHeader()}
      <Spacer height={32} />

      <Box sx={{ borderBottom: 1, borderColor: `${Color.tabs}` }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: `${Color.tabs}`,
            },
          }}
        >
          <Tab label="Experiment Overview" />
          <Tab label="Input vs Output Relations" />
        </Tabs>
      </Box>
      <Spacer height={32} />
      <TabPanel value={tabValue} index={0}>
        <OverviewView
          activeExperiment={activeExperiment}
          selectedExperiment={selectedExperiment}
          setSelectedExperiment={setSelectedExperiment}
          experimentList={experimentList}
          onView={onView}
        />
      </TabPanel>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  min-height: 100vh;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(Typography).attrs({
  variant: "h2",
  align: "center",
})`
  && {
    color: white;
    font-weight: bold;
    text-shadow: 1px 4px rgba(7, 20, 30, 0.42);
  }
`;

export default UncountablePage;
