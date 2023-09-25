export enum Inputs {
  POLYMER_1 = "Polymer 1",
  POLYMER_2 = "Polymer 2",
  POLYMER_3 = "Polymer 3",
  POLYMER_4 = "Polymer 4",
  CARBON_BLACK_HIGH_GRADE = "Carbon Black High Grade",
  CARBON_BLACK_LOW_GRADE = "Carbon Black Low Grade",
  SILICA_FILLER_1 = "Silica Filler 1",
  SILICA_FILLER_2 = "Silica Filler 2",
  PLASTICIZER_1 = "Plasticizer 1",
  PLASTICIZER_2 = "Plasticizer 2",
  PLASTICIZER_3 = "Plasticizer 3",
  ANTIOXIDANT = "Antioxidant",
  COLORING_PIGMENT = "Coloring Pigment",
  CO_AGENT_1 = "Co-Agent 1",
  CO_AGENT_2 = "Co-Agent 2",
  CO_AGENT_3 = "Co-Agent 3",
  CURING_AGENT_1 = "Curing Agent 1",
  CURING_AGENT_2 = "Curing Agent 2",
  OVEN_TEMPERATURE = "Oven Temperature",
}

export enum Outputs {
  VISCOSITY = "Viscosity",
  CURE_TIME = "Cure Time",
  ELONGATION = "Elongation",
  TENSILE_STRENGTH = "Tensile Strength",
  COMPRESSION_SET = "Compression Set",
}

export interface IExperiments {
  [experiment: string]: {
    inputs: {
      [key in Inputs]: number;
    };
    outputs: {
      [key in Outputs]: number;
    };
  };
}

export interface IExperimentData {
  name: string;
  data: {
    inputs: {
      [key in Inputs]: number;
    };
    outputs: {
      [key in Outputs]: number;
    };
  };
}
