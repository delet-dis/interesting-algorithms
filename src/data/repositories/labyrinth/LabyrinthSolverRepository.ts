import LabyrinthSolverInterface from "@/data/interfaces/labyrinth/LabyrinthSolverInterface";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";

class LabyrinthSolverRepository implements LabyrinthSolverInterface{
    private static instance: LabyrinthSolverRepository;

    public static getInstance(): LabyrinthSolverRepository {
        if (!LabyrinthSolverRepository.instance) {
            LabyrinthSolverRepository.instance = new LabyrinthSolverRepository();
        }

        return LabyrinthSolverRepository.instance;
    }

    getLabyrinthSolution(labyrinthCells: LabyrinthCell[][]): LabyrinthSolution {
        //TODO: implement solver logic
        return new LabyrinthSolution([],[]);
    }
}
