interface IAnimalAttempt {
  animal: string;
  isCorrect: boolean;
}

export default interface IAttempt {
  date: Date;
  phaseOne: IAnimalAttempt[];
  phaseTwo: IAnimalAttempt[];
}
