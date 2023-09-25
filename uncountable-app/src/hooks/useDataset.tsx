import { SyntheticEvent, useEffect, useState } from "react";
import Dataset from "../data/Uncountable Front End Dataset.json";
import { IExperimentData, IExperiments } from "../types/dataset";

export const useDataset = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
  };

  const [experiments, setExperiments] = useState<IExperiments>({});

  const [activeExperiment, setActiveExperiment] =
    useState<IExperimentData | null>();

  const [selectedExperiment, setSelectedExperiment] = useState<string>("");
  const [experimentList, setExperimentList] = useState<string[]>([]);

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
    handleTabChange,
    activeExperiment,
    selectedExperiment,
    setSelectedExperiment,
    experimentList,
    onView,
  };
};
