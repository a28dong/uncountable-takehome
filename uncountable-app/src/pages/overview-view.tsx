import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { Color } from "../styles/color";
import { Spacer } from "../components/Spacer";
import { IExperimentData, Inputs, Outputs } from "../types/dataset";
import { MainWrapper } from "../components/wrappers/main";
import { InputWrapper } from "../components/wrappers/input";

interface IOverviewView {
  activeExperiment: IExperimentData | null | undefined;
  selectedExperiment: string;
  setSelectedExperiment: (experiment: string) => void;
  experimentList: string[];
  onView: () => void;
}

const OverviewView = (props: IOverviewView) => {
  const {
    activeExperiment,
    selectedExperiment,
    setSelectedExperiment,
    experimentList,
    onView,
  } = props;

  const renderOverview = () => {
    if (!activeExperiment) {
      return <></>;
    }

    return (
      <MainOverviewWrapper>
        <OverviewTitle>{`${activeExperiment.name} Overview`}</OverviewTitle>
        <Divider style={{ width: "100%" }} />
        <OverviewWrapper>
          <SectionWrapper>
            <SectionTitle>Inputs</SectionTitle>
            <Grid container spacing={1}>
              {Object.keys(Inputs).map((input) => {
                return (
                  <>
                    <Grid item xs={8}>
                      <Item>
                        <Typography>
                          {Inputs[input as keyof typeof Inputs]}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Typography>
                          {
                            activeExperiment.data.inputs[
                              Inputs[input as keyof typeof Inputs]
                            ]
                          }
                        </Typography>
                      </Item>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </SectionWrapper>
          <Divider color={Color.secondary} orientation="vertical" flexItem />
          <SectionWrapper>
            <SectionTitle>Outputs</SectionTitle>
            <Grid container spacing={1}>
              {Object.keys(Outputs).map((output) => {
                return (
                  <>
                    <Grid item xs={8}>
                      <Item>
                        <Typography>
                          {Outputs[output as keyof typeof Outputs]}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Typography>
                          {
                            activeExperiment.data.outputs[
                              Outputs[output as keyof typeof Outputs]
                            ]
                          }
                        </Typography>
                      </Item>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </SectionWrapper>
        </OverviewWrapper>
      </MainOverviewWrapper>
    );
  };

  return (
    <MainWrapper>
      <InputWrapper>
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Select Experiment</InputLabel>
          <Select
            value={selectedExperiment}
            label="Select Experiment"
            onChange={(event: SelectChangeEvent) =>
              setSelectedExperiment(event.target.value as string)
            }
          >
            {experimentList.map((experiment) => {
              return (
                <MenuItem key={experiment} value={experiment}>
                  {experiment}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <StyledButton onClick={onView}>View</StyledButton>
      </InputWrapper>
      <Spacer height={32} />
      {activeExperiment && renderOverview()}
    </MainWrapper>
  );
};

const MainOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${Color.bubble};
  padding: 16px;
  gap: 16px;
  width: 80%;
`;

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px;
  gap: 16px;
  width: 100%;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 0px 32px;
`;

const OverviewTitle = styled(Typography).attrs({
  variant: "h4",
  align: "center",
})`
  && {
    font-weight: bold;
  }
`;

const SectionTitle = styled(Typography).attrs({
  variant: "h5",
  align: "center",
})`
  && {
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: ${Color.background};
    color: white;
    padding: 2px;
  }
`;

const Item = styled(Paper)`
  && {
    padding: 8px;
    background-color: ${Color.paper};
  }
`;

export default OverviewView;
