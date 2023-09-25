import { useEffect, useState } from "react";
import Dataset from "../data/Uncountable Front End Dataset.json";
import {
  IExperimentData,
  IExperiments,
  Inputs,
  Outputs,
} from "../types/dataset";

export const useDataset = () => {
  const [tabValue, setTabValue] = useState(0);

  const [experiments, setExperiments] = useState<IExperiments>({});

  const [experimentList, setExperimentList] = useState<string[]>([]);
  const [selectedExperiment, setSelectedExperiment] = useState<string>("");
  const [activeExperiment, setActiveExperiment] =
    useState<IExperimentData | null>();

  const [selectedInput, setSelectedInput] = useState<string>(Inputs.POLYMER_1);
  const [selectedOutput, setSelectedOutput] = useState<string>(
    Outputs.VISCOSITY
  );

  useEffect(() => {
    setExperiments(Dataset);
  }, []);

  useEffect(() => {
    if (experiments) {
      setExperimentList(Object.keys(experiments));
    }
  }, [experiments]);

  const onView = () => {
    if (selectedExperiment) {
      setActiveExperiment({
        name: selectedExperiment,
        data: experiments[selectedExperiment],
      });
    }
  };

  return {
    tabValue,
    setTabValue,
    activeExperiment,
    selectedExperiment,
    setSelectedExperiment,
    experimentList,
    onView,
    experiments,
    selectedInput,
    setSelectedInput,
    selectedOutput,
    setSelectedOutput,
  };
};
