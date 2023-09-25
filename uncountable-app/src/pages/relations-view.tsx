import styled from "styled-components";
import { IExperiments, Inputs, Outputs } from "../types/dataset";
import { MainWrapper } from "../components/wrappers/main";
import { InputWrapper } from "../components/wrappers/input";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Spacer } from "../components/Spacer";
import { Color } from "../styles/color";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

interface IRelationView {
  experiments: IExperiments;
  selectedInput: Inputs;
  setSelectedInput: (input: Inputs) => void;
  selectedOutput: Outputs;
  setSelectedOutput: (output: Outputs) => void;
}
const RelationView = (props: IRelationView) => {
  const {
    experiments,
    selectedInput,
    setSelectedInput,
    selectedOutput,
    setSelectedOutput,
  } = props;

  const renderRelation = () => {
    if (!experiments) {
      return <></>;
    }

    const data = {
      datasets: [
        {
          label: `${selectedInput} vs ${selectedOutput}`,
          data: Object.keys(experiments).map((experiment) => {
            return {
              x: experiments[experiment].inputs[selectedInput],
              y: experiments[experiment].outputs[selectedOutput],
            };
          }),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };

    const options = {
      scales: {
        x: { title: { display: true, text: `${selectedInput}` } },
        y: {
          beginAtZero: true,
          title: { display: true, text: `${selectedOutput}` },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = Object.keys(experiments)[context.dataIndex];
              return (
                label + ": (" + context.parsed.x + ", " + context.parsed.y + ")"
              );
            },
          },
        },
      },
    };

    console.log(
      Object.keys(experiments).map((experiment) => {
        return {
          x: experiments[experiment].inputs[selectedInput],
          y: experiments[experiment].outputs[selectedOutput],
        };
      })
    );

    return (
      <RelationWrapper>
        <Scatter options={options} data={data} />
      </RelationWrapper>
    );
  };

  return (
    <MainWrapper>
      <InputWrapper>
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Select Input</InputLabel>
          <Select
            value={selectedInput}
            label="Select Input"
            onChange={(event: SelectChangeEvent) =>
              setSelectedInput(event.target.value as Inputs)
            }
            defaultValue={selectedInput}
          >
            {Object.values(Inputs).map((input) => {
              return (
                <MenuItem key={input} value={input}>
                  {input}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Select Output</InputLabel>
          <Select
            value={selectedOutput}
            label="Select Output"
            onChange={(event: SelectChangeEvent) =>
              setSelectedOutput(event.target.value as Outputs)
            }
            defaultValue={selectedOutput}
          >
            {Object.values(Outputs).map((output) => {
              return (
                <MenuItem key={output} value={output}>
                  {output}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </InputWrapper>
      <Spacer height={32} />
      {experiments && renderRelation()}
    </MainWrapper>
  );
};

const RelationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${Color.bubble};
  padding: 16px;
  min-width: 80%;
`;

export default RelationView;
