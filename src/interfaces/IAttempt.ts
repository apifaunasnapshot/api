interface IAnimalAttempt {
  animal: string;
  isCorrect: boolean;
}

export default interface IAttempt {
  date: Date;
  phase: string;
  tries: IAnimalAttempt[];
}
