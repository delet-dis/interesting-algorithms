import LabyrinthGeneratorInterface from "@/data/interfaces/labyrinth/LabyrinthGeneratorInterface";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";

class LabyrinthGeneratorRepository implements LabyrinthGeneratorInterface{
    private static instance: LabyrinthGeneratorRepository;

    public static getInstance(): LabyrinthGeneratorRepository {
        if (!LabyrinthGeneratorRepository.instance) {
            LabyrinthGeneratorRepository.instance = new LabyrinthGeneratorRepository();
        }

        return LabyrinthGeneratorRepository.instance;
    }

    generateLabyrinth(width: number, height: number): LabyrinthCell[][] {
        //TODO: implement generator logic
        return [];
    }
}

